import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  const datahead = JSON.parse(localStorage.getItem("laporan_kirim_batu"));
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Kirim Batu", 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Kirim Batu",
  });
  doc.text(`PERIODE : ${datahead.startDate} s/d ${datahead.endDate}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO KIRIM`,
      },
      {
        content: `TGL KIRIM`,
      },
      {
        content: `NO JO`,
      },
      {
        content: `KODE BATU`,
      },
      {
        content: `JUMLAH`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.no_kirim_batu,
      },
      {
        content: element.tanggal_kirim,
      },
      {
        content: element.no_job_order,
      },
      {
        content: element.kode_batu,
      },
      {
        content: element.stock_batu,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.berat_batu,
        styles: {
          halign: "right",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Total",
      styles: {
        halign: "right",
      },
      colSpan: 4,
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.stock_batu), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
  ];
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
      halign: "center",
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
  const string = doc.output("bloburl");
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>Kirim Batu</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
