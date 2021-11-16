import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "No Pembuatan Bahan",
    dataIndex: "no_transaksi",
    key: "no_transaksi",
    align: "center",
  },
  {
    title: "Pohon",
    dataIndex: "phn",
    key: "phn",
    align: "center",
  },
  {
    title: "Jenis Bahan",
    dataIndex: "jenis_bahan",
    key: "jenis_bahan",
    align: "center",
  },
  {
    title: "Berat Awal",
    dataIndex: "berat_awal",
    key: "berat_awal",
    align: "center",
  },
  {
    title: "Berat Barang",
    dataIndex: "berat_barang",
    key: "berat_barang",
    align: "center",
  },
  {
    title: "Berat pentolan",
    dataIndex: "berat_pentolan",
    key: "berat_pentolan",
    align: "center",
  },
  {
    title: "Abu",
    dataIndex: "abu",
    key: "abu",
    align: "center",
  },
  {
    title: "Kadar",
    dataIndex: "kadar",
    key: "kadar",
    align: "center",
  },
  {
    title: "24K",
    dataIndex: "24k",
    key: "24k",
    align: "center",
  },
];

const TableTukangPotongOutstand = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableTukangPotongOutstand;
