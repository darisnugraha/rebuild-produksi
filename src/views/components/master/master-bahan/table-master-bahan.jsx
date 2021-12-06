import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterBahan from "../../../../application/selectors/masterbahan";
import {
  getMasterBahanByID,
  setEditFormMasterBahan,
} from "../../../../application/actions/masterbahan";
import FormTambahMasterBahan from "./form-master-bahan";
import { destroy } from "redux-form";

const TableMasterBahan = () => {
  const dispatch = useDispatch();
  const dataMasterBahan = useSelector(MasterBahan.getAllMasterBahan);

  const [dataSource, setDataSource] = useState(dataMasterBahan);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const visible = useSelector(MasterBahan.getIsVisibleMasterBahan);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataMasterBahan.filter(
          (entry) =>
            entry.kode_bahan.includes(currValue.toUpperCase()) ||
            entry.nama_bahan.includes(currValue.toUpperCase())
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
          title: "Nama Bahan",
          dataIndex: "nama_bahan",
          key: "nama_bahan",
          align: "center",
        },
        {
          title: "Kadar",
          dataIndex: "kadar",
          key: "kadar",
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
                        getMasterBahanByID({
                          dataID: text.kode_bahan,
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
                    // onClick={}
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
        : dataMasterBahan
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterBahan
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterBahan"));
          dispatch(setEditFormMasterBahan(false));
        }}
      />
    </>
  );
};

export default TableMasterBahan;
