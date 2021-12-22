import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterUkuran from "../../../../application/selectors/masterukuran";
import {
  deleteMasterUkuran,
  getMasterUkuranByID,
  setEditFormMasterUkuran,
} from "../../../../application/actions/masterukuran";
import FormTambahMasterUkuran from "./form-master-ukuran";
import { destroy } from "redux-form";
import Swal from "sweetalert2";

const TableMasterUkuran = () => {
  const dispatch = useDispatch();
  const dataMasterUkuran = useSelector(MasterUkuran.getAllMasterUkuran);
  const visible = useSelector(MasterUkuran.getIsVisibleMasterUkuran);

  const [dataSource, setDataSource] = useState(dataMasterUkuran);
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
        dispatch(deleteMasterUkuran({ id: kode }));
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
        const filteredData = dataMasterUkuran.filter((entry) =>
          entry.nama_ukuran.includes(currValue.toUpperCase())
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
        : dataMasterUkuran
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Ukuran",
          dataIndex: "nama_ukuran",
          key: "nama_ukuran",
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
                        getMasterUkuranByID({
                          dataID: text.kode_ukuran,
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
                      onDelete(text.nama_ukuran, text.nama_ukuran);
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
      <FormTambahMasterUkuran
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterUkuran"));
          dispatch(setEditFormMasterUkuran(false));
        }}
      />
    </>
  );
};

export default TableMasterUkuran;
