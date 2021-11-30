import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "../../../application/selectors/dashboard";

const columns = [
  {
    title: "No Pembuatan Bahan",
    dataIndex: "no_mutasi",
    key: "no_mutasi",
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
    dataIndex: "kode_jenis_bahan",
    key: "kode_jenis_bahan",
    align: "center",
  },
  {
    title: "Berat Awal",
    dataIndex: "berat",
    key: "berat",
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
    dataIndex: null,
    key: "abu",
    align: "center",
    render: (text) => {
      let berat = parseFloat(text.berat);
      let berat_sisa = berat - (text.berat_barang + text.berat_pentolan);
      return berat_sisa.toFixed(3);
    },
  },
  {
    title: "Kadar",
    dataIndex: "kadar",
    key: "kadar",
    align: "center",
  },
  {
    title: "24K",
    dataIndex: null,
    key: "24k",
    align: "center",
    render: (text) => {
      let berat = parseFloat(text.berat);
      let kadarkali = text.kadar / 100;
      let berat_sisa = berat - (text.berat_barang + text.berat_pentolan);
      let k24 = kadarkali * berat_sisa;

      return k24.toFixed(3);
    },
  },
];

const TableTukangPotongOutstand = () => {
  const dataBahanOutstand = useSelector(Dashboard.getAllBahanOutstand);
  return (
    <Table
      dataSource={dataBahanOutstand}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableTukangPotongOutstand;
