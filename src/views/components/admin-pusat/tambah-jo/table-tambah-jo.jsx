import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const TableTambahJO = () => {
  const dataDetailJO = JSON.parse(localStorage.getItem("data_detail_jo")) || [];

  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
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
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    // {
    //   title: "Stock Order",
    //   dataIndex: "stock_order",
    //   key: "stock_order",
    //   align: "center",
    // },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "Berat Terima Potong",
      dataIndex: "berat_potong",
      key: "berat_potong",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "center",
    },
    {
      title: "Berat Balik",
      dataIndex: "berat_balik",
      key: "berat_balik",
      align: "center",
    },
    {
      title: "Catatan",
      dataIndex: "catatan",
      key: "catatan",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "kode_status_job_order",
      key: "kode_status_job_order",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataDetailJO}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableTambahJO;
