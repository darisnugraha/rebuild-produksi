import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input, Space, Table } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterOriginal from "../../../application/selectors/masteroriginal";
import Swal from "sweetalert2";
import FormMasterOriginal from "./form-master-original";
import {
  getMasterOriginalById,
  setEditFormMasterOriginal,
} from "../../../application/actions/masteroriginal";
import { destroy } from "redux-form";
import { useDispatch } from "react-redux";

const TableMasterOriginal = () => {
  const dispatch = useDispatch();
  const dataMasterOriginal = useSelector(MasterOriginal.getAllMasterOriginal);
  const visible = useSelector(MasterOriginal.getIsVisibleMasterOriginal);

  const [dataSource, setDataSource] = useState(dataMasterOriginal);
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
        // dispatch(deleteMasterUkuran({ id: kode }));
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
                      dispatch(getMasterOriginalById({ id: text._id }));
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text._id, text.nama_barang);
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
  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormMasterOriginal
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterOriginal"));
          dispatch(setEditFormMasterOriginal(false));
        }}
      />
    </>
  );
};

export default TableMasterOriginal;
