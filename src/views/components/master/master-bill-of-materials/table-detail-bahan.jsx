import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterBillOfMaterials from "../../../../application/selectors/masterbillofmaterials";
import {
  deleteDetailBahan,
  editDetailBahan,
  setIsEditDetailBahan,
  //   setEditFormDetailBahan,
  //   deleteMasterBillOfMaterials,
  //   getMasterBillOfMaterialsByID,
  setVisibleDetailBahan,
} from "../../../../application/actions/masterbillofmaterials";
import FormTambahDetailBahan from "./form-add-detail-bahan";
import Swal from "sweetalert2";

const TableDetailBahan = () => {
  const data = useSelector(MasterBillOfMaterials.getDataDetailBahan);
  const dispatch = useDispatch();
  const visible = useSelector(MasterBillOfMaterials.getIsVisibleDetailBahan);

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
        dispatch(deleteDetailBahan({ id: kode }));
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
            entry.kode_bahan.includes(currValue.toUpperCase()) ||
            entry.persentase.includes(currValue.toUpperCase())
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
          title: "Kode Bahan",
          dataIndex: "kode_bahan",
          key: "kode_bahan",
          align: "center",
        },
        {
          title: "Persentase",
          dataIndex: "persentase",
          key: "persentase",
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
                      dispatch(editDetailBahan({ id: text.id }));
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      onDelete(text.id, text.kode_bahan);
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
      <Button
        type="primary"
        onClick={() => {
          dispatch(setVisibleDetailBahan(true));
        }}
      >
        + Tambah Detail Bahan
      </Button>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
        style={{ marginTop: 10 }}
      />
      <FormTambahDetailBahan
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahDetailBahan"));
          dispatch(setVisibleDetailBahan(false));
          dispatch(setIsEditDetailBahan(false));
        }}
      />
    </>
  );
};

export default TableDetailBahan;
