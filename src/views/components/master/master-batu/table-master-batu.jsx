import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterBatu from "../../../../application/selectors/masterbatu";
import FormTambahMasterBatu from "./form-master-batu";
import {
  deleteMasterBatu,
  getMasterBatuByID,
  setEditFormMasterBatu,
} from "../../../../application/actions/masterbatu";
import Swal from "sweetalert2";

const TableMasterBatu = () => {
  const dispatch = useDispatch();
  const dataMasterBatu = useSelector(MasterBatu.getAllMasterBatu);
  const visible = useSelector(MasterBatu.getIsVisibleMasterBatu);

  const [dataSource, setDataSource] = useState(dataMasterBatu);
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
        dispatch(deleteMasterBatu({ id: kode }));
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
        const filteredData = dataMasterBatu.filter(
          (entry) =>
            entry.kode_batu.includes(currValue.toUpperCase()) ||
            entry.nama_batu.includes(currValue.toUpperCase()) ||
            entry.kode_jenis_batu.includes(currValue.toUpperCase()) ||
            entry.kode_cutting_batu.includes(currValue.toUpperCase()) ||
            entry.ukuran.includes(currValue.toUpperCase())
          // entry.berat_batu.includes(currValue.toUpperCase())
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
          title: "Sintetis",
          dataIndex: "status_sintetis",
          key: "status_sintetis",
          align: "center",
          render: (text) => {
            if (text) {
              return "SINTETIS";
            } else {
              return "TIDAK SINTETIS";
            }
          },
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
                      dispatch(getMasterBatuByID({ dataID: text._id }));
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text._id, text.nama_batu);
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
        : dataMasterBatu
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterBatu
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterBatu"));
          dispatch(setEditFormMasterBatu(false));
        }}
      />
    </>
  );
};

export default TableMasterBatu;
