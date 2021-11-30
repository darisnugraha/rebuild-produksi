import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterJenis from "../../../../application/selectors/masterjenis";

const TableMasterJenis = () => {
  const dataMasterJenis = useSelector(MasterJenis.getAllMasterJenis);

  const [dataSource, setDataSource] = useState(dataMasterJenis);
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
        const filteredData = dataMasterJenis.filter(
          (entry) =>
            entry.nama_jenis.includes(currValue.toUpperCase()) ||
            entry.kode_jenis.includes(currValue.toUpperCase())
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
          title: "Kode Jenis",
          dataIndex: "kode_jenis",
          key: "kode_jenis",
          align: "center",
        },
        {
          title: "Nama Jenis",
          dataIndex: "nama_jenis",
          key: "nama_jenis",
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

  const dataTable = dataSource.length === 0 ? search ? dataSource : dataMasterJenis : dataSource;

  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableMasterJenis;
