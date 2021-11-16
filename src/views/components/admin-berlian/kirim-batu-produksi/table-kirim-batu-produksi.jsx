import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "No Job Order",
    dataIndex: "no_jo",
    key: "no_jo",
    align: "center",
  },
  {
    title: "Kode Barang",
    dataIndex: "kode_barang",
    key: "kode_barang",
    align: "center",
  },
  {
    title: "Jenis Bahan",
    dataIndex: "jenis_bahan",
    key: "jenis_bahan",
    align: "center",
  },
  {
    title: "Kode Batu",
    dataIndex: "kode_batu",
    key: "kode_batu",
    align: "center",
  },
  {
    title: "QTY Kirim",
    dataIndex: "qty_kirim",
    key: "qty_kirim",
    align: "center",
  },
  {
    title: "Berat Kirim",
    dataIndex: "berat_kirim",
    key: "berat_kirim",
    align: "center",
  },
];

const TableKirimBatuProduksi = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableKirimBatuProduksi;
