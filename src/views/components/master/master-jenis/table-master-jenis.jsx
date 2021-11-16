import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Jenis",
    dataIndex: "kode_jenis",
    key: "kode_jenis",
    align: "center",
  },
  {
    title: "Nama Jenis",
    dataIndex: "nama_jenis",
    key: "nama_jenis",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterJenis = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterJenis;
