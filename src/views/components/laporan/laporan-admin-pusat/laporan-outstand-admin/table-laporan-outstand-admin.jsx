import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanoutstandadmin from "../../../../../application/selectors/laporanoutstandadmin";

const TableLaporanOutstandAdmin = () => {
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
    },
    {
      title: "Berat",
      dataIndex: "berat_akhir",
      key: "berat_akhir",
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
        karat24 = text.berat_akhir * kadarkali;
        return karat24;
      },
    },
    {
      title: "Tgl Outstand",
      dataIndex: "update_date",
      key: "update_date",
      align: "center",
    },
    {
      title: "Nama Tukang",
      dataIndex: "kode_staff",
      key: "kode_staff",
      align: "center",
    },
  ];

  const dataLaporanOutstandAdmin = useSelector(
    laporanoutstandadmin.getAllLaporanOutstandAdmin
  );

  return (
    <Table
      dataSource={dataLaporanOutstandAdmin}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={3} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanOutstandAdmin.reduce(
                (a, b) => a + parseFloat(b.stock_akhir),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanOutstandAdmin
                .reduce((a, b) => a + parseFloat(b.berat_akhir), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4} align="right">
              {dataLaporanOutstandAdmin
                .reduce((a, b) => a + parseFloat(b.kadar), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={5} align="right">
              {dataLaporanOutstandAdmin
                .reduce(
                  (a, b) =>
                    a + parseFloat(b.berat_akhir) * (parseFloat(b.kadar) / 100),
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

export default TableLaporanOutstandAdmin;
