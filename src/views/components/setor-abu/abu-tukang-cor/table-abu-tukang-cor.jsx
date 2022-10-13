import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table, Button, Divider } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import AbuTukangCOR from "../../../../application/selectors/abutukangcor";
import { pilihDataCasting } from "../../../../application/actions/abutukangcor";

const TableAbuTukangCOR = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const dataSetorOutstandCasting = useSelector(
    AbuTukangCOR.getAllSetorOutstandCasting
  );
  const totalAbu = useSelector(AbuTukangCOR.getTotalAbu);
  const total24k = useSelector(AbuTukangCOR.getTotal24K);

  const data = [];
  for (let i = 0; i < dataSetorOutstandCasting.length; i++) {
    data.push({
      key: i,
      no_mutasi: dataSetorOutstandCasting[i].no_mutasi,
      pohon: dataSetorOutstandCasting[i].no_pohon,
      kode_jenis_bahan: dataSetorOutstandCasting[i].kode_jenis_bahan,
      kadar: dataSetorOutstandCasting[i].kadar,
      berat_casting: dataSetorOutstandCasting[i].berat_casting,
      berat: dataSetorOutstandCasting[i].berat,
      karat_24: dataSetorOutstandCasting[i].karat_24.toFixed(3),
      abu: dataSetorOutstandCasting[i].abu,
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
    <Button type="primary" onClick={() => dispatch(pilihDataCasting)}>
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
              dataIndex: "berat",
              key: "berat",
              align: "center",
            },
            {
              title: "Berat Terima",
              dataIndex: "berat_casting",
              key: "berat_casting",
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
              key: "24k",
              dataIndex: "karat_24",
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
      localStorage.setItem("data_select", JSON.stringify(selectedRows));
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
      <p>Total Abu : {totalAbu}</p>
      <p>Total 24K : {total24k}</p>
    </>
  );
};

export default TableAbuTukangCOR;
