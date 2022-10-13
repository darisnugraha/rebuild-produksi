import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import HistoryKirimMasak from "../../../../application/selectors/kirimmasak";

const TableHistoryKirimMasak = () => {
  const dataHistoryKirimMasak = useSelector(
    HistoryKirimMasak.getAllHistoryKirimMasak
  );
  const columns = [
    {
      title: "Tgl Kirim",
      dataIndex: "tanggal_kirim",
      key: "tanggal_kirim",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim_masak",
      key: "no_kirim_masak",
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
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    //   align: "center",
    // },
  ];
  return (
    <Table
      dataSource={dataHistoryKirimMasak}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableHistoryKirimMasak;
