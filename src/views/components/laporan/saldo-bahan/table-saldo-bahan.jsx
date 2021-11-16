import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Saldo Bahan",
    children: [
      {
        title: "Jenis",
        dataIndex: "jenis",
        key: "jenis",
        align: "center",
      },
      {
        title: "Baru",
        dataIndex: "baru",
        key: "baru",
        align: "center",
      },
      {
        title: "Karat",
        dataIndex: "karat",
        key: "karat",
        align: "center",
      },
      {
        title: "Lama",
        dataIndex: "lama",
        key: "lama",
        align: "center",
      },
      {
        title: "Karat",
        dataIndex: "karat",
        key: "karat",
        align: "center",
      },
      {
        title: "Kali",
        dataIndex: "kali",
        key: "kali",
        align: "center",
      },
      {
        title: "Spru",
        dataIndex: "spru",
        key: "spru",
        align: "center",
      },
      {
        title: "Karat",
        dataIndex: "karat",
        key: "karat",
        align: "center",
      },
      {
        title: "Kali",
        dataIndex: "kali",
        key: "kali",
        align: "center",
      },
      {
        title: "Jend. Casting",
        dataIndex: "casting",
        key: "casting",
        align: "center",
      },
      {
        title: "Total",
        dataIndex: "total",
        key: "total",
        align: "center",
      },
      {
        title: "Karat",
        dataIndex: "karat",
        key: "karat",
        align: "center",
      },
    ],
  },
  {
    title: "Baru Campuran",
    children: [
      {
        title: "Berat",
        dataIndex: "berat",
        key: "berat",
        align: "center",
      },
      {
        title: "Karat",
        dataIndex: "karat",
        key: "karat",
        align: "center",
      },
    ],
  },
];

const TableLaporanSaldoBahan = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 1500, y: 1000 }} />
  );
};

export default TableLaporanSaldoBahan;
