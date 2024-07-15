let rows = document.querySelectorAll(".notion-selectable.notion-page-block.notion-collection-item");

rows.forEach((row) => {
  // Seleccionar el contenido de la columna 2
  let column2 = row.querySelector('[data-col-index="1"] div div span');
  if (column2) {
    let column2Text = column2.innerText;

    // Seleccionar la columna 1
    let column1 = row.querySelector('[data-col-index="0"] div div span');
    if (column1) {
      // Copiar el contenido de la columna 2 a la columna 1
      column1.innerText = column2Text;
    }
  }
});
