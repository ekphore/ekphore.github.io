// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

import React from "react";
import Link from "@docusaurus/Link";
import ReactMarkdown from "react-markdown";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import {
  PlatformButtons,
  asset_for,
  format_date,
  format_size,
  platforms,
  releases_url,
  useReleases,
} from "@site/src/components/Releases";
import styles from "./styles.module.css";

function ReleaseCard({ title, blurb, release, loading }) {
  return (
    <section className={styles.card}>
      <div className={styles.cardHead}>
        <div>
          <h2>{title}</h2>
          <p className={styles.blurb}>{blurb}</p>
        </div>
        {release && (
          <div className={styles.version}>
            <span className="ek-tag">{release.tag_name}</span>
            <span>{format_date(release.published_at)}</span>
          </div>
        )}
      </div>
      {loading ? (
        <p className={styles.blurb}>Looking up releases…</p>
      ) : release ? (
        <>
          <PlatformButtons release={release} />
          {release.body && (
            <details className={styles.details}>
              <summary>What's changed in {release.tag_name}</summary>
              <div className={styles.releaseBody}>
                <ReactMarkdown>{release.body}</ReactMarkdown>
              </div>
            </details>
          )}
          <Link href={release.html_url} className={styles.notes}>
            View {release.tag_name} on GitHub →
          </Link>
        </>
      ) : (
        <PlatformButtons />
      )}
    </section>
  );
}

function PreviousReleases({ releases }) {
  if (releases.length === 0) return null;

  return (
    <section className={styles.card}>
      <h2>Previous versions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Version</th>
            <th>Published</th>
            <th>Downloads</th>
          </tr>
        </thead>
        <tbody>
          {releases.map((r) => (
            <tr key={r.id}>
              <td>
                <Link href={r.html_url}>
                  <code>{r.tag_name}</code>
                </Link>
                {r.prerelease && <span className={styles.pre}>preview</span>}
              </td>
              <td>{format_date(r.published_at)}</td>
              <td className={styles.assetLinks}>
                {platforms.map((p) => {
                  const asset = asset_for(r, p);
                  return asset ? (
                    <Link
                      key={p.key}
                      href={asset.browser_download_url}
                      title={format_size(asset.size)}
                    >
                      {p.label}
                    </Link>
                  ) : null;
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function Downloads() {
  const { loading, error, releases, stable, preview } = useReleases();
  const older = releases.filter((r) => r !== stable && r !== preview);
  // a preview older than the latest stable isn't worth offering
  const show_preview =
    preview &&
    (!stable || new Date(preview.published_at) > new Date(stable.published_at));

  return (
    <Layout
      title="Downloads"
      description="Download ekphore for Windows, macOS and Linux."
    >
      <main className={styles.main}>
        <h1 className={styles.title}>Download ekphore</h1>

        {error && (
          <Admonition type="warning" title="Couldn't reach GitHub">
            {error} Every build is also listed on the{" "}
            <Link href={releases_url}>GitHub releases page</Link>.
          </Admonition>
        )}

        <ReleaseCard
          title="Stable"
          blurb="Tested releases. Pick this unless you're chasing a specific fix."
          release={stable}
          loading={loading}
        />
        {(loading || show_preview) && (
          <ReleaseCard
            title="Preview"
            blurb="Built from recent development work. Expect rough edges and report them."
            release={show_preview ? preview : undefined}
            loading={loading}
          />
        )}
        <PreviousReleases releases={older} />

        <section className={styles.card}>
          <h2>Build from source</h2>
          <p className={styles.blurb}>
            ekphore is composed of several projects. Clone them in succession
            and follow the{" "}
            <Link to="/docs/development/building">build instructions</Link> in
            order to compile it.
          </p>
          <pre className={styles.clone}>
            {[
              "git clone https://github.com/ekphore/ekphore",
              "git clone https://github.com/ekphore/libnki",
              "git clone https://github.com/ekphore/libnks",
              "git clone https://github.com/ekphore/libksp",
            ].join("\n")}
          </pre>
        </section>

        <Admonition type="note" title="Unsigned builds">
          If running ekphore on macOS or Windows, you may get a warning about
          the application being unsigned. Follow the{" "}
          <Link to="/docs/setup/unsigned-builds">documentation</Link> to know
          how to approve it.
        </Admonition>
      </main>
    </Layout>
  );
}
