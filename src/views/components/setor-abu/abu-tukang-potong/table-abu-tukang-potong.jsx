import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table, Button, Divider } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import AbuTukangPotong from "../../../../application/selectors/abutukangpotong";
import { pilihDataPotong } from "../../../../application/actions/abutukangpotong";

const TableAbuTukanPotong = () => {
  const dispatch = useDispatch();
  const dataSetorAbuPotong = useSelector(
    AbuTukangPotong.getAllSetorOutstandPotong
  );
  const totalAbu = useSelector(AbuTukangPotong.getTotalAbu);
  const total24k = useSelector(AbuTukangPotong.getTotal24K);

  const data = [];
  for (let i = 0; i < dataSetorAbuPotong.length; i++) {
    data.push({
      key: i,
      no_mutasi: dataSetorAbuPotong[i].no_mutasi,
      pohon: dataSetorAbuPotong[i].no_pohon,
      kode_jenis_bahan: dataSetorAbuPotong[i].kode_jenis_bahan,
      kadar: dataSetorAbuPotong[i].kadar,
      berat_pentolan: dataSetorAbuPotong[i].berat_pentolan,
      berat_barang: dataSetorAbuPotong[i].berat_barang,
      berat_casting: dataSetorAbuPotong[i].berat_casting,
      abu: dataSetorAbuPotong[i].abu,
      karat_24: dataSetorAbuPotong[i].karat_24,
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
            entry.no_mutasi.includes(currValue.toUpperCase()) ||
            entry.pohon.includes(currValue.toUpperCase())
        );

        setDataSource(filteredData);
        setSearch(true);
      }}
    />
  );

  const TakeAllData = (
    <Button type="primary" onClick={() => dispatch(pilihDataPotong)}>
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
              title: "No Pembuatan Bahan",
              dataIndex: "no_mutasi",
              key: "no_mutasi",
              align: "center",
            },
            {
              title: "Pohon",
              dataIndex: "pohon",
              key: "pohon",
              align: "center",
            },
            {
              title: "Jenis Bahan",
              dataIndex: "kode_jenis_bahan",
              key: "kode_jenis_bahan",
              align: "center",
            },
            {
              title: "Berat Awal",
              dataIndex: "berat_casting",
              key: "berat_casting",
              align: "center",
            },
            {
              title: "Berat Pentolan",
              dataIndex: "berat_pentolan",
              key: "berat_pentolan",
              align: "center",
            },
            {
              title: "Berat Barang",
              dataIndex: "berat_barang",
              key: "berat_barang",
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
              key: "24k",
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
      localStorage.setItem("data_select_potong", JSON.stringify(selectedRows));
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
      <p>Total Abu : {parseFloat(totalAbu).toFixed(3)}</p>
      <p>Total 24K : {parseFloat(total24k).toFixed(3)}</p>
    </>
  );
};

export default TableAbuTukanPotong;
