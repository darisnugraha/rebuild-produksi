import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Cutting Batu",
    dataIndex: "kode_cutting_batu",
    key: "kode_cutting_batu",
    align: "center",
  },
  {
    title: "Nama Cutting Batu",
    dataIndex: "nama_cutting_batu",
    key: "nama_cutting_batu",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterCuttingBatu = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterCuttingBatu;
