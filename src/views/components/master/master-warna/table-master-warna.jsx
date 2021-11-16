import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Warna",
    dataIndex: "kode_warna",
    key: "kode_warna",
    align: "center",
  },
  {
    title: "Nama Warna",
    dataIndex: "nama_warna",
    key: "nama_warna",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterWarna = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterWarna;
