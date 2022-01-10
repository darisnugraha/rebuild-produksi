import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanoutstandproduksi from "../../../../../application/selectors/laporanproduksi";

const TableLaporanOutstandProduksi = () => {
  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Nama Konsumen",
      dataIndex: "nama_customer",
      key: "nama_customer",
      align: "center",
    },
    {
      title: "Nama Barang",
      dataIndex: "kode_barang",
      key: "kode_barang",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock_akhir",
      key: "stock_akhir",
      align: "right",
      render: (text) => {
        return parseFloat(text) ? text : 0;
      },
    },
    {
      title: "Berat",
      dataIndex: "berat_akhir",
      key: "berat_akhir",
      align: "right",
      render: (text) => {
        return parseFloat(text) ? text : 0;
      },
    },
    {
      title: "Kadar",
      dataIndex: "kadar",
      key: "kadar",
      align: "right",
      render: (text) => {
        return parseFloat(text) ? text : 0;
      },
    },
    {
      title: "24K",
      key: "karat_24",
      align: "right",
      render: (text) => {
        const karat24 =
          (parseFloat(text.berat_akhir) || 0) *
          ((parseFloat(text.kadar) || 0) / 100);
        return karat24.toFixed(3);
      },
    },
    {
      title: "Tgl Outstand",
      dataIndex: "update_date",
      key: "update_date",
    },
    {
      title: "Nama Tukang",
      dataIndex: "kode_staff",
      key: "kode_staff",
    },
  ];

  const dataLaporanOutstandProduksi = useSelector(
    laporanoutstandproduksi.getAllOutstandProduksi
  );

  return (
    <Table
      dataSource={dataLaporanOutstandProduksi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanOutstandProduksi.reduce(
                (a, b) => a + (parseFloat(b.stock_akhir) || 0),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanOutstandProduksi
                .reduce((a, b) => a + (parseFloat(b.berat_akhir) || 0), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="right">
              {dataLaporanOutstandProduksi
                .reduce((a, b) => a + (parseFloat(b.kadar) || 0), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="right">
              {dataLaporanOutstandProduksi
                .reduce(
                  (a, b) =>
                    a +
                    (parseFloat(b.berat_akhir) || 0) *
                      (parseFloat(b.kadar) / 100),
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

export default TableLaporanOutstandProduksi;
