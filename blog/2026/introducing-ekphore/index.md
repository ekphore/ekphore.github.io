---
title: Introducing ekphore!
authors: [govanify]
tags: [announcement]
date: 2026-10-23
slug: /2026/introducing-ekphore
image: /img/logo.svg
---

And here it is, the first public release of ekphore, the open source sampler!

<!-- truncate -->

# Wait what is that

It is a sampler, that is compatible with Kontakt instruments. Yes, you heard that right!
A sampler that runs on Linux too! Where has the world gone!


## But why?

So, long story short, I've been composing music since I was a wee child, mostly
using trackers a la milkytracker. While I was playing classical music (I'm a violinist, hi!)
I was a bit lost on the music composition scene, I didn't know many people that used
computer-assisted composition and I was mostly left to my own with what was available
on Linux for a long time, which was: not a whole lot.

Coming from this perspective, I've made a bunch of tracks with more modern setups when I grew
up but it came with the cost of me not being able to use instruments I own on Linux (or compose at 
all for a long time), which was a big annoyance to say the least, on top of it annoying me 
ideologically. I'm fine with products being closed source
and instruments being paid products, people need to live after all, but having no real alternative for something so 
necessary? Well that grew on me more and more and eventually I bit the bullet and started ekphore a 
few months ago and here we are today.

## How good is it?

Fairly! I reimplemented essentially every effect/filter combination that I came across
and made ekphore produce faithful renders for essentially the entire Komplete's collector edition 24.


## What's coming out today

ekphore is split into four projects, each usable on its own:

- **ekphore** is the sampler engine, effects/filter reimplementation and UI renderer.
- **libnki** reads instruments and their resources.
- **libksp** parses and runs KSP, the main programming language used by Kontakt.
- **libnks** reimplements the NKS keyboard integration protocol and ships with its own daemon!

Icing on the cake? Everything is open source and GPLv3+.
Yeah I guess that isn't very common in the music industry.

## What's next?

A lot! I will be releasing a series of blog posts in the upcoming weeks/months detailing
the internal details of ekphore, from how the file formats work to the effect and bus pipeline,
a deep dive on an effect and the tooling I created to evaluate everything!

I will also be focusing on getting the DSP up to speed, quite literaly: some instruments have
callback spikes that make them hard to use in realtime, which is my next priority. Afterwards
probably getting Komplete UI out the door and fixing issues people report my way.

Additionally, I'm also publishing an article on my personal blog going a bit more on details
on some design decisions and the goal of ekphore. [You can see it here](https://govanify.com/post/ekphore/), if that interests you.

And now, enjoy the release, make music and, most importantly, have fun!
