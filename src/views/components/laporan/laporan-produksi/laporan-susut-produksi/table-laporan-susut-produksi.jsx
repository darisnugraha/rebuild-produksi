import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanstatusproduksi from "../../../../../application/selectors/laporanproduksi";

const TableLaporanSusutProduksi = () => {
  const columns = [
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Tanggal Kirim",
      dataIndex: "tanggal",
      key: "tanggal",
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
      title: "Susut",
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
      key: "karat_24",
      align: "right",
      render: (text) => {
        const karat24 =
          parseFloat(text.berat_susut) * (parseFloat(text.kadar) / 100);
        return karat24.toFixed(3);
      },
    },
    {
      title: "Nama Tukang",
      dataIndex: "kode_tukang",
      key: "kode_tukang",
    },
  ];

  const data = useSelector(laporanstatusproduksi.getAllSusutProduksi);

  return (
    <Table
      dataSource={data}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={6} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {data.reduce((a, b) => a + parseFloat(b.stock_out), 0)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {data.reduce((a, b) => a + parseFloat(b.berat_out), 0).toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {data
                .reduce((a, b) => a + parseFloat(b.berat_susut), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="right">
              {data.reduce((a, b) => a + parseFloat(b.kadar), 0).toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="right">
              {data
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

export default TableLaporanSusutProduksi;
