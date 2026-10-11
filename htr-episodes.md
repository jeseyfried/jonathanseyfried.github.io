---
layout: scrollstory
title: HTR Episodes
subtitle: 
author: Jonathan Seyfried
date: 2025-12-20
---

# These Podcast Episodes Feature AI Usage
This is a selection of episodes from Season 1 of *The Historian's Notebook* podcast that I tagged with 'AI Usage.' They are collected here so that people looking for examples of AI chat transcripts can more easily access them all. 

In addition to the transcripts on the below episode pages, I have two datasets from agentic AI batch processing [available for viewing](aca-csv-files.md).

{% assign ai_usage_episodes = site.pages | where_exp: "page", "page.path contains 'historians-notebook-s1-episodes/'" | where_exp: "page", "page.tags contains 'AI usage'" | sort: 'date' %}

<style>
/* Shrink cards on this page only so ~4 fit per row on a typical laptop screen */
.scrollstory-container .card-grid.htr-card-grid {
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 480px) {
  .scrollstory-container .card-grid.htr-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .scrollstory-container .card-grid.htr-card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.scrollstory-container .card-grid.htr-card-grid .card-img-top {
  height: 7.5rem;
}

.scrollstory-container .card-grid.htr-card-grid .card-body {
  padding: 0.75rem;
}

.scrollstory-container .card-grid.htr-card-grid h3 {
  font-size: 0.95rem;
  margin: 0.25rem 0 0.5rem 0;
}

.scrollstory-container .card-grid.htr-card-grid .card-text {
  font-size: 0.75rem;
}

.scrollstory-container .card-grid.htr-card-grid .tags {
  gap: 0.3rem;
  margin-top: 0.4rem;
}

.scrollstory-container .card-grid.htr-card-grid .tag-pill {
  font-size: 0.7rem;
  padding: 0.2rem 0.45rem;
}
</style>

{% include card-grid.html cards=ai_usage_episodes show-tags=true grid-class="htr-card-grid" %}

