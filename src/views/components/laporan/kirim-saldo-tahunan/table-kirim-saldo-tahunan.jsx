import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Bulan",
    dataIndex: "bulan",
    key: "bulan",
    fixed: "left",
  },
  {
    title: "Kerja Hari",
    dataIndex: "kerja_hari",
    key: "kerja_hari",
    fixed: "left",
  },
  {
    title: "Jenis",
    dataIndex: "jenis",
    key: "jenis",
    fixed: "left",
  },
  {
    title: "FR1",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr1_selesai",
        key: "fr1_selesai",
        align: "center",
      },
      {
        title: "Saldo",
        dataIndex: "fr1_saldo",
        key: "fr1_saldo",
        align: "center",
      },
    ],
  },
  {
    title: "FR2",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr2_selesai",
        key: "fr2_selesai",
        align: "center",
      },
      {
        title: "Saldo",
        dataIndex: "fr2_saldo",
        key: "fr2_saldo",
        align: "center",
      },
    ],
  },
  {
    title: "FR3",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr3_selesai",
        key: "fr3_selesai",
        align: "center",
      },
      {
        title: "Saldo",
        dataIndex: "fr3_saldo",
        key: "fr3_saldo",
        align: "center",
      },
    ],
  },
  {
    title: "FR Total",
    children: [
      {
        title: "Selesai",
        dataIndex: "total_selesai",
        key: "total_selesai",
        align: "center",
      },
      {
        title: "Saldo",
        dataIndex: "total_saldo",
        key: "total_saldo",
        align: "center",
      },
    ],
  },
  {
    title: "Hand Stg",
    children: [
      {
        title: "Selesai",
        dataIndex: "hand_selesai",
        key: "hand_selesai",
        align: "center",
      },
      {
        title: "Saldo",
        dataIndex: "hand_saldo",
        key: "hand_saldo",
        align: "center",
      },
    ],
  },
];

const TableLaporanKirimSaldoTahun = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 1500, y: 1000 }} />
  );
};

export default TableLaporanKirimSaldoTahun;
