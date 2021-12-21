import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TableKirimMasak = () => {
  const dataTable = getLocal("data_kirim_masak") || [];
  const columns = [
    {
      title: "No Terima Lebur",
      dataIndex: "no_terima_lebur",
      key: "no_terima_lebur",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
      align: "center",
    },
    {
      title: "Kadar",
      dataIndex: "kadar",
      key: "kadar",
      align: "center",
    },
    {
      title: "24K",
      dataIndex: "karat_24",
      key: "karat_24",
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

export default TableKirimMasak;
