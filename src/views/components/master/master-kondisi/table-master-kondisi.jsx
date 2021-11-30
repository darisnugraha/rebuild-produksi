import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterKondisi from "../../../../application/selectors/masterkondisi";

const TableMasterKondisi = () => {
  const dataMasterKondisi = useSelector(MasterKondisi.getAllMasterKondisi);

  const [dataSource, setDataSource] = useState(dataMasterKondisi);
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
        const filteredData = dataMasterKondisi.filter(
          (entry) =>
            entry.kode_jenis_batu.includes(currValue.toUpperCase()) ||
            entry.nama_jenis_batu.includes(currValue.toUpperCase())
        );
        setDataSource(filteredData);
        setSearch(true);
      }}
    />
  );

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Kondisi",
          dataIndex: "kondisi",
          key: "kondisi",
          align: "center",
        },
        {
          title: "Action",
          dataIndex: "",
          key: "act",
          align: "center",
        },
      ],
    },
  ];

  const dataTable =
    dataSource.length === 0
      ? search
        ? dataSource
        : dataMasterKondisi
      : dataSource;

  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableMasterKondisi;
