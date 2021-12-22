import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TableHistoryKirimBatuProduksi = () => {
  const dataTable = getLocal("data_history_kirim_batu_produksi") || [];

  const columns = [
    {
      title: "Tgl Kirim",
      dataIndex: "tgl_kirim",
      key: "tgl_kirim",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "QTY Kirim",
      dataIndex: "stock_batu",
      key: "stock_batu",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_batu",
      key: "berat_batu",
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

export default TableHistoryKirimBatuProduksi;
