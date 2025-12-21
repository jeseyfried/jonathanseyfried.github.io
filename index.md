---
title: Jonathan Seyfried
layout: base
date: 2025-12-21
---

# History Communicator and Digital Humanist

Welcome to the website of Jonathan Seyfried. I am a PhD Candidate in History at the University of New Mexico. 

My new podcast, *The Historian's Notebook*, debuts on December 25, 2025.

{% assign stories = site.pages | where_exp: "page", "page.path contains 'historians-notebook-landing/'" %}

{% include card-stack.html cards = stories %}

