import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  const datahead = JSON.parse(localStorage.getItem("laporan_kirim_masak"));
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Kirim Masak", 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Kirim Masak",
  });
  doc.text(`PERIODE : ${datahead.tgl_awal} s/d ${datahead.tgl_akhir}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO KIRIM`,
      },
      {
        content: `TANGGAL KIRIM`,
      },
      {
        content: `BERAT KIRIM`,
      },
      {
        content: `KADAR`,
      },
      {
        content: `24K`,
      },
    ],
  ];

  data.forEach((element) => {
    const karat24 =
      parseFloat(element.berat) * (parseFloat(element.kadar) / 100);
    const row = [
      {
        content: element.no_kirim_masak,
      },
      {
        content: element.tanggal_kirim,
      },
      {
        content: element.berat,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.kadar,
        styles: {
          halign: "right",
        },
      },
      {
        content: karat24.toFixed(3),
        styles: {
          halign: "right",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Grand Total",
      styles: {
        halign: "right",
      },
      colSpan: "2",
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.kadar), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce(
          (a, b) => a + parseFloat(b.berat) * (parseFloat(b.kadar) / 100),
          0
        )
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
    <title>Kirim Masak</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
