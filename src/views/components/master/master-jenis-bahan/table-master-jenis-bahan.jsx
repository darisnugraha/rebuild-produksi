import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Jenis Bahan",
    dataIndex: "kode_jenis_bahan",
    key: "kode_jenis_bahan",
    align: "center",
  },
  {
    title: "Nama Jenis bahan",
    dataIndex: "nama_jenis_bahan",
    key: "nama_jenis_bahan",
    align: "center",
  },
  {
    title: "Kode Warna",
    dataIndex: "kode_warna",
    key: "kode_warna",
    align: "center",
  },
  {
    title: "Kadar",
    dataIndex: "kadar",
    key: "kadar",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterJenisBahan = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterJenisBahan;
