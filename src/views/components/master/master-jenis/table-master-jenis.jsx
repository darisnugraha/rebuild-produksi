import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterJenis from "../../../../application/selectors/masterjenis";
import {
  deleteMasterJenis,
  getMasterJenisByID,
  setEditFormMasterJenis,
} from "../../../../application/actions/masterjenis";
import FormTambahMasterJenis from "./form-master-jenis";
import Swal from "sweetalert2";

const TableMasterJenis = () => {
  const dispatch = useDispatch();
  const dataMasterJenis = useSelector(MasterJenis.getAllMasterJenis);
  const visible = useSelector(MasterJenis.getIsVisibleMasterJenis);

  const [dataSource, setDataSource] = useState(dataMasterJenis);
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
        dispatch(deleteMasterJenis({ id: kode }));
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
                    onClick={() => {
                      dispatch(getMasterJenisByID({ dataID: text._id }));
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text._id, text.nama_jenis);
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
        : dataMasterJenis
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterJenis
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterJenis"));
          dispatch(setEditFormMasterJenis(false));
        }}
      />
    </>
  );
};

export default TableMasterJenis;
