import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Nama Bahan",
    dataIndex: "nama_bahan",
    key: "nama_bahan",
    align: "center",
  },
  {
    title: "Berat",
    dataIndex: "berat",
    key: "berat",
    align: "center",
  },
];

const TablePembuatanJenisBahan = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TablePembuatanJenisBahan;
