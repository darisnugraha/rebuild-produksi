import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Table } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterOriginal from "../../../application/selectors/masteroriginal";

const TableMasterOriginal = () => {
  const dataMasterOriginal = useSelector(MasterOriginal.getAllMasterOriginal);

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
        const filteredData = dataMasterOriginal.filter((entry) =>
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
          title: "Kode Barang",
          dataIndex: "kode_barang",
          key: "kode_barang",
          align: "center",
        },
        {
          title: "Nama Barang",
          dataIndex: "nama_barang",
          key: "nama_barang",
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

export default TableMasterOriginal;
