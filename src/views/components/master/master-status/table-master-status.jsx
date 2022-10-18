import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterStatus from "../../../../application/selectors/masterstatus";
import {
  deleteMasterStatus,
  getMasterStatusByID,
  setEditFormMasterStatus,
} from "../../../../application/actions/masterstatus";
import FormTambahMasterStatus from "./form-master-status";
import { destroy } from "redux-form";
import Swal from "sweetalert2";

const TableMasterStatus = () => {
  const dispatch = useDispatch();
  const dataMasterStatus = useSelector(MasterStatus.getAllMasterStatus);
  const visible = useSelector(MasterStatus.getIsVisibleMasterStatus);

  const [dataSource, setDataSource] = useState(dataMasterStatus);
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
        dispatch(deleteMasterStatus({ id: kode }));
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
        const filteredData = dataMasterStatus.filter(
          (entry) =>
            entry.kode_status_job_order.includes(currValue.toUpperCase()) ||
            entry.nama_status_job_order.includes(currValue.toUpperCase())
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
        : dataMasterStatus
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Kode Status",
          dataIndex: "kode_status_job_order",
          key: "kode_status_job_order",
          align: "center",
        },
        {
          title: "Nama Status",
          dataIndex: "nama_status_job_order",
          key: "nama_status_job_order",
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
                        getMasterStatusByID({
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
                      onDelete(text._id, text.nama_status_job_order);
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
      <FormTambahMasterStatus
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterStatus"));
          dispatch(setEditFormMasterStatus(false));
        }}
      />
    </>
  );
};

export default TableMasterStatus;
