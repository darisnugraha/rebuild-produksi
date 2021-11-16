import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "No. Job Order",
    dataIndex: "no_jo",
    key: "no_jo",
    align: "center",
  },
  {
    title: "Asal Divisi",
    dataIndex: "asal_divisi",
    key: "asal_divisi",
    align: "center",
  },
  {
    title: "Tujuan Divisi",
    dataIndex: "tujuan_divisi",
    key: "tujuan_divisi",
    align: "center",
  },
  {
    title: "Berat",
    dataIndex: "berat",
    key: "berat",
    align: "center",
  },
];

const TableJoOutstand = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableJoOutstand;
