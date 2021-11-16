import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Tanggal",
    dataIndex: "tgl",
    key: "tgl",
    align: "center",
  },
  {
    title: "Divisi",
    dataIndex: "divisi",
    key: "divisi",
    align: "center",
  },
  {
    title: "Tukang",
    dataIndex: "tukang",
    key: "tukang",
    align: "center",
  },
  {
    title: "SPK",
    dataIndex: "spk",
    key: "spk",
    align: "center",
  },
  {
    title: "Jenis Bahan",
    dataIndex: "jenis_bahan",
    key: "jenis_bahan",
    align: "center",
  },
  {
    title: "Berat Kembali",
    dataIndex: "berat_kembali",
    key: "berat_kembali",
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

const TableAbuSetorTukang = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableAbuSetorTukang;
