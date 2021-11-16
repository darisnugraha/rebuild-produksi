import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const pdfReport = (data = '') => {
  const doc = new jsPDF('l', 'mm', [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  const tanggal = new Date(localStorage.getItem('tanggal_lap'));
  doc.text('Laporan Stock Global Produksi L', 14, 15);
  doc.setFontSize(20);
  doc.text('AMG', 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: 'Bahan Tukang Detail',
  });
  doc.text(`PERIODE : ${tanggal.toLocaleDateString()}`, 14, 25);

  tableColumn = [
    [
      {
        content: `DIVISI`,
        rowSpan: 2,
      },
      {
        content: `AWH75`,
        colSpan: 4,
      },
      {
        content: `AYL70`,
        colSpan: 4,
      },
      {
        content: `AYL75`,
        colSpan: 4,
      },
      {
        content: `TOTAL`,
        rowSpan: 2,
      },
    ],
    [
      {
        content: `AWAL`,
      },
      {
        content: `MASUK`,
      },
      {
        content: `KELUAR`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `AWAL`,
      },
      {
        content: `MASUK`,
      },
      {
        content: `KELUAR`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `AWAL`,
      },
      {
        content: `MASUK`,
      },
      {
        content: `KELUAR`,
      },
      {
        content: `SALDO`,
      },
    ],
  ];

  let total = 0;
  let textString = '';
  let textDisplay = 0;

  let awh75Awal = 0;
  let awh75In = 0;
  let awh75Out = 0;
  let awh75Sld = 0;

  let ayl70Awal = 0;
  let ayl70In = 0;
  let ayl70Out = 0;
  let ayl70Sld = 0;

  let ayl75Awal = 0;
  let ayl75In = 0;
  let ayl75Out = 0;
  let ayl75Sld = 0;

  let awh75AwalString = '';
  let awh75InString = '';
  let awh75OutString = '';
  let awh75SldString = '';

  let ayl70AwalString = '';
  let ayl70InString = '';
  let ayl70OutString = '';
  let ayl70SldString = '';

  let ayl75AwalString = '';
  let ayl75InString = '';
  let ayl75OutString = '';
  let ayl75SldString = '';
  data.forEach((element) => {
    total =
      element.awh75_awal +
      element.awh75_in +
      element.awh75_out +
      element.awh75_sld +
      element.ayl70_awal +
      element.ayl70_in +
      element.ayl70_out +
      element.ayl70_sld +
      element.ayl75_awal +
      element.ayl75_in +
      element.ayl75_out +
      element.ayl75_sld;

    if (total.toString().includes('e')) {
      textString = total.toString().split('e');
      textDisplay = parseFloat(textString[0]);
    } else {
      textDisplay = total;
    }

    // awh75
    if (element.awh75_awal.toString().includes('e')) {
      awh75AwalString = element.awh75_awal.toString().split('e');
      awh75Awal = parseFloat(awh75AwalString[0]);
    } else {
      awh75Awal = element.awh75_awal;
    }

    if (element.awh75_in.toString().includes('e')) {
      awh75InString = element.awh75_inawal.toString().split('e');
      awh75In = parseFloat(awh75InString[0]);
    } else {
      awh75In = element.awh75_in;
    }

    if (element.awh75_out.toString().includes('e')) {
      awh75OutString = element.awh75_out.toString().split('e');
      awh75Out = parseFloat(awh75OutString[0]);
    } else {
      awh75Out = element.awh75_out;
    }

    if (element.awh75_sld.toString().includes('e')) {
      awh75SldString = element.awh75_sld.toString().split('e');
      awh75Sld = parseFloat(awh75SldString[0]);
    } else {
      awh75Sld = element.awh75_sld;
    }

    // ayl70
    if (element.ayl70_awal.toString().includes('e')) {
      ayl70AwalString = element.ayl70_awal.toString().split('e');
      ayl70Awal = parseFloat(ayl70AwalString[0]);
    } else {
      ayl70Awal = element.ayl70_awal;
    }

    if (element.ayl70_in.toString().includes('e')) {
      ayl70InString = element.ayl70_in.toString().split('e');
      ayl70In = parseFloat(ayl70InString[0]);
    } else {
      ayl70In = element.ayl70_in;
    }

    if (element.ayl70_out.toString().includes('e')) {
      ayl70OutString = element.ayl70_out.toString().split('e');
      ayl70Out = parseFloat(ayl70OutString[0]);
    } else {
      ayl70Out = element.ayl70_out;
    }

    if (element.ayl70_sld.toString().includes('e')) {
      ayl70SldString = element.ayl70_sld.toString().split('e');
      ayl70Sld = parseFloat(ayl70SldString[0]);
    } else {
      ayl70Sld = element.ayl70_sld;
    }

    // ayl75
    if (element.ayl75_awal.toString().includes('e')) {
      ayl75AwalString = element.ayl75_awal.toString().split('e');
      ayl75Awal = parseFloat(ayl75AwalString[0]);
    } else {
      ayl75Awal = element.ayl75_awal;
    }

    if (element.ayl75_in.toString().includes('e')) {
      ayl75InString = element.ayl75_in.toString().split('e');
      ayl75In = parseFloat(ayl75InString[0]);
    } else {
      ayl75In = element.ayl75_in;
    }

    if (element.ayl75_out.toString().includes('e')) {
      ayl75OutString = element.ayl75_out.toString().split('e');
      ayl75Out = parseFloat(ayl75OutString[0]);
    } else {
      ayl75Out = element.ayl75_out;
    }

    if (element.ayl75_sld.toString().includes('e')) {
      ayl75SldString = element.ayl75_sld.toString().split('e');
      ayl75Sld = parseFloat(ayl75SldString[0]);
    } else {
      ayl75Sld = element.ayl75_sld;
    }
    const row = [
      {
        content: element.divisi,
        styles: {
          halign: 'left',
        },
      },
      {
        content: awh75Awal.toFixed(3),
      },
      {
        content: awh75In.toFixed(3),
      },
      {
        content: awh75Out.toFixed(3),
      },
      {
        content: awh75Sld.toFixed(3),
      },
      {
        content: ayl70Awal.toFixed(3),
      },
      {
        content: ayl70In.toFixed(3),
      },
      {
        content: ayl70Out.toFixed(3),
      },
      {
        content: ayl70Sld.toFixed(3),
      },
      {
        content: ayl75Awal.toFixed(3),
      },
      {
        content: ayl75In.toFixed(3),
      },
      {
        content: ayl75Out.toFixed(3),
      },
      {
        content: ayl75Sld.toFixed(3),
      },
      {
        content: textDisplay.toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: '',
    },
    {
      content: data.reduce((a, b) => a + b.awh75_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.awh75_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.awh75_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.awh75_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl70_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl70_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl70_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl70_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl75_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl75_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl75_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.ayl75_sld, 0).toFixed(3),
    },
    {
      content: '',
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 12,
      styles: {
        fontStyle: 'italic',
        textColor: '#000',
        halign: 'left',
      },
    },
  ];
  tableRows.push(printed);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: 'plain',
    margin: { top: 10 },
    bodyStyles: {
      fontSize: 8,
      halign: 'right',
    },
    headStyles: {
      fontSize: 8,
      fillColor: '#E8E5E5',
      textColor: '#000',
      valign: 'middle',
      halign: 'center',
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
      align: 'center',
    });
  }
  const string = doc.output('datauristring');
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>Bahan Tukang Detail</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`,
  );
};

export default pdfReport;
