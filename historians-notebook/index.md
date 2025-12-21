---
title: A podcast about how history is made
author: Jonathan Seyfried
location: Albuquerque, NM
thumbnail: /assets/images/historians-notebook-card.png
summary: Visit the podcast home page for episodes, source notes, and an image of each day's document. 
date: 2025-12-21
header-image: /assets/images/hn-lower.png
layout: scrollstory
tags:

---

# The Historian's Notebook
**Season 1 - Molt Cara Campanyona**

Welcome to the website for *The Historian's Notebook* podcast. Here you will find notes and information for each episode, including an image file of the document discussed that day. Season 1, *Molt Cara Companyona*, runs daily from December 25, 2025 to December 24, 2026.

{% assign stories = site.pages | where_exp: "page", "page.path contains 'historians-notebook-s1-episodes/'" %}

{% include card-stack.html cards = stories %}



<br style="clear: both">