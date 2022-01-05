import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  const datahead = JSON.parse(localStorage.getItem("laporan_akhirstand_admin"));
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Outstand Admin", 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Outstand Admin",
  });
  doc.text(`Tukang : ${datahead.tukang}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `NAMA KONSUMEN`,
      },
      {
        content: `NAMA BARANG`,
      },
      {
        content: `BAHAN`,
      },
      {
        content: `JUMLAH`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `KADAR`,
      },
      {
        content: `24K`,
      },
      {
        content: `TGL OUTSTAND`,
      },
      {
        content: `NAMA TUKANG`,
      },
    ],
  ];

  let karat24Total = 0;
  data.forEach((element) => {
    const kadarkali = element.kadar / 100;
    let karat24 = element.berat_susut * kadarkali;
    karat24Total = karat24Total + karat24;

    const row = [
      {
        content: element.no_job_order,
      },
      {
        content: element.nama_customer,
      },
      {
        content: element.kode_barang,
      },
      {
        content: element.kode_jenis_bahan,
      },
      {
        content: element.stock_akhir,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.berat_akhir,
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
        content: karat24,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.update_date,
      },
      {
        content: element.kode_staff,
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
      content: data.reduce((a, b) => a + parseFloat(b.stock_akhir), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_akhir), 0)
        .toFixed(3),
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
      content: karat24Total.toFixed(3),
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
    <title>Outstand Admin</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
