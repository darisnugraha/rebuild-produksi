import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterCustomer from "../../../../application/selectors/mastercustomer";
import FormTambahMasterCustomer from "./form-master-customer";
import {
  deleteMasterCustomer,
  getMasterCustomerByID,
  setEditFormMasterCustomer,
} from "../../../../application/actions/mastercustomer";
import Swal from "sweetalert2";

const TableMasterCustomer = () => {
  const dispatch = useDispatch();
  const visible = useSelector(MasterCustomer.getIsVisibleMasterCustomer);
  const dataMasterCustomer = useSelector(MasterCustomer.getAllMasterCustomer);

  const [dataSource, setDataSource] = useState(dataMasterCustomer);
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
        dispatch(deleteMasterCustomer({ id: kode }));
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
        const filteredData = dataMasterCustomer.filter(
          (entry) =>
            entry.kode_customer.includes(currValue.toUpperCase()) ||
            entry.nama_toko.includes(currValue.toUpperCase()) ||
            entry.nama_customer.includes(currValue.toUpperCase()) ||
            entry.alamat.includes(currValue.toUpperCase()) ||
            entry.no_hp.includes(currValue.toUpperCase()) ||
            entry.email.includes(currValue.toUpperCase()) ||
            entry.negara.includes(currValue.toUpperCase()) ||
            entry.lokasi.includes(currValue.toUpperCase())
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
        : dataMasterCustomer
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Kode Customer",
          dataIndex: "kode_customer",
          key: "kode_customer",
          align: "center",
        },
        {
          title: "Nama Customer",
          dataIndex: "nama_customer",
          key: "nama_customer",
          align: "center",
        },
        {
          title: "Nama Toko",
          dataIndex: "nama_toko",
          key: "nama_toko",
          align: "center",
        },
        {
          title: "Alamat",
          dataIndex: "alamat",
          key: "alamat",
          align: "center",
        },
        {
          title: "No Hp",
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
          title: "Negara",
          dataIndex: "negara",
          key: "negara",
          align: "center",
        },
        {
          title: "Type",
          dataIndex: "lokasi",
          key: "lokasi",
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
                        getMasterCustomerByID({
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
                      onDelete(text._id, text.nama_customer);
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
      <FormTambahMasterCustomer
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterCustomer"));
          dispatch(setEditFormMasterCustomer(false));
        }}
      />
    </>
  );
};

export default TableMasterCustomer;
