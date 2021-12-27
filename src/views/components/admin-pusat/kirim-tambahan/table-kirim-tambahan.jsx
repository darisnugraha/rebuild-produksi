import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import kirimTambahan from "../../../../application/selectors/kirimtambahan";
import { useSelector } from "react-redux";

const TableKirimBatu = () => {
  const dataTable = useSelector(kirimTambahan.getAllKirimTambahanDivisi);
  const columns = [
    {
      title: "Divisi Tujuan",
      dataIndex: "divisi",
      key: "divisi",
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
      dataIndex: "asal_saldo",
      key: "asal_saldo",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock_out",
      key: "stock_out",
      align: "center",
    },
    {
      title: "Tambahan",
      dataIndex: "berat_out",
      key: "berat_out",
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
