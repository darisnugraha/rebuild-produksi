import React from "react";
import { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterWarna from "../../../../application/selectors/masterwarna";
import FormTambahMasterWarna from "./form-master-warna";
import { destroy } from "redux-form";
import {
  deleteMasterWarna,
  getMasterWarnaByID,
  setEditFormMasterWarna,
} from "../../../../application/actions/masterwarna";
import Swal from "sweetalert2";

const TableMasterWarna = () => {
  const dispatch = useDispatch();
  const dataMasterWarna = useSelector(MasterWarna.getAllMasterWarna);
  const visible = useSelector(MasterWarna.getIsVisibleMasterWarna);

  const [dataSource, setDataSource] = useState(dataMasterWarna);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const onDelete = (kode, nama) => {
    Swal.fire({
      title: nama,
      text: "Apakah Anda Yakin Akan Mengahapus Data Ini ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMasterWarna({ id: kode }));
      }
    });
  };

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataMasterWarna.filter(
          (entry) =>
            entry.nama_warna.includes(currValue.toUpperCase()) ||
            entry.kode_warna.includes(currValue.toUpperCase())
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
          title: "Kode Warna",
          dataIndex: "kode_warna",
          key: "kode_warna",
          align: "center",
        },
        {
          title: "Nama Warna",
          dataIndex: "nama_warna",
          key: "nama_warna",
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
                      dispatch(getMasterWarnaByID({ dataID: text._id }));
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text._id, text.nama_warna);
                    }}
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
        : dataMasterWarna
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterWarna
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterWarna"));
          dispatch(setEditFormMasterWarna(false));
        }}
      />
    </>
  );
};

export default TableMasterWarna;
