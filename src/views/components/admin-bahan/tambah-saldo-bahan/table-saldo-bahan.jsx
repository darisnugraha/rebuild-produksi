import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Bahan",
    dataIndex: "bahan",
    key: "bahan",
    align: "center",
  },
  {
    title: "Berat Stock",
    dataIndex: "berat_stock",
    key: "berat_stock",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "act",
    align: "center",
  },
];

const TableSaldoBahan = () => {
  return (
    <Table dataSource={[]} columns={columns} scroll={{ x: 500, y: 1500 }} />
  );
};

export default TableSaldoBahan;
