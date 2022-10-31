import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterKelompokJenisBahan from "../../../../application/selectors/masterkelompokjenisbahan";
import {
  deleteMasterKelompokJenisBahan,
  getMasterKelompokJenisBahanByID,
  setEditFormMasterKelompokJenisBahan,
} from "../../../../application/actions/masterkelompokjenisbahan";
import FormTambahMasterKelompokJenisBahan from "./form-master-kelompok-jenis-bahan";
import Swal from "sweetalert2";

const TableMasterKelompokJenisBahan = () => {
  const data = useSelector(
    MasterKelompokJenisBahan.getAllMasterKelompokJenisBahan
  );
  const dispatch = useDispatch();
  const visible = useSelector(
    MasterKelompokJenisBahan.getIsVisibleMasterKelompokJenisBahan
  );

  const [dataSource, setDataSource] = useState(data);
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
        dispatch(deleteMasterKelompokJenisBahan({ id: kode }));
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
        const filteredData = data.filter(
          (entry) =>
            entry.nama_kelompok
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.kode_kelompok.toUpperCase().includes(currValue.toUpperCase())
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
          title: "Kode Kelompok Jenis Bahan",
          dataIndex: "kode_kelompok",
          key: "kode_kelompok",
          align: "center",
        },
        {
          title: "Nama Kelompok Jenis bahan",
          dataIndex: "nama_kelompok",
          key: "nama_kelompok",
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
                        getMasterKelompokJenisBahanByID({
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
                      onDelete(text._id, text.nama_kelompok);
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
    dataSource.length === 0 ? (search ? dataSource : data) : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterKelompokJenisBahan
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterKelompokJenisBahan"));
          dispatch(setEditFormMasterKelompokJenisBahan(false));
        }}
      />
    </>
  );
};

export default TableMasterKelompokJenisBahan;
