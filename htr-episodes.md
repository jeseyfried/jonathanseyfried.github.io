---
layout: scrollstory
title: HTR Episodes
subtitle: 
author: Jonathan Seyfried
date: 2025-12-20
---

# These Podcast Episodes Feature AI Usage
This is a selection of episodes from Season 1 of *The Historian's Notebook* podcast that I tagged with 'AI Usage.' They are collected here so that people looking for examples of chat transcripts can more easily access them all.

{% assign ai_usage_episodes = site.pages | where_exp: "page", "page.path contains 'historians-notebook-s1-episodes/'" | where_exp: "page", "page.tags contains 'AI usage'" | sort: 'date' %}

{% include card-grid.html cards=ai_usage_episodes show-tags=true %}

