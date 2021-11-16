import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Jenis Batu",
    dataIndex: "kode_jenis_batu",
    key: "kode_jenis_batu",
    align: "center",
  },
  {
    title: "Nama Jenis Batu",
    dataIndex: "nama_jenis_batu",
    key: "nama_jenis_batu",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterJenisBatu = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterJenisBatu;
