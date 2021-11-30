import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterBatu from "../../../../application/selectors/masterbatu";

const TableMasterBatu = () => {
  const dataMasterBatu = useSelector(MasterBatu.getAllMasterBatu);

  const [dataSource, setDataSource] = useState(dataMasterBatu);
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
        const filteredData = dataMasterBatu.filter(
          (entry) =>
            entry.kode_batu.includes(currValue.toUpperCase()) ||
            entry.nama_batu.includes(currValue.toUpperCase()) ||
            entry.kode_jenis_batu.includes(currValue.toUpperCase()) ||
            entry.kode_cutting_batu.includes(currValue.toUpperCase()) ||
            entry.ukuran.includes(currValue.toUpperCase()) ||
            entry.berat_batu.includes(currValue.toUpperCase())
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
          title: "Kode Batu",
          dataIndex: "kode_batu",
          key: "kode_batu",
          align: "center",
        },
        {
          title: "Nama Batu",
          dataIndex: "nama_batu",
          key: "nama_batu",
          align: "center",
        },
        {
          title: "Ukuran",
          dataIndex: "ukuran",
          key: "ukuran",
          align: "center",
        },
        {
          title: "Jenis Batu",
          dataIndex: "kode_jenis_batu",
          key: "kode_jenis_batu",
          align: "center",
        },
        {
          title: "Cutting Batu",
          dataIndex: "kode_cutting_batu",
          key: "kode_cutting_batu",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_batu",
          key: "berat_batu",
          align: "center",
        },
        {
          title: "Action",
          key: "act",
          align: "center",
          render: (text) => {
            return (
              <>
                <Space>
                  <Button
                    className="ant-btn-warning"
                    htmltype="button"
                    danger
                    // onClick={}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    // onClick={}
                  >
                    DELETE
                  </Button>
                </Space>
              </>
            );
          },
        },
      ],
    },
  ];

  const dataTable =
    dataSource.length === 0
      ? search
        ? dataSource
        : dataMasterBatu
      : dataSource;

  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableMasterBatu;
