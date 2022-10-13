import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  const datahead = JSON.parse(localStorage.getItem("laporan_tambah_job_order"));
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Tambah Job Order", 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Tambah Job Order",
  });
  doc.text(`PERIODE : ${datahead.tgl_awal} s/d ${datahead.tgl_akhir}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TGL TRANSAKSI`,
      },
      {
        content: `JOB ORDER`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `JUMLAH`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data, "no_tambah");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    const rowHead = [
      {
        content: "NO TAMBAH JOB ORDER : " + element[0].no_tambah,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 5,
      },
    ];
    tableRows.push(rowHead);
    element.forEach((item) => {
      const row = [
        {
          content: item.tanggal_tambah,
        },
        {
          content: item.no_job_order,
        },
        {
          content: item.kode_jenis_bahan,
        },
        {
          content: item.stock,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.berat,
          styles: {
            halign: "right",
          },
        },
      ];
      tableRows.push(row);
    });
    const rowfooter = [
      {
        content: "Sub Total",
        styles: {
          halign: "right",
        },
        colSpan: "3",
      },
      {
        content: element.reduce((a, b) => a + parseFloat(b.stock), 0),
        styles: {
          halign: "right",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat), 0)
          .toFixed(3),
        styles: {
          halign: "right",
        },
      },
    ];
    tableRows.push(rowfooter);
  });

  const footer = [
    {
      content: "Grand Total",
      styles: {
        halign: "right",
      },
      colSpan: "3",
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.stock), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
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
    <title>Tambah Job Order</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
