import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Stock Admin", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Stock Admin",
  });
  doc.text(`PERIODE : `, 14, 25);

  tableColumn = [
    [
      {
        content: `LAPORAN STOCK BAHAN`,
        colSpan: 8,
      },
    ],
    [
      {
        content: `TANGGAL`,
        colSpan: 8,
      },
    ],
    [
      {
        content: `BARANG JO`,
        colSpan: 2,
      },
      {
        content: `STOCK MATERIAL`,
        colSpan: 2,
      },
      {
        content: `SPAREPART`,
        colSpan: 2,
      },
      {
        content: `BUBUK & BATU PECAH`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `KETERANGAN`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `KETERANGAN`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `KETERANGAN`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `KETERANGAN`,
      },
      {
        content: `BERAT`,
      },
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
      fontSize: 8,
      halign: "right",
    },
    headStyles: {
      fontSize: 8,
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
    <title>Stock Admin</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
