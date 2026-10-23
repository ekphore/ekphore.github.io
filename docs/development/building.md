---
title: Building from source
sidebar_position: 1
---

# Building from source

## Dependencies

You will need cmake, libsndfile, libpng, libtiff, FreeType, SQLite, OpenSSL and zlib installed.
You also have SDL3, libsusb and X11 headers as optional dependencies.

CMake fetches by itself WebP, Lua, NanoSVG, the plug-in SDKs and FFTW so keep that in mind if
you want to package it.

# Getting the source

You can just clone:

```bash
git clone https://github.com/ekphore/ekphore
git clone https://github.com/ekphore/libnki
git clone https://github.com/ekphore/libnks
git clone https://github.com/ekphore/libksp
```

## Building

From the root folder, you can build ekphore with a bog standard cmake build:

```bash
cmake -S ekphore -B ekphore/build -DCMAKE_BUILD_TYPE=Release
cmake --build ekphore/build --parallel
./ekphore/build/ekphore-ui
```

You can also build the libraries separately in a similar fashion if you so want.

There is a few additional compile-time toggles you may want to modify, they are listed below:

| Option | Default | What it does |
| --- | --- | --- |
| `EKPHORE_BUILD_STANDALONE_UI` | `ON` | Build the standalone app (needs SDL3) |
| `EKPHORE_BUILD_CLAP` | `ON` | Build the CLAP plug-in |
| `EKPHORE_BUILD_VST3` | `ON` | Build the VST3 plug-in |
| `EKPHORE_BUILD_LV2` | `ON` | Build the LV2 plug-in |
| `EKPHORE_BUILD_AU` | `ON` (macOS) | Build the AUv2 plug-in |
| `LIBNKS_BUILD_DAEMON` | `ON` | Build `nksd`, which plug-ins need for keyboard integration |
| `LIBNKS_BUILD_EXAMPLES` | `ON` | Build the libnks SDK examples |
| `LIBNKI_BUNDLED_KEY_PATH` | empty | Embeds Kontakt's private key. DO NOT REDISTRIBUTE IF YOU ENABLE THIS TOGGLE. |
| `EKPHORE_NATIVE_GRAIN_FFTW_ARCHIVE` | empty | Path to the official FFTW tarball for offline builds |
| `EKPHORE_NATIVE_GRAIN_FFTW_INCLUDE_DIR` | empty | Use a prebuilt FFTW instead of building it; set together with `…_LIBRARY` |
| `EKPHORE_NATIVE_GRAIN_FFTW_LIBRARY` | empty | The prebuilt static library matching `…_INCLUDE_DIR` |
