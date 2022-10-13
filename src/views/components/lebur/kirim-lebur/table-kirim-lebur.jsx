import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";

const TableKirimLebur = () => {
  const dataTable = getLocal("data_kirim_lebur") || [];
  const columns = [
    {
      title: "No Abu",
      dataIndex: "no_abu",
      key: "no_abu",
      align: "center",
    },
    {
      title: "Asal Bahan",
      dataIndex: "asal_bahan",
      key: "asal_bahan",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat",
      key: "berat",
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
      dataIndex: "karat",
      key: "karat",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
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

export default TableKirimLebur;
