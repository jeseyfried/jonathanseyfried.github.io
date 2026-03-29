---
title: ACA Register 2056 Transcriptions
layout: base
date: 2026-03-29
permalink: /aca-reg2056-transcriptions/
hide-sidebar: true
---

<style>
@import url('/assets/css/aca-reg1819-table.css');
@import url('https://cdn.datatables.net/1.13.8/css/jquery.dataTables.min.css');
@import url('https://cdn.datatables.net/fixedheader/3.4.0/css/fixedHeader.dataTables.min.css');
</style>

<section class="aca-table-shell">
  <header class="aca-table-intro">
    <p class="aca-kicker">Research Dataset</p>
    <h1>ACA Register 2056 Transcriptions</h1>
    <p class="aca-lede">Records from ACA Register 2056. <a href="/assets/data/ACA_Reg2056_transcriptions.csv" download>Download CSV</a></p>
    <details class="aca-help">
      <summary>How to use this table</summary>
      <div class="aca-help-body">
        <p><strong>Search:</strong> scans all columns. <strong>Filter:</strong> per-column filters below headers. <strong>Scroll:</strong> horizontal scroll for wide columns.</p>
      </div>
    </details>
  </header>

  <div class="aca-table-frame">
    <div id="aca-loading" class="aca-loading">Loading table…</div>
    <div id="aca-error" class="aca-error" hidden>
      The table could not be loaded. Make sure the CSV is present at
      <code>/assets/data/ACA_Reg2056_transcriptions.csv</code>.
    </div>

    <table id="aca-reg2056-table" class="display aca-datatable" style="width:100%" hidden>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Date</th>
          <th>Document Type</th>
          <th>Issuer</th>
          <th>Recipient</th>
          <th>Reconciled Transcription</th>
          <th>English Translation</th>
          <th>Historical Notes</th>
          <th>Remaining Uncertainties</th>
          <th>Image</th>
          <th>Language</th>
          <th>Subject</th>
          <th>Folio/Register Ref</th>
          <th>Quality (Two-Model?)</th>
          <th>Gemini Stage 1 Transcription</th>
          <th>Processed Timestamp</th>
        </tr>
        <tr class="aca-filter-row">
          <th><input type="text" placeholder="Filter filename" /></th>
          <th><input type="text" placeholder="Filter date" /></th>
          <th><input type="text" placeholder="Filter type" /></th>
          <th><input type="text" placeholder="Filter issuer" /></th>
          <th><input type="text" placeholder="Filter recipient" /></th>
          <th><input type="text" placeholder="Filter transcription" /></th>
          <th><input type="text" placeholder="Filter translation" /></th>
          <th><input type="text" placeholder="Filter notes" /></th>
          <th><input type="text" placeholder="Filter uncertainties" /></th>
          <th><input type="text" placeholder="Filter image" /></th>
          <th><input type="text" placeholder="Filter language" /></th>
          <th><input type="text" placeholder="Filter subject" /></th>
          <th><input type="text" placeholder="Filter folio" /></th>
          <th><input type="text" placeholder="Filter quality" /></th>
          <th><input type="text" placeholder="Filter Gemini" /></th>
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
<script src="/assets/js/aca-reg2056-table.js"></script>
