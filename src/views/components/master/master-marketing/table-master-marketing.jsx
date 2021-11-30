import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterMarketing from "../../../../application/selectors/mastermarketing";

const TableMasterMarketing = () => {
  const dataMasterMarketing = useSelector(
    MasterMarketing.getAllMasterMarketing
  );

  const [dataSource, setDataSource] = useState(dataMasterMarketing);
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
        const filteredData = dataMasterMarketing.filter(
          (entry) =>
            entry.kode_marketing.includes(currValue.toUpperCase()) ||
            entry.nama_marketing.includes(currValue.toUpperCase()) ||
            entry.no_hp.includes(currValue.toUpperCase()) ||
            entry.email.includes(currValue.toUpperCase())
        );
        setDataSource(filteredData);
        setSearch(true);
      }}
    />
  );

  const columns = [
    {
      title: "Kode Marketing",
      dataIndex: "kode_marketing",
      key: "kode_marketing",
      align: "center",
    },
    {
      title: "Nama Marketing",
      dataIndex: "nama_marketing",
      key: "nama_marketing",
      align: "center",
    },
    {
      title: "No HP",
      dataIndex: "no_hp",
      key: "no_hp",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
  ];

  const dataTable =
    dataSource.length === 0
      ? search
        ? dataSource
        : dataMasterMarketing
      : dataSource;

  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableMasterMarketing;
