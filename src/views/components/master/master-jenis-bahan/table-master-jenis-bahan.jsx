import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterJenisBahan from "../../../../application/selectors/masterjenisbahan";
import {
  getMasterJenisBahanByID,
  setEditFormMasterJenisBahan,
} from "../../../../application/actions/masterjenisbahan";
import FormTambahMasterJenisBahan from "./form-master-jenis-bahan";

const TableMasterJenisBahan = () => {
  const dataMasterJenisBahan = useSelector(
    MasterJenisBahan.getAllMasterJenisBahan
  );
  const dispatch = useDispatch();
  const visible = useSelector(MasterJenisBahan.getIsVisibleMasterJenisBahan);

  const [dataSource, setDataSource] = useState(dataMasterJenisBahan);
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
        const filteredData = dataMasterJenisBahan.filter(
          (entry) =>
            entry.nama_jenis_bahan.includes(currValue.toUpperCase()) ||
            entry.kode_jenis_bahan.includes(currValue.toUpperCase()) ||
            entry.kode_warna.includes(currValue.toUpperCase()) ||
            entry.kadar.includes(currValue.toUpperCase())
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
          title: "Kode Jenis Bahan",
          dataIndex: "kode_jenis_bahan",
          key: "kode_jenis_bahan",
          align: "center",
        },
        {
          title: "Nama Jenis bahan",
          dataIndex: "nama_jenis_bahan",
          key: "nama_jenis_bahan",
          align: "center",
        },
        {
          title: "Kode Warna",
          dataIndex: "kode_warna",
          key: "kode_warna",
          align: "center",
        },
        {
          title: "Kadar",
          dataIndex: "kadar",
          key: "kadar",
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
                    onClick={() => {
                      dispatch(
                        getMasterJenisBahanByID({ dataID: text.kode_jenis_bahan })
                      );
                    }}
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
        : dataMasterJenisBahan
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterJenisBahan
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterJenisBahan"));
          dispatch(setEditFormMasterJenisBahan(false));
        }}
      />
    </>
  );
};

export default TableMasterJenisBahan;
