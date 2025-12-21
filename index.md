---
title: Jonathan Seyfried
layout: base
date: 2024-12-02
---

# History Communicator and Digital Humanist

Welcome to the website of Jonathan Seyfried. I am a PhD Candidate in History at the University of New Mexico. 

My podcast, *The Historian's Notebook*, debuts on December 25, 2025.

{% assign stories = site.pages | where_exp: "page", "page.path contains 'historians-notebook-landing/'" %}

{% include card-stack.html cards = stories %}

