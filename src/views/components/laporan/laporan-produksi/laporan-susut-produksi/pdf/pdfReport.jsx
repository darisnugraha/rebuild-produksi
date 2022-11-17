import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", "a4");
  const datahead = JSON.parse(localStorage.getItem("laporan_susut_produksi"));

  let finalY = 30;
  doc.text(`Laporan Susut Produksi (${datahead.divisi})`, 14, 15);
  doc.setFontSize(20);
  doc.text("PRODUKSI", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: `Susut Produksi  (${datahead.divisi})`,
  });
  doc.text(`PERIODE : ${datahead.startDate} s/d ${datahead.endDate}`, 14, 25);

  //tambahbahan
  let tableRowsTambahBahan = [];
  let tableColumnTambahBahan = [];

  tableColumnTambahBahan = [
    [{ content: "TAMBAH BAHAN", colSpan: 6 }],
    [
      { content: `TANGGAL` },
      { content: `JENIS EMAS` },
      { content: `KETERANGAN` },
      { content: `BERAT KOTOR` },
      { content: `%` },
      { content: `BERAT MURNI` },
    ],
  ];

  data[0]?.tambah_bahan.forEach((element) => {
    const row = [
      { content: element.tanggal },
      { content: element.jenis_bahan },
      { content: element.keterangan },
      {
        content: element.berat_kotor,
        styles: { halign: "right" },
      },
      {
        content: element.kadar,
        styles: { halign: "right" },
      },
      {
        content: element.berat_murni,
        styles: { halign: "right" },
      },
    ];
    tableRowsTambahBahan.push(row);
  });

  const footerTambahBahan = [
    {
      content: "Grand Total",
      styles: { halign: "right" },
      colSpan: "3",
    },
    {
      content: data[0]?.tambah_bahan.reduce(
        (a, b) => a + parseFloat(b.berat_kotor),
        0
      ),
      styles: { halign: "right" },
    },
    {
      content: "",
      styles: { halign: "right" },
    },
    {
      content: data[0]?.tambah_bahan
        .reduce((a, b) => a + parseFloat(b.berat_murni), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
  ];
  tableRowsTambahBahan.push(footerTambahBahan);

  doc.autoTable({
    head: tableColumnTambahBahan,
    body: tableRowsTambahBahan,
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
  tableRowsTambahBahan = [];
  tableColumnTambahBahan = [];
  finalY = doc.autoTableEndPosY() + 20;
  //endtambahbahan

  //balik bahan
  let tableRowsBalikBahan = [];
  let tableColumnBalikBahan = [];

  tableColumnBalikBahan = [
    [{ content: "BALIK BAHAN", colSpan: 6 }],
    [
      { content: `TANGGAL` },
      { content: `JENIS EMAS` },
      { content: `KETERANGAN` },
      { content: `BERAT KOTOR` },
      { content: `%` },
      { content: `BERAT MURNI` },
    ],
  ];

  data[1]?.balik_bahan.forEach((element) => {
    const row = [
      { content: element.tanggal },
      { content: element.nama_bahan },
      { content: element.keterangan },
      {
        content: element.berat_kotor,
        styles: { halign: "right" },
      },
      {
        content: element.kadar,
        styles: { halign: "right" },
      },
      {
        content: element.berat_murni,
        styles: { halign: "right" },
      },
    ];
    tableRowsBalikBahan.push(row);
  });

  const footerBalikBahan = [
    {
      content: "Grand Total",
      styles: { halign: "right" },
      colSpan: "3",
    },
    {
      content: data[1]?.balik_bahan
        .reduce((a, b) => a + parseFloat(b.berat_kotor), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: "",
      styles: { halign: "right" },
    },
    {
      content: data[1]?.balik_bahan
        .reduce((a, b) => a + parseFloat(b.berat_murni), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
  ];
  tableRowsBalikBahan.push(footerBalikBahan);

  doc.autoTable({
    head: tableColumnBalikBahan,
    body: tableRowsBalikBahan,
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
  tableRowsBalikBahan = [];
  tableColumnBalikBahan = [];
  finalY = doc.autoTableEndPosY() + 20;
  //endbalikbahan

  //susut jo
  let tableRowsSusutJO = [];
  let tableColumnSusutJO = [];

  tableColumnSusutJO = [
    [
      { content: datahead.kode_tukang, colSpan: 5 },
      { content: datahead.divisi, colSpan: 5 },
    ],
    [
      { content: `TANGGAL TERIMA` },
      { content: `SPK` },
      { content: `JENIS EMAS` },
      { content: `%` },
      { content: `BERAT AWAL` },
      { content: `BERAT AWAL MURNI` },
      { content: `TANGGAL KIRIM` },
      { content: `BERAT AKHIR` },
      { content: `SUSUT KOTOR` },
      { content: `SUSUT MURNI` },
    ],
  ];

  data[3]?.susut_JO.forEach((element) => {
    const row = [
      { content: element.tanggal_terima },
      { content: element.no_job_order },
      { content: element.kode_jenis_bahan },
      {
        content: element.kadar,
        styles: { halign: "right" },
      },
      {
        content: element.berat_awal,
        styles: { halign: "right" },
      },
      {
        content: element.berat_awal_murni,
        styles: { halign: "right" },
      },
      { content: element.tanggal_kirim },
      {
        content: element.berat_akhir,
        styles: { halign: "right" },
      },
      {
        content: element.susut_kotor,
        styles: { halign: "right" },
      },
      {
        content: element.susut_murni,
        styles: { halign: "right" },
      },
    ];
    tableRowsSusutJO.push(row);
  });

  const footerSusutJO = [
    {
      content: "Grand Total",
      styles: { halign: "right" },
      colSpan: "3",
    },
    {
      content: "",
      styles: { halign: "right" },
    },
    {
      content: data[3]?.susut_JO
        .reduce((a, b) => a + parseFloat(b.berat_awal), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[3]?.susut_JO
        .reduce((a, b) => a + parseFloat(b.berat_awal_murni), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: "",
      styles: { halign: "right" },
    },
    {
      content: data[3]?.susut_JO
        .reduce((a, b) => a + parseFloat(b.berat_akhir), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[3]?.susut_JO
        .reduce((a, b) => a + parseFloat(b.susut_kotor), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[3]?.susut_JO
        .reduce((a, b) => a + parseFloat(b.susut_murni), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
  ];
  tableRowsSusutJO.push(footerSusutJO);

  doc.autoTable({
    head: tableColumnSusutJO,
    body: tableRowsSusutJO,
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
  tableRowsSusutJO = [];
  tableColumnSusutJO = [];
  finalY = doc.autoTableEndPosY() + 20;
  //endsusutjo

  //abu lebur
  let tableRowsAbuLebur = [];
  let tableColumnAbuLebur = [];

  tableColumnAbuLebur = [
    [{ content: "Abu Lebur", colSpan: 8 }],
    [
      { content: `NAMA TUKANG` },
      { content: `KETERANGAN` },
      { content: `BERAT ABU AWAL` },
      { content: `BERAT KOTOR KEMBALI` },
      { content: `SUSUT BRUTO` },
      { content: `KADAR` },
      { content: `24K` },
      { content: `SUSUT 24K` },
    ],
  ];

  data[2]?.abu_lebur.forEach((element) => {
    const row = [
      { content: element.tukang },
      { content: element.keterangan },
      {
        content: element.berat_abu_awal,
        styles: { halign: "right" },
      },
      {
        content: element.berat_kotor_kembali,
        styles: { halign: "right" },
      },
      {
        content: element.susut_bruto,
        styles: { halign: "right" },
      },
      {
        content: element.kadar,
        styles: { halign: "right" },
      },
      {
        content: element.berat_24k,
        styles: { halign: "right" },
      },
      {
        content: element.susut_24k,
        styles: { halign: "right" },
      },
    ];
    tableRowsAbuLebur.push(row);
  });

  const footerAbuLebur = [
    {
      content: "Grand Total",
      styles: { halign: "right" },
      colSpan: "2",
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.berat_abu_awal), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.berat_kotor_kembali), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.susut_bruto), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: "",
      styles: { halign: "right" },
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.berat_24k), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.susut_24k), 0)
        .toFixed(3),
      styles: { halign: "right" },
    },
  ];
  tableRowsAbuLebur.push(footerAbuLebur);

  const footerAbuBeratTerima = [
    {
      content: "Berat Terima",
      styles: { halign: "right" },
      colSpan: "2",
    },
    {
      content: data[2]?.abu_lebur
        .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
        .toFixed(3),
      styles: { halign: "center" },
      colSpan: "6",
    },
  ];
  tableRowsAbuLebur.push(footerAbuBeratTerima);

  doc.autoTable({
    head: tableColumnAbuLebur,
    body: tableRowsAbuLebur,
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
  tableRowsAbuLebur = [];
  tableColumnAbuLebur = [];
  finalY = doc.autoTableEndPosY() + 20;
  //endsusutjo

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
    <title>Susut Produksi (${datahead.divisi})</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
