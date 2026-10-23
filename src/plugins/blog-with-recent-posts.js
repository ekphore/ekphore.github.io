// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

// the stock blog plugin, plus its newest posts published as global data so the
// home page can list them without a hand-kept copy
const blog = require("@docusaurus/plugin-content-blog");

const recent_count = 3;

async function blog_with_recent_posts(context, options) {
  const plugin = await blog.default(context, options);
  return {
    ...plugin,
    async contentLoaded(args) {
      // blogPosts is already sorted newest first
      const recent = args.content.blogPosts
        .slice(0, recent_count)
        .map(({ metadata }) => ({
          url: metadata.permalink,
          title: metadata.title,
          date: metadata.date,
          summary: metadata.description,
        }));
      args.actions.setGlobalData({ recent });
      return plugin.contentLoaded(args);
    },
  };
}

module.exports = { ...blog, default: blog_with_recent_posts };
