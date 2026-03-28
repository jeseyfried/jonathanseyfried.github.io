
(function () {
  const csvPath = "/assets/data/ACA_Reg1819_transcriptions.csv";
  const loadingEl = document.getElementById("aca-loading");
  const errorEl = document.getElementById("aca-error");
  const tableEl = document.getElementById("aca-reg1819-table");

  function normalizeValue(value) {
    if (value === undefined || value === null) return "";
    const trimmed = String(value).trim();
    return trimmed === "nan" ? "" : trimmed;
  }

  function hideLoading() {
    if (loadingEl) loadingEl.hidden = true;
  }

  function showError() {
    hideLoading();
    if (errorEl) errorEl.hidden = false;
  }

  Papa.parse(csvPath, {
    download: true,
    header: true,
    skipEmptyLines: "greedy",
    complete: function (results) {
      if (!results || !results.data || !results.data.length) {
        showError();
        return;
      }

      const rows = results.data.map((row) => [
        normalizeValue(row["Filename"]),
        normalizeValue(row["Date"]),
        normalizeValue(row["Document Type"]),
        normalizeValue(row["Issuer"]),
        normalizeValue(row["Recipient"]),
        normalizeValue(row["Reconciled Transcription"]),
        normalizeValue(row["English Translation"]),
        normalizeValue(row["Historical Notes"]),
        normalizeValue(row["Remaining Uncertainties"]),
        normalizeValue(row["Image"]),
        normalizeValue(row["Language"]),
        normalizeValue(row["Subject"]),
        normalizeValue(row["Folio/Register Ref"]),
        normalizeValue(row["Quality (Two-Model?)"]),
        normalizeValue(row["Gemini Stage 1 Transcription"]),
        normalizeValue(row["Processed Timestamp"])
      ]);

      $(tableEl).removeAttr("hidden");

      const table = $(tableEl).DataTable({
        data: rows,
        deferRender: true,
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        orderCellsTop: true,
        fixedHeader: true,
        scrollX: true,
        scrollY: "65vh",
        scrollCollapse: true,
        autoWidth: false,
        columns: [
          { width: "10rem" },  // Filename
          { width: "15rem" },  // Date
          { width: "14rem" },  // Document Type
          { width: "14rem" },  // Issuer
          { width: "14rem" },  // Recipient
          { width: "22rem" },  // Reconciled Transcription
          { width: "22rem" },  // English Translation
          { width: "20rem" },  // Historical Notes
          { width: "18rem" },  // Remaining Uncertainties
          { width: "10rem" },  // Image
          { width: "8rem" },   // Language
          { width: "12rem" },  // Subject
          { width: "12rem" },  // Folio/Register Ref
          { width: "10rem" },  // Quality (Two-Model?)
          { width: "20rem" },  // Gemini Stage 1 Transcription
          { width: "12rem" }   // Processed Timestamp
        ],
        language: {
          search: "Search all columns:",
          lengthMenu: "Show _MENU_ rows",
          info: "Showing _START_ to _END_ of _TOTAL_ rows"
        },
        initComplete: function () {
          const api = this.api();

          api.columns().every(function (index) {
            const column = this;
            $('input', $('.aca-filter-row th').eq(index)).on('keyup change clear', function () {
              if (column.search() !== this.value) {
                column.search(this.value).draw();
              }
            });
          });

          hideLoading();
        }
      });
    },
    error: function () {
      showError();
    }
  });
})();
