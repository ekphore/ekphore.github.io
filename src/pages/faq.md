---
title: Frequently Asked Questions
description: Common questions about ekphore, the open source sampler.
hide_table_of_contents: false
---

# Frequently Asked Questions

## General

### What is ekphore exactly?

It is a sampler, that is a program able to play samples. It is compatible with Kontakt instruments.

### And what is Kontakt?

Kontakt is the industry standard for modern sampled instrument. It is likely that if you hear
realistic instruments in a movie, game, score or whatever, it contains a Kontakt instrument.
It is also a proprietary monolith of sizes rarely seen. 

## Instruments

### Does ekphore come with instruments?

Nope, at least not for now.

### Will my instrument work/How compatible is it?

ekphore was tested on essentially the entire Komplete collector's edition 24 and produces
faithful renders for all of the tested instruments.
It _should_ support all Kontakt file formats from v1 to now.

UI wise, the legacy performance view and default UIs are supported along with Native UI, although Komplete UI isn't yet supported.
With that said, Native UI, which is _very_ close, is supported and works well in a few select instruments,
which means it shouldn't be too hard to add support for.

If something is broken or sounds off, please
[report it](https://github.com/ekphore/ekphore/issues), with a small test case to reproduce the issue.

### Why does ekphore ask for a keyfile for some instruments?

Unfortunately, most commercial Kontakt instruments are encrypted and require a keyfile that I cannot distribute
for legal reasons. Funnily enough, only the paid version of Kontakt supports loading unencrypted instruments so it
isn't a DRM in the strict sense, but I'd rather be safe than sorry.

### And how do I get this keyfile?

Unfortunately, I can't help you with that for, well, obvious reasons.
It is baked inside Kontakt so you'll have to figure that one out on your own.

## Platforms

### Which plug-in formats are supported?

CLAP and VST3 everywhere, AU on macOS and LV2 on Linux, plus the standalone
app. See [installing ekphore](/docs/setup/installing).

### Does it run natively on Linux?

Yes! Double yes! Triple yes!! It was one of the primary goal of the project!

### macOS or Windows won't let me run ekphore

See [here](/docs/setup/unsigned-builds).

## Hardware

### What is NKS/Do you support NKS

NKS is a NI/Kontakt standard for keyboard integration. ekphore has NKS integration.

### Which keyboards are supported?

The Kontrol S32 and the Komplete Kontrol S49, S61 and S88 MK3 are tested, 
although preliminary support for other keyboard has landed to some degree.
I just don't own the hardware.

### How to set it up?

See [keyboard integration](/docs/usage/keyboards).

### Help my daemon can't bind to USB!!!!

If you're on macOS on Windows, it's likely that NI's daemon is running and holding 
the USB. As mentioned in the log, just kill it.

## Contributing

### How can I help?

Report instruments that don't load or sound (probably very) wrong, test on your platform and
host, send PRs and have fun! The source is on
[GitHub](https://github.com/ekphore/ekphore), and the
[build guide](/docs/development/building) can help you get started.
