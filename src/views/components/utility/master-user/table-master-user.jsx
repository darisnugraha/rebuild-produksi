import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterUser from "../../../../application/selectors/masteruser";
import {
  deleteMasterUser,
  getMasterUserByID,
  setEditFormMasterUser,
} from "../../../../application/actions/masteruser";
import FormTambahMasterUser from "./form-master-user";
import { destroy } from "redux-form";
import Swal from "sweetalert2";

const TableMasterUser = () => {
  const dispatch = useDispatch();
  const dataMasterUser = useSelector(MasterUser.getAllMasterUser);

  const [dataSource, setDataSource] = useState(dataMasterUser);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const visible = useSelector(MasterUser.getIsVisibleMasterUser);
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
        dispatch(deleteMasterUser({ id: kode }));
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
        const filteredData = dataMasterUser.filter(
          (entry) =>
            entry.user_id.includes(currValue.toUpperCase()) ||
            entry.nama_lkp.includes(currValue.toUpperCase())
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
          title: "User ID",
          dataIndex: "user_id",
          key: "user_id",
          align: "center",
        },
        {
          title: "User Name",
          dataIndex: "user_name",
          key: "user_name",
          align: "center",
        },
        {
          title: "Type",
          dataIndex: "level",
          key: "level",
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
                        getMasterUserByID({
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
                      onDelete(text._id, text.user_id);
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
        : dataMasterUser
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterUser
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterUser"));
          dispatch(setEditFormMasterUser(false));
        }}
      />
    </>
  );
};

export default TableMasterUser;
