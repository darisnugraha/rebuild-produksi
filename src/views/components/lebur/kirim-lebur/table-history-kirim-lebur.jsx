import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import HistoryKirimLebur from "../../../../application/selectors/kirimlebur";

const TableHistoryKirimLebur = () => {
  const dataHistoryKirimLebur = useSelector(
    HistoryKirimLebur.getAllHistoryKirimLebur
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
      dataIndex: "no_kirim_lebur",
      key: "no_kirim_lebur",
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
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    // {
    //   title: "Keterangan Lebur",
    //   dataIndex: "keterangan_lebur",
    //   key: "keterangan_lebur",
    //   align: "center",
    // },
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
      dataIndex: "karat_24",
      key: "karat_24",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
  ];
  return (
    <Table
      dataSource={dataHistoryKirimLebur}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableHistoryKirimLebur;
