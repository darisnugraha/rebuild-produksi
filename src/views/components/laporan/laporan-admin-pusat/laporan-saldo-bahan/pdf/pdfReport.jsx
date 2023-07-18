import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  const datahead = JSON.parse(
    localStorage.getItem("laporan_saldo_bahan_pusat")
  );
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Saldo Bahan Pusat", 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Saldo Bahan Pusat",
  });
  doc.text(`Periode : ${datahead.tgl_awal} s/d ${datahead.tgl_akhir}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NAMA BAHAN`,
      },
      {
        content: `SALDO AWAL`,
      },
      {
        content: `MUTASI IN`,
      },
      {
        content: `MUTASI OUT`,
      },
      {
        content: `SALDO AKHIR`,
      },
      {
        content: `KADAR`,
      },
      {
        content: `24K`,
      },
    ],
  ];

  let karat24Total = 0;
  let saldoAkhirTotal = 0;
  data.forEach((element) => {
    const saldo_akhir =
      parseFloat(element.saldo_awal) +
      parseFloat(element.mutasi_in) -
      parseFloat(element.mutasi_out);
    const kadarkali = element.kadar / 100;
    let karat24 = saldo_akhir * kadarkali;
    karat24Total = karat24Total + karat24;
    saldoAkhirTotal = saldoAkhirTotal + saldo_akhir;

    const row = [
      {
        content: element.nama_bahan,
      },
      {
        content: element.saldo_awal,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.mutasi_in,
        styles: {
          halign: "right",
        },
      },
      {
        content: element.mutasi_out,
        styles: {
          halign: "right",
        },
      },
      {
        content: saldo_akhir,
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
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Total",
      styles: {
        halign: "center",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.saldo_awal), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.mutasi_in), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.mutasi_out), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: saldoAkhirTotal.toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: "",
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
    <title>Saldo Bahan Pusat</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
