import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table, Button } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import AbuTukangPotong from "../../../../application/selectors/abutukangpotong";

const TableAbuTukanPotong = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const dataSetorAbuPotong = useSelector(
    AbuTukangPotong.getAllSetorOutstandPotong
  );

  const data = [];
  for (let i = 0; i < dataSetorAbuPotong.length; i++) {
    data.push({
      key: i,
      no_mutasi: dataSetorAbuPotong[i].no_mutasi,
      pohon: dataSetorAbuPotong[i].pohon,
      kode_jenis_bahan: dataSetorAbuPotong[i].kode_jenis_bahan,
      kadar: dataSetorAbuPotong[i].kadar,
      berat_pentolan: dataSetorAbuPotong[i].berat_pentolan,
      berat_barang: dataSetorAbuPotong[i].berat_barang,
      berat: dataSetorAbuPotong[i].berat,
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

  const TakeAllData = <Button type="primary">Ambil Semua Data</Button>;

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
              title: "Kadar",
              dataIndex: "kadar",
              key: "kadar",
              align: "center",
            },
            {
              title: "24K",
              key: "24k",
              align: "center",
              render: (text) => {
                let beratsisa =
                  parseFloat(text.berat) -
                  (parseFloat(text.berat_pentolan) +
                    parseFloat(text.berat_barang));
                let k24 = (text.kadar / 100) * beratsisa;
                return k24.toFixed(3);
              },
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
    </>
  );
};

export default TableAbuTukanPotong;
