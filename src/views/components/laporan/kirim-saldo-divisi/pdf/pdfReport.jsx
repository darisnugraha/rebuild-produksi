import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan KIRIM DAN SALDO PER DIVISI", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Kirim dan Saldo per Divisi",
  });
  doc.text(`PERIODE : `, 14, 25);

  tableColumn = [
    [
      {
        content: `LAPORAN PRODUKS (BULAN)`,
        colSpan: 23,
      },
    ],
    [
      { content: "Tgl", rowSpan: 2 },
      { content: "Kerja Hari", rowSpan: 2 },
      { content: "Casting", rowSpan: 2 },
      { content: "POTONG SPRU", colSpan: 2 },
      { content: "FILLING", colSpan: 2 },
      { content: "FR 1", colSpan: 2 },
      { content: "FR 2", colSpan: 2 },
      { content: "FR 3", colSpan: 2 },
      { content: "FR TOTAL", colSpan: 2 },
      { content: "HAND STG", colSpan: 2 },
      { content: "POLISHING", colSpan: 2 },
      { content: "PLATTING", colSpan: 2 },
      { content: "Total", colSpan: 2 },
    ],
    [
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
    ],
  ];

  const row = [];
  tableRows.push(row);

  const footer = [];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 12,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRows.push(printed);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      fontSize: 7,
      halign: "right",
    },
    headStyles: {
      fontSize: 7,
      fillColor: "#E8E5E5",
      textColor: "#000",
      valign: "middle",
      halign: "center",
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 1,
  });
  tableRows = [];
  tableColumn = [];
  finalY = doc.autoTableEndPosY() + 20;

  const pages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  for (let j = 1; j < pages + 1; j += 1) {
    const horizontalPos = pageWidth / 2;
    const verticalPos = pageHeight - 10;
    doc.setPage(j);
    doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
      align: "center",
    });
  }
  const string = doc.output("datauristring");
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>Kirim dan Saldo per Divisi</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
