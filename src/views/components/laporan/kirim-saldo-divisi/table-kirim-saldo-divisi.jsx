import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Laporan Produksi (BULAN)",
    children: [
      {
        title: "Tgl",
        dataIndex: "tgl",
        key: "tgl",
        align: "center",
        fixed: "left",
      },
      {
        title: "Kerja Hari",
        dataIndex: "kerja_hari",
        key: "kerja_hari",
        align: "center",
        fixed: "left",
      },
      {
        title: "Casting",
        dataIndex: "casting",
        key: "casting",
        align: "center",
        fixed: "left",
      },
      {
        title: "POTONG SPRU",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "FILLING",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "FR 1",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "FR 2",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "FR 3",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "FR TOTAL",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "HAND STG",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "POLISHING",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "PLATTING",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
      {
        title: "TOTAL",
        align: "center",
        children: [
          {
            title: "Selesai",
            dataIndex: "selesai",
            key: "selesai",
            align: "center",
          },
          {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align: "center",
          },
        ],
      },
    ],
  },
];

const TableLaporanKirimSaldoDivisi = () => {
  return (
    <Table
      size="small"
      dataSource={[]}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanKirimSaldoDivisi;
