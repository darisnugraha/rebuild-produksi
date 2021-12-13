import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TableKirimBatu = () => {
  const dataTable = getLocal("data_detail_bahan") || [];
  const columns = [
    {
      title: "Divisi Tujuan",
      dataIndex: "divisi_tujuan",
      key: "divisi_tujuan",
      align: "center",
    },
    {
      title: "No SPK",
      dataIndex: "no_spk",
      key: "no_spk",
      align: "center",
    },
    {
      title: "Asal Saldo",
      dataIndex: "asal_saldo",
      key: "asal_saldo",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "bahan",
      key: "bahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "Tambahan",
      dataIndex: "tambahan",
      key: "tambahan",
      align: "center",
    },
  ];
  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableKirimBatu;
