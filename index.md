---
title: Jonathan Seyfried
layout: base
date: 2025-12-21
---

# History Communicator and Digital Humanist

Welcome to the website of Jonathan Seyfried. I am a PhD Candidate in History at the University of New Mexico. I research emerging technologies in the digital humanities. As a large part of that effort, I am a Studio Co-Manager for the University of New Mexico Department of History's [Amaranth Digital Humanities Studio](https://amaranth.unm.edu/). Prior to my graduate program, I taught high school history, specializing in AP World History.

My podcast, *The Historian's Notebook*, started on December 25, 2025. You can listen to episodes on this website or any of the major podcast platforms.

{% assign stories = site.pages | where_exp: "page", "page.path contains 'historians-notebook/'" %}

{% include card-stack.html cards = stories %}

