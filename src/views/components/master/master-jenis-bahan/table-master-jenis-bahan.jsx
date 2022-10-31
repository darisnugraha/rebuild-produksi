import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterJenisBahan from "../../../../application/selectors/masterjenisbahan";
import {
  deleteMasterJenisBahan,
  getMasterJenisBahanByID,
  setEditFormMasterJenisBahan,
} from "../../../../application/actions/masterjenisbahan";
import FormTambahMasterJenisBahan from "./form-master-jenis-bahan";
import Swal from "sweetalert2";

const TableMasterJenisBahan = () => {
  const dataMasterJenisBahan = useSelector(
    MasterJenisBahan.getAllMasterJenisBahan
  );
  const dispatch = useDispatch();
  const visible = useSelector(MasterJenisBahan.getIsVisibleMasterJenisBahan);

  const [dataSource, setDataSource] = useState(dataMasterJenisBahan);
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
        dispatch(deleteMasterJenisBahan({ id: kode }));
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
        const filteredData = dataMasterJenisBahan.filter(
          (entry) =>
            entry.nama_jenis_bahan
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.kode_jenis_bahan
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.kode_warna.toUpperCase().includes(currValue.toUpperCase()) ||
            entry.kadar.toString().includes(currValue.toUpperCase())
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
        // {
        //   title: "Kode Kelompok",
        //   dataIndex: "kode_kelompok",
        //   key: "kode_kelompok",
        //   align: "center",
        // },
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
                        getMasterJenisBahanByID({
                          dataID: text._id,
                        })
                      );
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text._id, text.nama_jenis_bahan);
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
