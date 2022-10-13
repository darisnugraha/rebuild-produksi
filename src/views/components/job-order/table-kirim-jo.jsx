import React from "react";
import { Divider, Table } from "antd";
// import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import getLocal from "../../../infrastructure/services/local/get-local";
// import Dashboard from "../../../application/selectors/dashboard";

const TableKirimJO = () => {
  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
      align: "center",
    },
    {
      title: "Kode Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah Kirim",
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
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
  ];
  const columnsDetailBatu = [
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah Batu",
      dataIndex: "jumlah_tak_terpakai",
      key: "jumlah_tak_terpakai",
      align: "center",
    },
    {
      title: "Berat Batu",
      dataIndex: "berat_tak_terpakai",
      key: "berat_tak_terpakai",
      align: "center",
    },
  ];
  const data = [];
  data.push(getLocal("kirim_jo_head"));
  const dataDetailBatu = getLocal("detail_batu");

  return (
    <>
      <Table dataSource={data} columns={columns} scroll={{ x: 500, y: 1500 }} />
      <Divider orientation="left" style={{ fontSize: "14px" }}>
        Tabel Detail Batu
      </Divider>
      <Table
        dataSource={dataDetailBatu}
        columns={columnsDetailBatu}
        scroll={{ x: 500, y: 1500 }}
      />
    </>
  );
};

export default TableKirimJO;
