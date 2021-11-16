import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Barang",
    dataIndex: "kode_barang",
    key: "kode_barang",
    align: "center",
  },
  {
    title: "Nama Barang",
    dataIndex: "nama_barang",
    key: "nama_barang",
    align: "center",
  },
];

const TableMasterOriginal = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterOriginal;
