// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import LibraryMock from "@site/src/components/HomepageHero/LibraryMock";
import {
  PlatformButtons,
  useReleases,
} from "@site/src/components/Releases";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./index.module.css";


function Hero() {
  const { stable, preview } = useReleases();
  const release = stable ?? preview;

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <img
            src={useBaseUrl("/img/logo.svg")}
            alt=""
            className={styles.heroLogo}
          />
          <h1 className={styles.title}>
            <span className={styles.gradient}>ekphore</span>, The Open Source
            Sampler
          </h1>
          <p className={styles.subtitle}>
            ekphore is a Free Libre and Open Source sampler compatible with
            Kontakt instruments, capable of emulating faithfully most of its
            spec.
          </p>
          <div className={styles.downloadBlock}>
            <PlatformButtons release={release} />
            {release && (
              <p className={styles.releaseNote}>
                Latest: <Link href={release.html_url}>{release.tag_name}</Link>
              </p>
            )}
          </div>
        </div>
        <div className={styles.heroMock}>
          <LibraryMock />
        </div>
      </div>
    </header>
  );
}

function RecentPosts() {
  const { recent } = usePluginData("docusaurus-plugin-content-blog");
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Recent blog posts</h2>
      <p className={styles.sectionSubtitle}>
        Release notes and write-ups on how things work under the hood.
      </p>
      <div className={styles.postGrid}>
        {recent.map((post) => (
          <Link key={post.url} to={post.url} className={styles.post}>
            <span className={styles.postDate}>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className={styles.postTitle}>{post.title}</span>
            <span className={styles.postSummary}>{post.summary}</span>
          </Link>
        ))}
        <Link to="/blog" className={`${styles.post} ${styles.postMore}`}>
          <span className={styles.postTitle}>All posts →</span>
          <span className={styles.postSummary}>
            Or follow along with the <a href="/blog/rss.xml">RSS feed</a>.
          </span>
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About the project</h2>
      <div className={styles.aboutGrid}>
        <p>
          ekphore is a FOSS sampler compatible with Kontakt instruments,
          reimplementing most of its filters, effects, UI, languages buses and
          more.
        </p>
        <p>
          It is composed of four projects: <code>ekphore</code>: the core
          sampler doing all the DSP rendering and UI, <code>libnki</code>: the
          library handling file formats parsing, <code>libksp</code> a small
          interpreter for the KSP language developed for Kontakt and{" "}
          <code>libnks</code> a reimplementation of the NKS protocol for
          keyboard integration.
        </p>
        <p>
          Something sounds wrong? That's a bug we want to hear about. See the{" "}
          <Link to="/faq">FAQ</Link>, the <Link to="/docs">documentation</Link>,
          or open an issue on{" "}
          <Link href="https://github.com/ekphore/ekphore/issues">GitHub</Link>.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      description="ekphore is a Free Libre and Open Source sampler compatible with Kontakt instruments, capable of emulating faithfully most of its spec."
    >
      <Hero />
      <main className={styles.main}>
        <RecentPosts />
        <About />
      </main>
    </Layout>
  );
}
