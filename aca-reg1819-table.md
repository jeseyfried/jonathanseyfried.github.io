---
title: ACA Register 1819 Transcriptions
layout: base
date: 2026-03-28
permalink: /aca-reg1819-transcriptions/
---

<style>
@import url('/assets/css/aca-reg1819-table.css');
@import url('https://cdn.datatables.net/1.13.8/css/jquery.dataTables.min.css');
@import url('https://cdn.datatables.net/fixedheader/3.4.0/css/fixedHeader.dataTables.min.css');
</style>

<section class="aca-table-shell">
  <header class="aca-table-intro container">
    <p class="aca-kicker">Research Dataset</p>
    <h1>ACA Register 1819 Transcriptions</h1>
    <p class="aca-lede">
      This table presents 297 records from the ACA Register 1819 transcription workflow.
      Use the global search, the column filters, and horizontal scrolling to navigate long entries.
    </p>

    <div class="aca-meta-grid">
      <div class="aca-meta-card">
        <span class="aca-meta-label">Rows</span>
        <strong id="aca-row-count">297</strong>
      </div>
      <div class="aca-meta-card">
        <span class="aca-meta-label">Columns</span>
        <strong id="aca-col-count">16</strong>
      </div>
      <div class="aca-meta-card">
        <span class="aca-meta-label">Download</span>
        <a href="/assets/data/ACA_Reg1819_transcriptions.csv" download>CSV file</a>
      </div>
    </div>

    <details class="aca-help">
      <summary>How to use this table</summary>
      <div class="aca-help-body">
        <p><strong>Search:</strong> the search box scans the full table.</p>
        <p><strong>Filter:</strong> each column has its own filter box under the heading row.</p>
        <p><strong>Scroll:</strong> the table is intentionally wide so long transcriptions remain readable.</p>
        <p><strong>Copy:</strong> click into any cell and use your browser's standard copy command.</p>
      </div>
    </details>
  </header>

  <div class="aca-table-frame container">
    <div id="aca-loading" class="aca-loading">Loading table…</div>
    <div id="aca-error" class="aca-error" hidden>
      The table could not be loaded. Make sure the CSV is present at
      <code>/assets/data/ACA_Reg1819_transcriptions.csv</code>.
    </div>

    <table id="aca-reg1819-table" class="display aca-datatable" style="width:100%" hidden>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Image</th>
          <th>Folio/Register Ref</th>
          <th>Date</th>
          <th>Document Type</th>
          <th>Issuer</th>
          <th>Recipient</th>
          <th>Language</th>
          <th>Subject</th>
          <th>Quality (Two-Model?)</th>
          <th>Gemini Stage 1 Transcription</th>
          <th>Reconciled Transcription</th>
          <th>English Translation</th>
          <th>Historical Notes</th>
          <th>Remaining Uncertainties</th>
          <th>Processed Timestamp</th>
        </tr>
        <tr class="aca-filter-row">
          <th><input type="text" placeholder="Filter filename" /></th>
          <th><input type="text" placeholder="Filter image" /></th>
          <th><input type="text" placeholder="Filter folio" /></th>
          <th><input type="text" placeholder="Filter date" /></th>
          <th><input type="text" placeholder="Filter type" /></th>
          <th><input type="text" placeholder="Filter issuer" /></th>
          <th><input type="text" placeholder="Filter recipient" /></th>
          <th><input type="text" placeholder="Filter language" /></th>
          <th><input type="text" placeholder="Filter subject" /></th>
          <th><input type="text" placeholder="Filter quality" /></th>
          <th><input type="text" placeholder="Filter Gemini" /></th>
          <th><input type="text" placeholder="Filter transcription" /></th>
          <th><input type="text" placeholder="Filter translation" /></th>
          <th><input type="text" placeholder="Filter notes" /></th>
          <th><input type="text" placeholder="Filter uncertainties" /></th>
          <th><input type="text" placeholder="Filter timestamp" /></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</section>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script src="https://cdn.datatables.net/1.13.8/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/fixedheader/3.4.0/js/dataTables.fixedHeader.min.js"></script>
<script src="/assets/js/aca-reg1819-table.js"></script>
