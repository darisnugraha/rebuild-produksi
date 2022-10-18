import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterBillOfMaterials from "../../../../application/selectors/masterbillofmaterials";
import {
  deleteMasterBillOfMaterials,
  getMasterBillOfMaterialsByID,
  setDetailBahan,
  setEditFormMasterBillOfMaterials,
} from "../../../../application/actions/masterbillofmaterials";
import FormTambahBillOfMaterials from "./form-master-bill-of-materials";
import Swal from "sweetalert2";

const TableMasterBillOfMaterialss = () => {
  const data = useSelector(MasterBillOfMaterials.getAllMasterBillOfMaterials);
  const dispatch = useDispatch();
  const visible = useSelector(
    MasterBillOfMaterials.getIsVisibleMasterBillOfMaterials
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
        dispatch(deleteMasterBillOfMaterials({ id: kode }));
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
        const filteredData = data.filter((entry) =>
          entry.kode_kelompok.includes(currValue.toUpperCase())
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
                        getMasterBillOfMaterialsByID({
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
                      onDelete(text._id, text.kode_kelompok);
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

  const expandedRowRenderTable = (id) => {
    const columns = [
      { title: "Kode Bahan", dataIndex: "kode_bahan", key: "kode_bahan" },
      { title: "Persentase", dataIndex: "persentase", key: "persentase" },
    ];

    const data = [];
    for (let i = 0; i < dataTable.length; ++i) {
      for (let index = 0; index < dataTable[i].detail_bahan.length; index++) {
        if (dataTable[i]._id === id) {
          data.push({
            key: index,
            _id: dataTable[i].detail_bahan[index]._id,
            kode_bahan: dataTable[i].detail_bahan[index].kode_bahan,
            persentase: dataTable[i].detail_bahan[index].persentase,
          });
        }
      }
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => expandedRowRenderTable(record._id),
        }}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahBillOfMaterials
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahBillOfMaterials"));
          dispatch(setEditFormMasterBillOfMaterials(false));
          dispatch(setDetailBahan([]));
          localStorage.removeItem("BahanDetail");
        }}
      />
    </>
  );
};

export default TableMasterBillOfMaterialss;
