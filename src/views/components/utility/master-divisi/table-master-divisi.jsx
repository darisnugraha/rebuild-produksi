import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterDivisi from "../../../../application/selectors/masterdivisi";
import {
  deleteMasterDivisi,
  getMasterDivisiByID,
  setEditFormMasterDivisi,
} from "../../../../application/actions/masterdivisi";
import FormTambahMasterDivisi from "./form-master-divisi";
import { destroy } from "redux-form";
import Swal from "sweetalert2";

const TableMasterDivisi = () => {
  const dispatch = useDispatch();
  const dataMasterDivisi = useSelector(MasterDivisi.getAllMasterDivisi);

  const [dataSource, setDataSource] = useState(dataMasterDivisi);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const visible = useSelector(MasterDivisi.getIsVisibleMasterDivisi);
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
        dispatch(deleteMasterDivisi({ id: kode }));
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
        const filteredData = dataMasterDivisi.filter(
          (entry) =>
            entry.kode_divisi.includes(currValue.toUpperCase()) ||
            entry.nama_divisi.includes(currValue.toUpperCase())
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
          title: "Kode Divisi",
          dataIndex: "kode_divisi",
          key: "kode_divisi",
          align: "center",
        },
        {
          title: "Nama Divisi",
          dataIndex: "nama_divisi",
          key: "nama_divisi",
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
                        getMasterDivisiByID({
                          dataID: text.kode_divisi,
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
                      onDelete(text.kode_divisi, text.nama_divisi);
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
        : dataMasterDivisi
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterDivisi
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterDivisi"));
          dispatch(setEditFormMasterDivisi(false));
        }}
      />
    </>
  );
};

export default TableMasterDivisi;
