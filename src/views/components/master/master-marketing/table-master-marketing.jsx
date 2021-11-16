import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Marketing",
    dataIndex: "kode_marketing",
    key: "kode_marketing",
    align: "center",
  },
  {
    title: "Nama Marketing",
    dataIndex: "nama_marketing",
    key: "nama_marketing",
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

const TableMasterMarketing = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterMarketing;
