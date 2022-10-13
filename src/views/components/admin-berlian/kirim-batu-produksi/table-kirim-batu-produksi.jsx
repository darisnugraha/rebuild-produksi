import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TableKirimBatuProduksi = () => {
  const dataTable = getLocal("data_detail_kirim_batu") || [];
  const columns = [
    // {
    //   title: "No Job Order",
    //   dataIndex: "no_job_order",
    //   key: "no_job_order",
    //   align: "center",
    // },
    // {
    //   title: "Kode Barang",
    //   dataIndex: "kode_barang",
    //   key: "kode_barang",
    //   align: "center",
    // },
    // {
    //   title: "Jenis Bahan",
    //   dataIndex: "kode_jenis_bahan",
    //   key: "kode_jenis_bahan",
    //   align: "center",
    // },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "QTY Kirim",
      dataIndex: "jumlah_kirim",
      key: "jumlah_kirim",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
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

export default TableKirimBatuProduksi;
