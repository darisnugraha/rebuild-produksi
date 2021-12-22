import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterKondisi from "../../../../application/selectors/masterkondisi";
import FormTambahMasterKondisi from "./form-master-kondisi";
import {
  deleteMasterKondisi,
  getMasterKondisiByID,
  setEditFormMasterKondisi,
} from "../../../../application/actions/masterkondisi";
import { destroy } from "redux-form";
import Swal from "sweetalert2";

const TableMasterKondisi = () => {
  const dispatch = useDispatch();
  const dataMasterKondisi = useSelector(MasterKondisi.getAllMasterKondisi);

  const [dataSource, setDataSource] = useState(dataMasterKondisi);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const visible = useSelector(MasterKondisi.getIsVisibleMasterKondisi);
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
        dispatch(deleteMasterKondisi({ id: nama }));
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
        const filteredData = dataMasterKondisi.filter((entry) =>
          entry.kondisi.includes(currValue.toUpperCase())
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
          title: "Kondisi",
          dataIndex: "nama_kondisi",
          key: "nama_kondisi",
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
                        getMasterKondisiByID({
                          dataID: text.kondisi,
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
                      onDelete(text.kode_kondisi, text.nama_kondisi);
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
        : dataMasterKondisi
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterKondisi
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterKondisi"));
          dispatch(setEditFormMasterKondisi(false));
        }}
      />
    </>
  );
};

export default TableMasterKondisi;
