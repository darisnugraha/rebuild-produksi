import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TablePembuatanJenisBahan = () => {
  const dataTable = getLocal("data_detail_bahan") || [];
  const columns = [
    {
      title: "Nama Bahan",
      dataIndex: "nama_bahan",
      key: "nama_bahan",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat_bahan",
      key: "berat_bahan",
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

export default TablePembuatanJenisBahan;
