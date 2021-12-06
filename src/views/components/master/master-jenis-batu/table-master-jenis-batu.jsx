import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import { destroy } from "redux-form";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import MasterJenisBatu from "../../../../application/selectors/masterjenisbatu";
import FormTambahMasterJenisBatu from "./form-master-jenis-batu";
import {
  getMasterJenisBatuByID,
  setEditFormMasterJenisBatu,
} from "../../../../application/actions/masterjenisbatu";

const TableMasterJenisBatu = () => {
  const dispatch = useDispatch();
  const dataMasterJenisBatu = useSelector(
    MasterJenisBatu.getAllMasterJenisBatu
  );

  const visible = useSelector(MasterJenisBatu.getIsVisibleMasterJenisBatu);

  const [dataSource, setDataSource] = useState(dataMasterJenisBatu);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataMasterJenisBatu.filter(
          (entry) =>
            entry.kode_jenis_batu.includes(currValue.toUpperCase()) ||
            entry.nama_jenis_batu.includes(currValue.toUpperCase())
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
          title: "Kode Jenis Batu",
          dataIndex: "kode_jenis_batu",
          key: "kode_jenis_batu",
          align: "center",
        },
        {
          title: "Nama Jenis Batu",
          dataIndex: "nama_jenis_batu",
          key: "nama_jenis_batu",
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
                        getMasterJenisBatuByID({
                          dataID: text.kode_jenis_batu,
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
        : dataMasterJenisBatu
      : dataSource;

  return (
    <>
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormTambahMasterJenisBatu
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahMasterJenisBatu"));
          dispatch(setEditFormMasterJenisBatu(false));
        }}
      />
    </>
  );
};

export default TableMasterJenisBatu;
