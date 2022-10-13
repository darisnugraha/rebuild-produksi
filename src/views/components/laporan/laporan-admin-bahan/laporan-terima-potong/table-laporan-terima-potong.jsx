import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanterimapotong from "../../../../../application/selectors/laporanterimapotong";

const TableLaporanTerimaPotong = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_transaksi",
      key: "no_transaksi",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No Pohon",
      dataIndex: "no_pohon",
      key: "no_pohon",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "nama_jenis_bahan",
      key: "nama_jenis_bahan",
      align: "center",
    },
    {
      title: "Berat Awal",
      dataIndex: "berat_awal",
      key: "berat_awal",
      align: "right",
    },
    {
      title: "Berat Pentolan",
      dataIndex: "berat_pentolan",
      key: "berat_pentolan",
      align: "right",
    },
    {
      title: "Berat Barang",
      dataIndex: "berat_barang",
      key: "berat_barang",
      align: "right",
    },
    {
      title: "Berat Susut",
      dataIndex: "berat_susut",
      key: "berat_susut",
      align: "right",
    },
  ];

  const dataLaporanTerimaPotong = useSelector(
    laporanterimapotong.getAllLaporanTerimaPotong
  );

  return (
    <Table
      dataSource={dataLaporanTerimaPotong}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTerimaPotong
                .reduce((a, b) => a + parseFloat(b.berat_awal), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaPotong
                .reduce((a, b) => a + parseFloat(b.berat_pentolan), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanTerimaPotong
                .reduce((a, b) => a + parseFloat(b.berat_barang), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanTerimaPotong
                .reduce((a, b) => a + parseFloat(b.berat_susut), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTerimaPotong;
