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
    title: "Divisi",
    dataIndex: "divisi",
    key: "divisi",
    align: "center",
  },
  // {
  //   title: "Tukang",
  //   dataIndex: "kode_tukang",
  //   key: "kode_tukang",
  //   align: "center",
  // },
  {
    title: "SPK",
    dataIndex: "no_job_order",
    key: "no_job_order",
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
];

const TableAbuSetorTukang = () => {
  const dataAbuTukang = useSelector(Dashboard.getAllAbuTukangOutstand);
  return (
    <Table
      dataSource={dataAbuTukang}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableAbuSetorTukang;
