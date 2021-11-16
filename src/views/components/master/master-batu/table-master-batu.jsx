import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Batu",
    dataIndex: "kode_batu",
    key: "kode_batu",
    align: "center",
  },
  {
    title: "Nama Batu",
    dataIndex: "nama_batu",
    key: "nama_batu",
    align: "center",
  },
  {
    title: "Ukuran",
    dataIndex: "ukuran",
    key: "ukuran",
    align: "center",
  },
  {
    title: "Jenis Batu",
    dataIndex: "jenis_batu",
    key: "jenis_batu",
    align: "center",
  },
  {
    title: "Cutting Batu",
    dataIndex: "cutting_batu",
    key: "cutting_batu",
    align: "center",
  },
  {
    title: "Berat",
    dataIndex: "berat",
    key: "berat",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterBatu = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterBatu;
