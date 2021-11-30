import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "../../../application/selectors/dashboard";

const columns = [
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    align: "center",
  },
  {
    title: "Pohon",
    dataIndex: "pohon",
    key: "pohon",
    align: "center",
  },
  {
    title: "Jenis Bahan",
    dataIndex: "bahan_kembali",
    key: "bahan_kembali",
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
    dataIndex: "kadar_kembali",
    key: "kadar_kembali",
    align: "center",
  },
  {
    title: "24K",
    dataIndex: "kembali_24",
    key: "kembali_24",
    align: "center",
  },
  {
    title: "Susut 24k",
    dataIndex: "susut_24",
    key: "susut_24",
    align: "center",
  },
];

const TableAbuSetorTukangPotong = () => {
  const dataAbuPotong = useSelector(Dashboard.getAllAbuPotongOutstand);
  return (
    <Table dataSource={dataAbuPotong} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableAbuSetorTukangPotong;
