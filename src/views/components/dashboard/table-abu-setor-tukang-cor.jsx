import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "../../../application/selectors/dashboard";

const columns = [
  {
    title: "No Mutasi",
    dataIndex: "no_mutasi",
    key: "no_mutasi",
    align: "center",
  },
  {
    title: "Pohon",
    dataIndex: "no_pohon",
    key: "no_pohon",
    align: "center",
  },
  {
    title: "Jenis Bahan",
    dataIndex: "kode_jenis_bahan",
    key: "kode_jenis_bahan",
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

const TableAbuSetorTukangCor = () => {
  const dataAbuCastingOutstand = useSelector(
    Dashboard.getAllAbuCastingOutstand
  );
  return (
    <Table
      dataSource={dataAbuCastingOutstand}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableAbuSetorTukangCor;
