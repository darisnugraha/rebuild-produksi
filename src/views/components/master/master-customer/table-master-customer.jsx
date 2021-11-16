import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Kode Customer",
    dataIndex: "kode_customer",
    key: "kode_customer",
    align: "center",
  },
  {
    title: "Nama Customer",
    dataIndex: "nama_customer",
    key: "nama_customer",
    align: "center",
  },
  {
    title: "Nama Toko",
    dataIndex: "nama_toko",
    key: "nama_toko",
    align: "center",
  },
  {
    title: "Alamat",
    dataIndex: "alamat",
    key: "alamat",
    align: "center",
  },
  {
    title: "No Hp",
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
    title: "Negara",
    dataIndex: "negara",
    key: "negara",
    align: "center",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableMasterCustomer = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableMasterCustomer;
