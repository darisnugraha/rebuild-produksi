import React, { useState } from "react";
import { Input, Table } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

const TableTerimaBatu = () => {
  const dataMasterOriginal =
    JSON.parse(localStorage.getItem("data_detail_kirim_batu")) || [];

  const [dataSource, setDataSource] = useState(dataMasterOriginal);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataMasterOriginal.filter(
          (entry) =>
            entry.kode_barang.includes(currValue.toUpperCase()) ||
            entry.nama_barang.includes(currValue.toUpperCase())
        );
        setDataSource(filteredData);
        setSearch(true);
      }}
    />
  );

  const dataTable =
    dataSource.length === 0
      ? search
        ? dataSource
        : dataMasterOriginal
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "No Kirim Batu",
          dataIndex: "no_kirim_batu",
          key: "no_kirim_batu",
          align: "center",
        },
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
          title: "Jenis Bahan",
          dataIndex: "kode_jenis_bahan",
          key: "kode_jenis_bahan",
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
          dataIndex: "stock_batu",
          key: "stock_batu",
          align: "center",
        },
        {
          title: "Berat Batu",
          dataIndex: "berat_batu",
          key: "berat_batu",
          align: "center",
        },
      ],
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

export default TableTerimaBatu;
