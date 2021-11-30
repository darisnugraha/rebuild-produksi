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
    title: "Berat Terima",
    dataIndex: "berat_casting",
    key: "berat_casting",
    align: "center",
  },
  {
    title: "Abu",
    dataIndex: null,
    key: "abu",
    align: "center",
    render: (text) => {
      let berat_sisa = text.berat_casting - text.berat;
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
      let susut_24k = (text.berat_casting - text.berat) * (text.kadar / 100);
      return susut_24k.toFixed(3);
    },
  },
];

const TableTukangCorOutstand = () => {
  const dataCastingOutstand = useSelector(Dashboard.getAllCastingOutstand);
  return (
    <Table
      dataSource={dataCastingOutstand}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableTukangCorOutstand;
