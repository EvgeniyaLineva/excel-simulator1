document.addEventListener("DOMContentLoaded", function () {
  // Инициализация таблицы с помощью jSpreadsheet
  jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
      ['ID', 'Имя', 'Возраст'],
      [1, 'Иван', 25],
      [2, 'Мария', 30],
      [3, 'Петр', 35]
    ],
    columns: [
      { type: 'numeric', title: 'ID', width: 80 },
      { type: 'text', title: 'Имя', width: 150 },
      { type: 'numeric', title: 'Возраст', width: 100 }
    ],
    minDimensions: [3, 6]  // Минимальные размеры таблицы
  });
});
