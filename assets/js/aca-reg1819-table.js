
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
        normalizeValue(row["Image"]),
        normalizeValue(row["Folio/Register Ref"]),
        normalizeValue(row["Date"]),
        normalizeValue(row["Document Type"]),
        normalizeValue(row["Issuer"]),
        normalizeValue(row["Recipient"]),
        normalizeValue(row["Language"]),
        normalizeValue(row["Subject"]),
        normalizeValue(row["Quality (Two-Model?)"]),
        normalizeValue(row["Gemini Stage 1 Transcription"]),
        normalizeValue(row["Reconciled Transcription"]),
        normalizeValue(row["English Translation"]),
        normalizeValue(row["Historical Notes"]),
        normalizeValue(row["Remaining Uncertainties"]),
        normalizeValue(row["Processed Timestamp"])
      ]);

      document.getElementById("aca-row-count").textContent = rows.length;
      document.getElementById("aca-col-count").textContent = 16;

      $(tableEl).removeAttr("hidden");

      const table = $(tableEl).DataTable({
        data: rows,
        deferRender: true,
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        orderCellsTop: true,
        fixedHeader: true,
        scrollX: true,
        autoWidth: false,
        columns: [
          { width: "10rem" },
          { width: "10rem" },
          { width: "12rem" },
          { width: "15rem" },
          { width: "14rem" },
          { width: "14rem" },
          { width: "14rem" },
          { width: "8rem" },
          { width: "12rem" },
          { width: "10rem" },
          { width: "20rem" },
          { width: "22rem" },
          { width: "22rem" },
          { width: "20rem" },
          { width: "18rem" },
          { width: "12rem" }
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
