import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table, Button, Divider } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import AbuTukang from "../../../../application/selectors/abutukang";
import { pilihDataTukang } from "../../../../application/actions/abutukang";

const TableAbuTukang = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const dataSetorAbuTukang = useSelector(AbuTukang.getAllAbuTukang);
  const totalAbu = useSelector(AbuTukang.getTotalAbu);
  const total24k = useSelector(AbuTukang.getTotal24K);

  const data = [];
  for (let i = 0; i < dataSetorAbuTukang.length; i++) {
    data.push({
      key: i,
      no_transaksi: dataSetorAbuTukang[i].no_kirim,
      no_spk: dataSetorAbuTukang[i].no_job_order,
      kode_barang: dataSetorAbuTukang[i].kode_barang,
      kode_jenis_bahan: dataSetorAbuTukang[i].kode_jenis_bahan,
      abu: dataSetorAbuTukang[i].abu,
      kadar: dataSetorAbuTukang[i].kadar,
      berat_susut: dataSetorAbuTukang[i].berat_susut,
      karat_24: dataSetorAbuTukang[i].karat_24,
    });
  }

  const [dataSource, setDataSource] = useState(data);
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
        const filteredData = data.filter(
          (entry) =>
            entry.kode_jenis_bahan.includes(currValue.toUpperCase()) ||
            entry.no_spk.includes(currValue.toUpperCase()) ||
            entry.no_transaksi.includes(currValue.toUpperCase()) ||
            entry.kode_barang.includes(currValue.toUpperCase())
        );

        setDataSource(filteredData);
        setSearch(true);
      }}
    />
  );

  const TakeAllData = (
    <Button type="primary" onClick={() => dispatch(pilihDataTukang)}>
      Pilih Data
    </Button>
  );

  const columns = [
    {
      title: TakeAllData,
      align: "left",
      children: [
        {
          title: SearchBar,
          align: "right",
          children: [
            {
              title: "No Transaksi",
              dataIndex: "no_transaksi",
              key: "no_transaksi",
              align: "center",
            },
            {
              title: "No SPK",
              dataIndex: "no_spk",
              key: "no_spk",
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
              title: "Abu",
              dataIndex: "abu",
              key: "abu",
              align: "center",
            },
            {
              title: "Kadar",
              dataIndex: "kadar",
              key: "kadar",
              align: "center",
            },
            {
              title: "24K",
              dataIndex: "karat_24",
              key: "karat_24",
              align: "center",
            },
          ],
        },
      ],
    },
  ];

  const dataTable =
    dataSource.length === 0 ? (search ? dataSource : data) : dataSource;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      localStorage.setItem("data_select_tukang", JSON.stringify(selectedRows));
    },
    getCheckboxProps: (record) => ({
      no_mutasi: record.no_mutasi,
    }),
  };

  return (
    <>
      <Table
        rowSelection={rowSelection}
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
      />
      <Divider orientation="left" style={{ fontSize: "14px" }}>
        Total Data Di Pilih
      </Divider>
      <p>Total Abu : {totalAbu.toFixed(3)}</p>
      <p>Total 24K : {total24k.toFixed(3)}</p>
    </>
  );
};

export default TableAbuTukang;
