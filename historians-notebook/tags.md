---
layout: scrollstory
title: Tags
summary: Browse by tags
header-image: /historians-notebook-s1-episodes/images/molt-cara-companyona2.png
permalink: /historians-notebook/tags/
tag-folders: historians-notebook-s1-episodes
---

# Browse by Tags

After clicking on a tag, scroll down to see the episodes with that tag. To view all episodes in order, click All or simply return to the [Episode List](/historians-notebook/).

<!-- Parse tag-folders parameter (comma-separated list or single folder) -->
{% assign folders_raw = page.tag-folders %}
{% assign folders = folders_raw | split: "," %}

<!-- Collect pages from specified folders -->
{% assign tag_pages = "" | split: "" %}
{% for p in site.pages %}
  {% for folder_raw in folders %}
    {% assign folder = folder_raw | strip %}
    {% assign folder_length = folder | size %}
    {% assign first_part = p.path | slice: 0, folder_length %}
    {% if first_part == folder %}
      {% assign tag_pages = tag_pages | push: p %}
    {% endif %}
  {% endfor %}
{% endfor %}
{% assign tag_pages = tag_pages | sort: "title" %}
{% assign all_tags = "" | split: "" %}
{% for p in tag_pages %}
  {% if p.tags %}
    {% for t in p.tags %}
      {% assign all_tags = all_tags | push: t %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% assign all_tags = all_tags | uniq | sort %}


<div class="tag-sort-toggle">
  <span class="tag-sort-label">Sort tags:</span>
  <button class="tag-sort-btn active" data-sort="alpha">A–Z</button>
  <button class="tag-sort-btn" data-sort="count">By count</button>
</div>

<div class="tag-list" id="tag-list">
  <a class="tag-badge tag-clear" href="{{ '/historians-notebook/tags/' | relative_url }}">All</a>
  {% for tag in all_tags %}
    {% assign tag_count = tag_pages | where_exp: "p", "p.tags contains tag" | size %}
    <a class="tag-badge" href="{{ '/historians-notebook/tags/' | relative_url }}?tag={{ tag | url_encode }}" data-tag="{{ tag | downcase }}" data-count="{{ tag_count }}">{{ tag }} ({{ tag_count }})</a>
  {% endfor %}
</div>


<div id="tag-cards">
  {% include card-grid.html cards=tag_pages show-tags=true tag-data=true %}
</div>

<p id="tag-empty" class="tag-empty" hidden>No pages match this tag.</p>

<script>
  (function () {
    const params = new URLSearchParams(window.location.search);
    const tagParam = params.get('tag');
    const normalized = tagParam ? tagParam.trim().toLowerCase() : '';

    const cards = Array.from(document.querySelectorAll('.tag-card'));
    const heading = document.getElementById('tag-heading');
    const summary = document.getElementById('tag-summary');
    const emptyState = document.getElementById('tag-empty');
    const tagLinks = Array.from(document.querySelectorAll('.tag-badge[data-tag]'));
    const clearLink = document.querySelector('.tag-clear');
    const tagList = document.getElementById('tag-list');
    const sortButtons = document.querySelectorAll('.tag-sort-btn');

    let activeLabel = normalized;
    let shown = 0;

    // Filter cards based on tag
    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').split('|').map((t) => t.trim()).filter(Boolean);
      const match = normalized ? tags.includes(normalized) : true;
      card.style.display = match ? '' : 'none';
      if (match) {
        shown += 1;
      }
    });

    if (normalized) {
      tagLinks.forEach((link) => {
        if (link.dataset.tag === normalized) {
          activeLabel = link.textContent.trim();
          link.classList.add('active');
        }
      });
      if (clearLink) {
        clearLink.classList.remove('active');
      }
      if (heading) {
        heading.textContent = activeLabel ? `Tagged: ${activeLabel}` : 'Tagged results';
      }
      if (summary) {
        summary.textContent = shown === 1
          ? 'Showing 1 ScrollStory with this tag.'
          : `Showing ${shown} ScrollStories with this tag.`;
      }
    } else {
      if (clearLink) {
        clearLink.classList.add('active');
      }
    }

    if (normalized && shown === 0) {
      if (emptyState) {
        emptyState.hidden = false;
      }
      if (summary) {
        summary.textContent = 'No ScrollStories match this tag.';
      }
    }

    // Sort functionality
    function sortTags(sortType) {
      const tagsToSort = Array.from(tagLinks);
      
      if (sortType === 'alpha') {
        tagsToSort.sort((a, b) => {
          const tagA = a.dataset.tag || '';
          const tagB = b.dataset.tag || '';
          return tagA.localeCompare(tagB);
        });
      } else if (sortType === 'count') {
        tagsToSort.sort((a, b) => {
          const countA = parseInt(a.dataset.count, 10) || 0;
          const countB = parseInt(b.dataset.count, 10) || 0;
          return countB - countA; // Descending order
        });
      }

      // Re-append sorted tags (clearLink stays first)
      tagsToSort.forEach((tag) => {
        tagList.appendChild(tag);
      });
    }

    // Add click handlers to sort buttons
    sortButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        sortButtons.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        sortTags(this.dataset.sort);
      });
    });
  })();
</script>

<br style="clear: both">
<br style="clear: both">

<a href="/historians-notebook/" target="Return to episodes list" style="float:right; margin-left:20px; margin-bottom:20px; text-align:center; max-width:300px; border:2px solid #212529; border-radius:12px; padding:15px; background-color:#355145ff; box-shadow:0 2px 8px  #E6E3C8; text-decoration:none; display:block; transition:transform 0.2s, box-shadow 0.2s;">
  <img src="/historians-notebook-s1-episodes/images/molt-cara-companyona-image.jpg" alt="Return to episodes list" style="width:200px;height:auto; display:block; margin:0 auto;">
  <span style="font-size:0.9em; color: #E6E3C8; margin-top:10px; display:block;">Return to episodes list</span>
</a>