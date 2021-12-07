import React, { useState } from "react";
import { Space, Table, Button, Input } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import SaldoMurni from "../../../../application/selectors/saldomurni";
import {
  getSaldoMurniByID,
  setAmbilSaldoMurniForm,
  setTambahSaldoMurniForm,
} from "../../../../application/actions/saldomurni";
import FormTambahAmbilSaldoBahan from "./form-tambah-ambil-saldo-bahan";
import { destroy } from "redux-form";

const TableSaldoBahan = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const dataSaldoMurni = useSelector(SaldoMurni.getAllSaldoMurni);

  const [dataSource, setDataSource] = useState(dataSaldoMurni);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const visible = useSelector(SaldoMurni.getIsVisibleSaldoMurni);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataSaldoMurni.filter((entry) =>
          entry.nama_bahan.includes(currValue.toUpperCase())
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
        : dataSaldoMurni
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Bahan",
          dataIndex: "nama_bahan",
          key: "nama_bahan",
          align: "center",
        },
        {
          title: "Berat Stock",
          dataIndex: "saldo_awal",
          key: "saldo_awal",
          align: "center",
          render: (text) => {
            return text.toFixed(3);
          },
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
                        getSaldoMurniByID({
                          dataID: text.nama_bahan,
                          btnType: "ADD",
                        })
                      );
                    }}
                  >
                    TAMBAH
                  </Button>
                  <Button
                    type="primary"
                    htmltype="button"
                    danger
                    onClick={() => {
                      dispatch(
                        getSaldoMurniByID({
                          dataID: text.nama_bahan,
                          btnType: "TAKE",
                        })
                      );
                    }}
                  >
                    AMBIL
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
      <FormTambahAmbilSaldoBahan
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahAmbilSaldoBahan"));
          dispatch(setTambahSaldoMurniForm(false));
          dispatch(setAmbilSaldoMurniForm(false));
        }}
      />
    </>
  );
};

export default TableSaldoBahan;
