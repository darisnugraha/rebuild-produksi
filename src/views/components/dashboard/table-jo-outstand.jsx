import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "../../../application/selectors/dashboard";

const columns = [
  {
    title: "No. Job Order",
    dataIndex: "no_job_order",
    key: "no_job_order",
    align: "center",
  },
  {
    title: "Asal Divisi",
    dataIndex: "asal_divisi",
    key: "asal_divisi",
    align: "center",
  },
  {
    title: "Tujuan Divisi",
    dataIndex: null,
    key: "tujuan_divisi",
    align: "center",
    render: (text) => {
      return text.tujuan_divisi + ` (${text.kode_staff})`;
    },
  },
  {
    title: "Berat",
    dataIndex: "berat",
    key: "berat",
    align: "center",
  },
];

const TableJoOutstand = () => {
  const dataOutstandJO = useSelector(Dashboard.getAllDashboard);
  return (
    <Table
      dataSource={dataOutstandJO}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableJoOutstand;
