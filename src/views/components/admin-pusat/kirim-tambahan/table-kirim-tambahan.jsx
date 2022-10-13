import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
// import kirimTambahan from "../../../../application/selectors/kirimtambahan";
// import { useSelector } from "react-redux";

const TableKirimBatu = () => {
  // const dataTable = useSelector(kirimTambahan.getAllKirimTambahanDivisi);
  const dataTable = getLocal("data_tambahan_cart");
  const dataTableArr = [];
  dataTableArr.push(dataTable);
  const columns = [
    {
      title: "Divisi Tujuan",
      dataIndex: "divisi_tujuan",
      key: "divisi_tujuan",
      align: "center",
    },
    {
      title: "No SPK",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Asal Saldo",
      dataIndex: "asal_saldo_tukang",
      key: "asal_saldo_tukang",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "nama_bahan",
      key: "nama_bahan",
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
      dataIndex: "berat",
      key: "berat",
      align: "center",
    },
  ];
  return (
    <Table
      dataSource={dataTableArr}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableKirimBatu;
