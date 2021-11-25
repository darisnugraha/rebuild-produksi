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
    title: "Stock Order",
    dataIndex: "stock_order",
    key: "stock_order",
    align: "center",
  },
  {
    title: "Jumlah",
    dataIndex: "jumlah",
    key: "jumlah",
    align: "center",
  },
  {
    title: "Berat",
    dataIndex: "berat",
    key: "berat",
    align: "center",
  },
  {
    title: "Catatan",
    dataIndex: "catatan",
    key: "catatan",
    align: "center",
  },
];

const TableTambahJO = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableTambahJO;
