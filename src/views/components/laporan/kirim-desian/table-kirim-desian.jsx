import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Tgl",
    dataIndex: "tgl",
    key: "tgl",
    align: "center",
    fixed: "left",
  },
  {
    title: "Jenis",
    dataIndex: "jenis",
    key: "jenis",
    align: "center",
    fixed: "left",
  },
  {
    title: "P.spru",
    align: "center",
    children: [
      {
        title: "BG",
        dataIndex: "bg",
        key: "bg",
        align: "center",
      },
      {
        title: "R",
        dataIndex: "r",
        key: "r",
        align: "center",
      },
      {
        title: "P",
        dataIndex: "p",
        key: "p",
        align: "center",
      },
      {
        title: "E",
        dataIndex: "e",
        key: "e",
        align: "center",
      },
    ]
  },
  {
    title: "Total",
    align: "center",
    children: [
      {
        title: "BG",
        dataIndex: "bg",
        key: "bg",
        align: "center",
      },
      {
        title: "R",
        dataIndex: "r",
        key: "r",
        align: "center",
      },
      {
        title: "P",
        dataIndex: "p",
        key: "p",
        align: "center",
      },
      {
        title: "E",
        dataIndex: "e",
        key: "e",
        align: "center",
      },
    ]
  },
];

const TableLaporanKirimDesian = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 1500, y: 1000 }} />
  );
};

export default TableLaporanKirimDesian;
