import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import { useSelector } from "react-redux";
import terimabatuproduksi from "../../../../application/selectors/terimabatuproduksi";
import getLocal from "../../../../infrastructure/services/local/get-local";
import { useDispatch } from "react-redux";
import { getKirimBatuByLocal } from "../../../../application/actions/terimabatuproduksi";

const TableTerimaBatu = () => {
  const dispatch = useDispatch();
  let dataTerimaBatuProduksi = useSelector(
    terimabatuproduksi.getAllTerimaBatuProduksi
  );

  const [dataSource, setDataSource] = useState(dataTerimaBatuProduksi);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const dataLocal = getLocal("produksiterimabatu");
    dispatch(getKirimBatuByLocal(dataLocal));
  }, [dispatch]);

  const SearchBar = (
    <Input
      placeholder="Search Bar"
      value={value}
      style={{ width: "20%" }}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = dataTerimaBatuProduksi.filter(
          (entry) =>
            entry.no_job_order.includes(currValue.toUpperCase()) ||
            entry.no_kirim_batu.includes(currValue.toUpperCase()) ||
            entry.kode_batu.includes(currValue.toUpperCase())
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
        : dataTerimaBatuProduksi
      : dataSource;

  const columns = [
    {
      title: SearchBar,
      align: "right",
      children: [
        {
          title: "No Kirim Batu",
          dataIndex: "no_kirim_batu",
          key: "no_kirim_batu",
          align: "center",
        },
        {
          title: "No Job Order",
          dataIndex: "no_job_order",
          key: "no_job_order",
          align: "center",
        },
        {
          title: "Kode Barang",
          dataIndex: "kode_barang",
          key: "kode_barang",
          align: "center",
        },
        {
          title: "Jenis Bahan",
          dataIndex: "kode_jenis_bahan",
          key: "kode_jenis_bahan",
          align: "center",
        },
        {
          title: "Kode Batu",
          dataIndex: "kode_batu",
          key: "kode_batu",
          align: "center",
        },
        {
          title: "Jumlah Batu",
          dataIndex: "stock_out",
          key: "stock_out",
          align: "center",
        },
        {
          title: "Berat Batu",
          dataIndex: "berat_out",
          key: "berat_out",
          align: "center",
        },
      ],
    },
  ];
  return (
    <Table
      dataSource={dataTable}
      columns={columns}
      scroll={{ x: 500, y: 1500 }}
    />
  );
};

export default TableTerimaBatu;
