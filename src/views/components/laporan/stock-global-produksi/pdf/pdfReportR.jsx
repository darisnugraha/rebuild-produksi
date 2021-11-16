import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const pdfReportR = (data = '') => {
  const doc = new jsPDF('l', 'mm', [420, 210]);
  let tableRows = [];
  let tableColumn = [];

  const tanggal = new Date(localStorage.getItem('tanggal_lap'));
  let finalY = 30;
  doc.text('Laporan Stock Global Produksi R', 14, 15);
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
        content: `EAY18`,
        colSpan: 4,
      },
      {
        content: `EAY14`,
        colSpan: 4,
      },
      {
        content: `EAY10`,
        colSpan: 4,
      },
      {
        content: `EAW18`,
        colSpan: 4,
      },
      {
        content: `EAW14`,
        colSpan: 4,
      },
      {
        content: `EAW10`,
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

  let eay18Awal = 0;
  let eay18In = 0;
  let eay18Out = 0;
  let eay18Sld = 0;

  let eay14Awal = 0;
  let eay14In = 0;
  let eay14Out = 0;
  let eay14Sld = 0;

  let eay10Awal = 0;
  let eay10In = 0;
  let eay10Out = 0;
  let eay10Sld = 0;

  let eay18AwalString = '';
  let eay18InString = '';
  let eay18OutString = '';
  let eay18SldString = '';

  let eay14AwalString = '';
  let eay14InString = '';
  let eay14OutString = '';
  let eay14SldString = '';

  let eay10AwalString = '';
  let eay10InString = '';
  let eay10OutString = '';
  let eay10SldString = '';

  let eaw18Awal = 0;
  let eaw18In = 0;
  let eaw18Out = 0;
  let eaw18Sld = 0;

  let eaw14Awal = 0;
  let eaw14In = 0;
  let eaw14Out = 0;
  let eaw14Sld = 0;

  let eaw10Awal = 0;
  let eaw10In = 0;
  let eaw10Out = 0;
  let eaw10Sld = 0;

  let eaw18AwalString = '';
  let eaw18InString = '';
  let eaw18OutString = '';
  let eaw18SldString = '';

  let eaw14AwalString = '';
  let eaw14InString = '';
  let eaw14OutString = '';
  let eaw14SldString = '';

  let eaw10AwalString = '';
  let eaw10InString = '';
  let eaw10OutString = '';
  let eaw10SldString = '';

  data.forEach((element) => {
    total =
      element.eay18_awal +
      element.eay18_in +
      element.eay18_out +
      element.eay18_sld +
      element.eay14_awal +
      element.eay14_in +
      element.eay14_out +
      element.eay14_sld +
      element.eay10_awal +
      element.eay10_in +
      element.eay10_out +
      element.eay10_sld +
      element.eaw18_awal +
      element.eaw18_in +
      element.eaw18_out +
      element.eaw18_sld +
      element.eaw14_awal +
      element.eaw14_in +
      element.eaw14_out +
      element.eaw14_sld +
      element.eaw10_awal +
      element.eaw10_in +
      element.eaw10_out +
      element.eaw10_sld;

    if (total.toString().includes('e')) {
      textString = total.toString().split('e');
      textDisplay = parseFloat(textString[0]);
    } else {
      textDisplay = total;
    }

    // eay18
    if (element.eay18_awal.toString().includes('e')) {
      eay18AwalString = element.eay18_awal.toString().split('e');
      eay18Awal = parseFloat(eay18AwalString[0]);
    } else {
      eay18Awal = element.eay18_awal;
    }

    if (element.eay18_in.toString().includes('e')) {
      eay18InString = element.eay18_inawal.toString().split('e');
      eay18In = parseFloat(eay18InString[0]);
    } else {
      eay18In = element.eay18_in;
    }

    if (element.eay18_out.toString().includes('e')) {
      eay18OutString = element.eay18_out.toString().split('e');
      eay18Out = parseFloat(eay18OutString[0]);
    } else {
      eay18Out = element.eay18_out;
    }

    if (element.eay18_sld.toString().includes('e')) {
      eay18SldString = element.eay18_sld.toString().split('e');
      eay18Sld = parseFloat(eay18SldString[0]);
    } else {
      eay18Sld = element.eay18_sld;
    }

    // eay14
    if (element.eay14_awal.toString().includes('e')) {
      eay14AwalString = element.eay14_awal.toString().split('e');
      eay14Awal = parseFloat(eay14AwalString[0]);
    } else {
      eay14Awal = element.eay14_awal;
    }

    if (element.eay14_in.toString().includes('e')) {
      eay14InString = element.eay14_in.toString().split('e');
      eay14In = parseFloat(eay14InString[0]);
    } else {
      eay14In = element.eay14_in;
    }

    if (element.eay14_out.toString().includes('e')) {
      eay14OutString = element.eay14_out.toString().split('e');
      eay14Out = parseFloat(eay14OutString[0]);
    } else {
      eay14Out = element.eay14_out;
    }

    if (element.eay14_sld.toString().includes('e')) {
      eay14SldString = element.eay14_sld.toString().split('e');
      eay14Sld = parseFloat(eay14SldString[0]);
    } else {
      eay14Sld = element.eay14_sld;
    }

    // eay10
    if (element.eay10_awal.toString().includes('e')) {
      eay10AwalString = element.eay10_awal.toString().split('e');
      eay10Awal = parseFloat(eay10AwalString[0]);
    } else {
      eay10Awal = element.eay10_awal;
    }

    if (element.eay10_in.toString().includes('e')) {
      eay10InString = element.eay10_in.toString().split('e');
      eay10In = parseFloat(eay10InString[0]);
    } else {
      eay10In = element.eay10_in;
    }

    if (element.eay10_out.toString().includes('e')) {
      eay10OutString = element.eay10_out.toString().split('e');
      eay10Out = parseFloat(eay10OutString[0]);
    } else {
      eay10Out = element.eay10_out;
    }

    if (element.eay10_sld.toString().includes('e')) {
      eay10SldString = element.eay10_sld.toString().split('e');
      eay10Sld = parseFloat(eay10SldString[0]);
    } else {
      eay10Sld = element.eay10_sld;
    }

    // eaw18
    if (element.eaw18_awal.toString().includes('e')) {
      eaw18AwalString = element.eaw18_awal.toString().split('e');
      eaw18Awal = parseFloat(eaw18AwalString[0]);
    } else {
      eaw18Awal = element.eaw18_awal;
    }

    if (element.eaw18_in.toString().includes('e')) {
      eaw18InString = element.eaw18_inawal.toString().split('e');
      eaw18In = parseFloat(eaw18InString[0]);
    } else {
      eaw18In = element.eaw18_in;
    }

    if (element.eaw18_out.toString().includes('e')) {
      eaw18OutString = element.eaw18_out.toString().split('e');
      eaw18Out = parseFloat(eaw18OutString[0]);
    } else {
      eaw18Out = element.eaw18_out;
    }

    if (element.eaw18_sld.toString().includes('e')) {
      eaw18SldString = element.eaw18_sld.toString().split('e');
      eaw18Sld = parseFloat(eaw18SldString[0]);
    } else {
      eaw18Sld = element.eaw18_sld;
    }

    // eaw14
    if (element.eaw14_awal.toString().includes('e')) {
      eaw14AwalString = element.eaw14_awal.toString().split('e');
      eaw14Awal = parseFloat(eaw14AwalString[0]);
    } else {
      eaw14Awal = element.eaw14_awal;
    }

    if (element.eaw14_in.toString().includes('e')) {
      eaw14InString = element.eaw14_in.toString().split('e');
      eaw14In = parseFloat(eaw14InString[0]);
    } else {
      eaw14In = element.eaw14_in;
    }

    if (element.eaw14_out.toString().includes('e')) {
      eaw14OutString = element.eaw14_out.toString().split('e');
      eaw14Out = parseFloat(eaw14OutString[0]);
    } else {
      eaw14Out = element.eaw14_out;
    }

    if (element.eaw14_sld.toString().includes('e')) {
      eaw14SldString = element.eaw14_sld.toString().split('e');
      eaw14Sld = parseFloat(eaw14SldString[0]);
    } else {
      eaw14Sld = element.eaw14_sld;
    }

    // eaw10
    if (element.eaw10_awal.toString().includes('e')) {
      eaw10AwalString = element.eaw10_awal.toString().split('e');
      eaw10Awal = parseFloat(eaw10AwalString[0]);
    } else {
      eaw10Awal = element.eaw10_awal;
    }

    if (element.eaw10_in.toString().includes('e')) {
      eaw10InString = element.eaw10_in.toString().split('e');
      eaw10In = parseFloat(eaw10InString[0]);
    } else {
      eaw10In = element.eaw10_in;
    }

    if (element.eaw10_out.toString().includes('e')) {
      eaw10OutString = element.eaw10_out.toString().split('e');
      eaw10Out = parseFloat(eaw10OutString[0]);
    } else {
      eaw10Out = element.eaw10_out;
    }

    if (element.eaw10_sld.toString().includes('e')) {
      eaw10SldString = element.eaw10_sld.toString().split('e');
      eaw10Sld = parseFloat(eaw10SldString[0]);
    } else {
      eaw10Sld = element.eaw10_sld;
    }
    const row = [
      {
        content: element.divisi,
        styles: {
          halign: 'left',
        },
      },
      {
        content: eay18Awal.toFixed(3),
      },
      {
        content: eay18In.toFixed(3),
      },
      {
        content: eay18Out.toFixed(3),
      },
      {
        content: eay18Sld.toFixed(3),
      },
      {
        content: eay14Awal.toFixed(3),
      },
      {
        content: eay14In.toFixed(3),
      },
      {
        content: eay14Out.toFixed(3),
      },
      {
        content: eay14Sld.toFixed(3),
      },
      {
        content: eay10Awal.toFixed(3),
      },
      {
        content: eay10In.toFixed(3),
      },
      {
        content: eay10Out.toFixed(3),
      },
      {
        content: eay10Sld.toFixed(3),
      },
      {
        content: eaw18Awal.toFixed(3),
      },
      {
        content: eaw18In.toFixed(3),
      },
      {
        content: eaw18Out.toFixed(3),
      },
      {
        content: eaw18Sld.toFixed(3),
      },
      {
        content: eaw14Awal.toFixed(3),
      },
      {
        content: eaw14In.toFixed(3),
      },
      {
        content: eaw14Out.toFixed(3),
      },
      {
        content: eaw14Sld.toFixed(3),
      },
      {
        content: eaw10Awal.toFixed(3),
      },
      {
        content: eaw10In.toFixed(3),
      },
      {
        content: eaw10Out.toFixed(3),
      },
      {
        content: eaw10Sld.toFixed(3),
      },
      {
        content: total.toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: '',
    },
    {
      content: data.reduce((a, b) => a + b.eay18_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay18_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay18_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay18_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay14_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay14_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay14_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay14_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay10_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay10_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay10_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eay10_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw18_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw18_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw18_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw18_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw14_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw14_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw14_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw14_sld, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw10_awal, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw10_in, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw10_out, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.eaw10_sld, 0).toFixed(3),
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

export default pdfReportR;
