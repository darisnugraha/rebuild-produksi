import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "LAPORAN STOCK BAHAN",
    children: [
      {
        title: "TANGGAL",
        children: [
          {
            title: "Barang Jo",
            children: [
              {
                title: "Keterangan",
                dataIndex: "keterangan",
                key: "keterangan",
                align: "center",
              },
              {
                title: "Berat",
                dataIndex: "berat",
                key: "berat",
                align: "center",
              },
            ],
          },
          {
            title: "Stock Material",
            children: [
              {
                title: "Keterangan",
                dataIndex: "keterangan",
                key: "keterangan",
                align: "center",
              },
              {
                title: "Berat",
                dataIndex: "berat",
                key: "berat",
                align: "center",
              },
            ],
          },
          {
            title: "Sparepart",
            children: [
              {
                title: "Keterangan",
                dataIndex: "keterangan",
                key: "keterangan",
                align: "center",
              },
              {
                title: "Berat",
                dataIndex: "berat",
                key: "berat",
                align: "center",
              },
            ],
          },
          {
            title: "Bubuk & Batu Pecah",
            children: [
              {
                title: "Keterangan",
                dataIndex: "keterangan",
                key: "keterangan",
                align: "center",
              },
              {
                title: "Berat",
                dataIndex: "berat",
                key: "berat",
                align: "center",
              },
            ],
          },
        ],
      },
    ],
  },
];

const TableLaporanStockAdmin = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 1500, y: 1000 }} />
  );
};

export default TableLaporanStockAdmin;
