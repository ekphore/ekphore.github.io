// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// a drawn copy of the library browser, so the page doesn't ship screenshots
// of third-party instrument artwork
const collections = [
  { name: "All sounds", count: "1,284 sounds", art: "all" },
  { name: "Felt Upright", count: "42 sounds", art: "a" },
  { name: "Tape Drums", count: "16 sounds", art: "b" },
  { name: "Glass Pads", count: "88 sounds", art: "c" },
  { name: "Analog Bass", count: "31 sounds", art: "d" },
];

const sounds = [
  { name: "Basement Kit (87 bpm)", tag: "PRE", fav: false },
  { name: "Tape Drums", tag: "NKI", fav: true },
  { name: "Late Night Brushes (72 bpm)", tag: "PRE", fav: false },
  { name: "Dusty Break (85 bpm)", tag: "PRE", fav: false },
  { name: "Room Kit Wide", tag: "NKI", fav: false },
];

export default function LibraryMock() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.titlebar}>
        <img src={useBaseUrl("/img/logo.svg")} alt="" className={styles.appIcon} />
        <span className={styles.titleText}>ekphore — Library</span>
        <span className={styles.controls}>
          <svg viewBox="0 0 18 18" className={styles.control}>
            <path d="M5 7.5l4 4 4-4" />
          </svg>
          <svg viewBox="0 0 18 18" className={styles.control}>
            <path d="M5 10.5l4-4 4 4" />
          </svg>
          <svg viewBox="0 0 18 18" className={styles.close}>
            <circle cx="9" cy="9" r="8" />
            <path d="M6 6l6 6M12 6l-6 6" />
          </svg>
        </span>
      </div>
      <div className={styles.appHeader}>
        <span className={styles.appName}>ekphore</span>
        <span className={styles.appTagline}>The Open Source Sampler</span>
      </div>
      <div className={styles.appBody}>
        <div className={styles.sidebar}>
          <div className={styles.libraryTitle}>Your library</div>
          {collections.map((c, i) => (
            <div
              key={c.name}
              className={`${styles.collection} ${i === 0 ? styles.selected : ""}`}
            >
              <span className={`${styles.art} ${styles["art_" + c.art]}`}>
                {c.art === "all" ? "*" : ""}
              </span>
              <span>
                <span className={styles.rowName}>{c.name}</span>
                <span className={styles.rowSub}>{c.count}</span>
              </span>
            </div>
          ))}
        </div>
        <div className={styles.list}>
          <div className={styles.search}>Search instruments, presets or collections…</div>
          <div className={styles.filters}>
            <span className={styles.filterOn}>All sounds</span>
            <span>Instruments</span>
            <span>Presets</span>
            <span>Favorites</span>
          </div>
          {sounds.map((s) => (
            <div key={s.name} className={styles.sound}>
              <span className={`${styles.art} ${styles.art_b}`} />
              <span className={styles.soundText}>
                <span className={styles.rowName}>{s.name}</span>
                <span className={styles.rowSub}>Tape Drums</span>
              </span>
              <span className={styles.soundTag}>{s.tag}</span>
              <span className={s.fav ? styles.starOn : styles.star}>★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
