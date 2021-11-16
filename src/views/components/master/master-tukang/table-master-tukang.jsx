import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Tukang",
    dataIndex: "kode_tukang",
    key: "kode_tukang",
    align: "center",
  },
  {
    title: "Nama Tukang",
    dataIndex: "nama_tukang",
    key: "nama_tukang",
    align: "center",
  },
  {
    title: "No HP",
    dataIndex: "no_hp",
    key: "no_hp",
    align: "center",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterTukang = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterTukang;
