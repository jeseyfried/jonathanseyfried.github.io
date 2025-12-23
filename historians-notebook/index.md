---
title: A podcast about how history is made
author: Jonathan Seyfried
location: Albuquerque, NM
thumbnail: /assets/images/historians-notebook-card.png
summary: Visit the podcast home page for episodes, source notes, and an image of each day's document. 
date: 2025-12-21
header-image: /assets/images/hn-lower2.png
layout: scrollstory
tags:

---

# The Historian's Notebook
**Season 1 - Molt Cara Campanyona**
<a href="/historians-notebook/s1-faqs" target="faqs" style="float:right; margin-left:20px; margin-bottom:20px; text-align:center; max-width:300px; border:2px solid #212529; border-radius:12px; padding:15px; background-color:#355145ff; box-shadow:0 2px 8px  #E6E3C8; text-decoration:none; display:block; transition:transform 0.2s, box-shadow 0.2s;">
  <img src="/historians-notebook-s1-episodes/images/molt-cara-companyona-image.jpg" alt="Season 1 FAQs" style="width:200px;height:auto; display:block; margin:0 auto;">
  <span style="font-size:0.9em; color: #E6E3C8; margin-top:10px; display:block;">Season 1 FAQs</span>
</a>
Welcome to the website for *The Historian's Notebook* podcast. Season 1, *Molt Cara Companyona*, runs daily from December 25, 2025 to December 24, 2026.

<div class="audio-player-card">
  {% include audio.html src="/historians-notebook-s1-episodes/audio/season1-trailer.mp3" title="Season 1 Trailer" %}
</div>
<style>
.audio-player-card {
  border: 1px solid #212529;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  background-color: #355145ff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.audio-player-card .audio-title {
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 1.1em;
}
.audio-player-card audio {
  width: 100%;
}
</style>

You can play each episode here on this page or visit the webpage for the episode which contains the audio file as well as a larger image file of that day's document and more shownotes. 

{% assign stories = site.pages | where_exp: "page", "page.path contains 'historians-notebook-s1-episodes/'" %}

{% include card-stack.html cards = stories %}



<br style="clear: both">