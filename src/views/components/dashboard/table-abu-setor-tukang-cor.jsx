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
    title: "Berat Kembali",
    dataIndex: "berat_kembali",
    key: "berat_kembali",
    align: "center",
  },
  {
    title: "Susut Bruto",
    dataIndex: "susut_bruto",
    key: "susut_bruto",
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
  {
    title: "Susut 24k",
    dataIndex: "susut_24k",
    key: "susut_24k",
    align: "center",
  },
];

const TableAbuSetorTukangCor = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableAbuSetorTukangCor;
