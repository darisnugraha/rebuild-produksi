import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporankirimjoadmin from "../../../../../application/selectors/laporankirimjoadmin";

const TableLaporanKirimJoAdmin = () => {
  const columns = [
    {
      title: "Tgl Kirim",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No SPK",
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
      title: "Divisi Tujuan",
      dataIndex: "tujuan_divisi",
      key: "tujuan_divisi",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah Kirim",
      dataIndex: "stock_out",
      key: "stock_out",
      align: "right",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_out",
      key: "berat_out",
      align: "right",
    },
    {
      title: "Berat Susut",
      dataIndex: "berat_susut",
      key: "berat_susut",
      align: "right",
    },
    {
      title: "Kadar",
      dataIndex: "kadar",
      key: "kadar",
      align: "right",
    },
    {
      title: "24K",
      key: "24k",
      align: "right",
      render: (text) => {
        const kadarkali = text.kadar / 100;
        let karat24 = 0;
        karat24 = text.berat_susut * kadarkali;
        return karat24;
      },
    },
    {
      title: "Nama Tukang",
      dataIndex: "kode_tukang",
      key: "kode_tukang",
      align: "center",
    },
  ];

  const dataLaporanKirimJoAdmin = useSelector(
    laporankirimjoadmin.getAllLaporanKirimJoAdmin
  );

  return (
    <Table
      dataSource={dataLaporanKirimJoAdmin}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={5} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimJoAdmin.reduce(
                (a, b) => a + parseFloat(b.stock_out),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimJoAdmin
                .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimJoAdmin
                .reduce((a, b) => a + parseFloat(b.berat_susut), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanKirimJoAdmin
                .reduce((a, b) => a + parseFloat(b.kadar), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanKirimJoAdmin
                .reduce(
                  (a, b) =>
                    a + parseFloat(b.berat_susut) * (parseFloat(b.kadar) / 100),
                  0
                )
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanKirimJoAdmin;
