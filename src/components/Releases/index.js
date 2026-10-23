// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export const releases_url = "https://github.com/ekphore/ekphore/releases";
const api_url = "https://api.github.com/repos/ekphore/ekphore/releases";

export const platforms = [
  {
    key: "linux",
    label: "Linux",
    detail: "x86-64, glibc 2.36+",
    formats: "Standalone · CLAP · LV2 · VST3",
    asset: "ekphore-linux-x86_64.tar.gz",
  },
  {
    key: "macos",
    label: "macOS",
    detail: "Apple silicon",
    formats: "Standalone · AU · CLAP · VST3",
    asset: "ekphore-macos.tar.gz",
  },
  {
    key: "windows",
    label: "Windows",
    detail: "x86-64",
    formats: "Standalone · CLAP · VST3",
    asset: "ekphore-windows-x86_64.zip",
  },
];

export function asset_for(release, platform) {
  if (!release) return undefined;
  return release.assets.find((asset) => asset.name === platform.asset);
}

export function guess_platform() {
  if (typeof navigator === "undefined") return undefined;
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Mac OS X|Macintosh/i.test(ua)) return "macos";
  if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return undefined;
}

export function format_size(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function format_date(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// unauthenticated GitHub API calls are limited to 60 an hour per IP, so a
// failure here is ordinary and the pages fall back to the releases page
export function useReleases() {
  const [state, set_state] = useState({ loading: true, releases: [] });

  useEffect(() => {
    let cancelled = false;
    fetch(`${api_url}?per_page=30`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((resp) => {
        if (resp.status === 403 || resp.status === 429)
          throw new Error("GitHub is rate-limiting this address, try again later.");
        // the API answers 404 until the repository is public
        if (resp.status === 404) return [];
        if (!resp.ok) throw new Error(`GitHub API returned ${resp.status}.`);
        return resp.json();
      })
      .then((data) => {
        if (cancelled) return;
        set_state({ loading: false, releases: data.filter((r) => !r.draft) });
      })
      .catch((err) => {
        if (cancelled) return;
        set_state({ loading: false, releases: [], error: err.message });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const stable = state.releases.find((r) => !r.prerelease);
  const preview = state.releases.find((r) => r.prerelease);
  return { ...state, stable, preview };
}

export function PlatformButtons({ release }) {
  const [preferred, set_preferred] = useState(undefined);
  useEffect(() => set_preferred(guess_platform()), []);

  return (
    <div className={styles.buttons}>
      {platforms.map((platform) => {
        const asset = asset_for(release, platform);
        const href = asset ? asset.browser_download_url : releases_url;
        return (
          <Link
            key={platform.key}
            href={href}
            className={`${styles.platform} ${
              preferred === platform.key ? styles.preferred : ""
            }`}
          >
            <span className={styles.platformLabel}>{platform.label}</span>
            <span className={styles.platformDetail}>
              {asset
                ? `${platform.detail} · ${format_size(asset.size)}`
                : platform.detail}
            </span>
            <span className={styles.platformFormats}>{platform.formats}</span>
          </Link>
        );
      })}
    </div>
  );
}
