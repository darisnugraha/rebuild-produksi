import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterMarketing from "../../../../application/selectors/mastermarketing";
import {
  deleteMasterMarketing,
  getMasterMarketingByID,
  setEditFormMasterMarketing,
} from "../../../../application/actions/mastermarketing";
import FormTambahMasterMarketing from "./form-master-marketing";
import Swal from "sweetalert2";

const TableMasterMarketing = () => {
  const dispatch = useDispatch();
  const dataMasterMarketing = useSelector(
    MasterMarketing.getAllMasterMarketing
  );
  const visible = useSelector(MasterMarketing.getIsVisibleMasterMarketing);

  const [dataSource, setDataSource] = useState(dataMasterMarketing);
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
        dispatch(deleteMasterMarketing({ id: kode }));
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
        const filteredData = dataMasterMarketing.filter(
          (entry) =>
            entry.kode_marketing
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.nama_marketing
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.no_hp.includes(currValue.toUpperCase()) ||
            entry.email.toUpperCase().includes(currValue.toUpperCase())
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
          title: "Kode Marketing",
          dataIndex: "kode_marketing",
          key: "kode_marketing",
          align: "center",
        },
        {
          title: "Nama Marketing",
          dataIndex: "nama_marketing",
          key: "nama_marketing",
          align: "center",
        },
        {
          title: "No HP",
          dataIndex: "no_hp",
          key: "no_hp",
          align: "center",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
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
                        getMasterMarketingByID({
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
                      onDelete(text._id, text.nama_marketing);
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
        : dataMasterMarketing
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterMarketing
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterMarketing"));
          dispatch(setEditFormMasterMarketing(false));
        }}
      />
    </>
  );
};

export default TableMasterMarketing;
