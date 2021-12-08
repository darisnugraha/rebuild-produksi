import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const TableTambahJO = () => {
  const dataDetailJO = JSON.parse(localStorage.getItem("data_detail_jo")) || [];

  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_spk",
      key: "no_spk",
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
      dataIndex: "jumlah_bahan",
      key: "jumlah_bahan",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat_bahan",
      key: "berat_bahan",
      align: "center",
    },
    {
      title: "Catatan",
      dataIndex: "catatan",
      key: "catatan",
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
