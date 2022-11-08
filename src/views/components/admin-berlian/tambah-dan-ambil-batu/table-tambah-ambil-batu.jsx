import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
// import MasterBatu from "../../../../application/selectors/masterbatu";
import TambahAmbilBatu from "../../../../application/selectors/tambahambilbatu";
import {
  countBeratTambahAmbilBatu,
  getTambahAmbilBatuByID,
  setAmbilBatuForm,
  setTambahBatuForm,
} from "../../../../application/actions/tambahambilbatu";
import FormTambahAmbilBatu from "./form-tambah-ambil-batu";
import { destroy } from "redux-form";

const TableMasterTambahAmbilBatu = () => {
  const dispatch = useDispatch();
  const dataMasterBatu = useSelector(TambahAmbilBatu.getAllTambahAmbilBatu);

  const [dataSource, setDataSource] = useState(dataMasterBatu);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const visible = useSelector(TambahAmbilBatu.getIsVisibleTambahAmbilBatu);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataMasterBatu.filter(
          (entry) =>
            entry.kode_batu.toUpperCase().includes(currValue.toUpperCase()) ||
            entry.berat
              .toString()
              .toUpperCase()
              .includes(currValue.toUpperCase()) ||
            entry.jumlah
              .toString()
              .toUpperCase()
              .includes(currValue.toUpperCase())
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
        : dataMasterBatu
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "Kode Batu",
          dataIndex: "kode_batu",
          key: "kode_batu",
          align: "center",
        },
        {
          title: "Jumlah Batu",
          dataIndex: "jumlah",
          key: "jumlah",
          align: "center",
        },
        {
          title: "Berat Batu",
          dataIndex: "berat",
          key: "berat",
          align: "center",
          render: (text, row) => {
            if (row.status_sintetis) {
              return `${text} Gram`;
            } else {
              return `${text} Carat`;
            }
          },
        },
        // {
        //   title: "Nama Batu",
        //   dataIndex: "nama_batu",
        //   key: "nama_batu",
        //   align: "center",
        // },
        // {
        //   title: "Ukuran",
        //   dataIndex: "ukuran",
        //   key: "ukuran",
        //   align: "center",
        // },
        // {
        //   title: "Jenis Batu",
        //   dataIndex: "kode_jenis_batu",
        //   key: "kode_jenis_batu",
        //   align: "center",
        // },
        // {
        //   title: "Cuttin Batu",
        //   dataIndex: "kode_cutting_batu",
        //   key: "kode_cutting_batu",
        //   align: "center",
        // },
        // {
        //   title: "Berat",
        //   dataIndex: "berat_batu",
        //   key: "berat_batu",
        //   align: "center",
        // },
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
                        getTambahAmbilBatuByID({
                          dataID: text._id,
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
                        getTambahAmbilBatuByID({
                          dataID: text._id,
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
      <FormTambahAmbilBatu
        visible={visible}
        onCreate={() => {
          console.log("test");
        }}
        onCancel={() => {
          dispatch(destroy("FormTambahAmbilBatu"));
          dispatch(setTambahBatuForm(false));
          dispatch(setAmbilBatuForm(false));
          dispatch(countBeratTambahAmbilBatu({ berat: 0 }));
        }}
      />
    </>
  );
};

export default TableMasterTambahAmbilBatu;
