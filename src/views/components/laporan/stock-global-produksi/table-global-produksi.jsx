import React from "react";
import "antd/dist/antd.css";
import { Table, Col, Row } from "antd";
import { useSelector } from 'react-redux';
import laporanStockGlobalProduksi from '../../../../application/selectors/laporanstockglobalproduksi';
import ui from '../../../../application/selectors/ui';

const columns = [
  {
    title: "Divisi",
    dataIndex: "divisi",
    key: "divisi",
    fixed: "left",
    sorter: (a, b) => a.divisi.localeCompare(b.divisi),
  },
  {
    title: "AWH75",
    children: [
      {
        title: "Awal",
        dataIndex: "awh75_awal",
        key: "awh75_awal",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "awh75_in",
        key: "awh75_in",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "awh75_out",
        key: "awh75_out",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "awh75_sld",
        key: "awh75_sld",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "AYL70",
    children: [
      {
        title: "Awal",
        dataIndex: "ayl70_awal",
        key: "ayl70_awal",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "ayl70_in",
        key: "ayl70_in",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "ayl70_out",
        key: "ayl70_out",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "ayl70_sld",
        key: "ayl70_sld",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "AYL75",
    children: [
      {
        title: "Awal",
        dataIndex: "ayl75_awal",
        key: "ayl75_awal",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "ayl75_in",
        key: "ayl75_in",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "ayl75_out",
        key: "ayl75_out",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "ayl75_sld",
        key: "ayl75_sld",
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "Total",
    dataIndex: null,
    fixed: "right",
    render: (row) => {
      let total = 0;
      total =
        row.awh75_awal +
        row.awh75_in +
        row.awh75_out +
        row.awh75_sld +
        row.ayl70_awal +
        row.ayl70_in +
        row.ayl70_out +
        row.ayl70_sld +
        row.ayl75_awal +
        row.ayl75_in +
        row.ayl75_out +
        row.ayl75_sld;
      // return Math.floor(total);
      // return total.toFixed(3);
      let textString = "";
      let textDisplay = 0;
      if (total.toString().includes("e")) {
        textString = total.toString().split("e");
        textDisplay = parseFloat(textString[0]);
      } else {
        textDisplay = total;
      }
      return textDisplay.toFixed(3);
    },
  },
];

const columnsR = [
  {
    title: "Divisi",
    dataIndex: "divisi",
    key: "divisi",
    width: 100,
    fixed: "left",
    sorter: (a, b) => a.divisi.localeCompare(b.divisi),
  },
  {
    title: "EAY18",
    children: [
      {
        title: "Awal",
        dataIndex: "eay18_awal",
        key: "eay18_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eay18_in",
        key: "eay18_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eay18_out",
        key: "eay18_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eay18_sld",
        key: "eay18_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "EAY14",
    children: [
      {
        title: "Awal",
        dataIndex: "eay14_awal",
        key: "eay14_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eay14_in",
        key: "eay14_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eay14_out",
        key: "eay14_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eay14_sld",
        key: "eay14_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "EAY10",
    children: [
      {
        title: "Awal",
        dataIndex: "eay10_awal",
        key: "eay10_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eay10_in",
        key: "eay10_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eay10_out",
        key: "eay10_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eay10_sld",
        key: "eay10_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "EAW18",
    children: [
      {
        title: "Awal",
        dataIndex: "eaw18_awal",
        key: "eaw18_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eaw18_in",
        key: "eaw18_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eaw18_out",
        key: "eaw18_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eaw18_sld",
        key: "eaw18_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "EAW14",
    children: [
      {
        title: "Awal",
        dataIndex: "eaw14_awal",
        key: "eaw14_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eaw14_in",
        key: "eaw14_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eaw14_out",
        key: "eaw14_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eaw14_sld",
        key: "eaw14_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "EAW10",
    children: [
      {
        title: "Awal",
        dataIndex: "eaw10_awal",
        key: "eaw10_awal",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Masuk",
        dataIndex: "eaw10_in",
        key: "eaw10_in",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Keluar",
        dataIndex: "eaw10_out",
        key: "eaw10_out",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
      {
        title: "Saldo",
        dataIndex: "eaw10_sld",
        key: "eaw10_sld",
        width: 100,
        align: "center",
        render: (text) => {
          let textString = "";
          let textDisplay = 0;
          if (text.toString().includes("e")) {
            textString = text.toString().split("e");
            textDisplay = parseFloat(textString[0]);
          } else {
            textDisplay = text;
          }
          return textDisplay.toFixed(3);
        },
      },
    ],
  },
  {
    title: "Total",
    dataIndex: null,
    width: 100,
    fixed: "right",
    render: (row) => {
      let total = 0;
      total =
        row.eay18_awal +
        row.eay18_in +
        row.eay18_out +
        row.eay18_sld +
        row.eay14_awal +
        row.eay14_in +
        row.eay14_out +
        row.eay14_sld +
        row.eay10_awal +
        row.eay10_in +
        row.eay10_out +
        row.eay10_sld +
        row.eaw18_awal +
        row.eaw18_in +
        row.eaw18_out +
        row.eaw18_sld +
        row.eaw14_awal +
        row.eaw14_in +
        row.eaw14_out +
        row.eaw14_sld +
        row.eaw10_awal +
        row.eaw10_in +
        row.eaw10_out +
        row.eaw10_sld;
      // return Math.floor(total);
      // return total.toFixed(3);
      let textString = "";
      let textDisplay = 0;
      if (total.toString().includes("e")) {
        textString = total.toString().split("e");
        textDisplay = parseFloat(textString[0]);
      } else {
        textDisplay = total;
      }
      return textDisplay.toFixed(3);
    },
  },
];

const TableLaporanStockGlobalProduksi = () => {
    const datalapL = useSelector(laporanStockGlobalProduksi.getAllLaporanStockGlobalProduksiL);
    const datalapR = useSelector(laporanStockGlobalProduksi.getAllLaporanStockGlobalProduksiR);
    const typeTable = useSelector(ui.getTypeTableLayout);

  return (
    <Row>
      <Col>
        <Table
          dataSource={typeTable === "L" ? datalapL : datalapR}
          columns={typeTable === "L" ? columns : columnsR}
          scroll={{ x: 1500, y: 1000 }}
        />
      </Col>
    </Row>
  );
};

export default TableLaporanStockGlobalProduksi;
