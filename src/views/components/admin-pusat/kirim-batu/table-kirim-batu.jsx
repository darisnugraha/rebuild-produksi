import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import service from "../../../../infrastructure/services/index";

const TableKirimBatu = () => {
  const dataTable = service.getLocal("detail_batu_head") || [];
  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Barang",
      dataIndex: "kode_barang",
      key: "kode_barang",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah Batu",
      dataIndex: "jumlah_batu",
      key: "jumlah_batu",
      align: "center",
    },
    {
      title: "Berat Batu",
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

export default TableKirimBatu;
