import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Bahan",
    dataIndex: "kode_bahan",
    key: "kode_bahan",
    align: "center",
  },
  {
    title: "Nama Bahan",
    dataIndex: "nama_bahan",
    key: "nama_bahan",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterBahan = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterBahan;
