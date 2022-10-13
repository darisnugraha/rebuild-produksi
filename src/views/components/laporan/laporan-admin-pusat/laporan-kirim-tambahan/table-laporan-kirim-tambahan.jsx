import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporankirimtambahan from "../../../../../application/selectors/laporankirimtambahan";

const TableLaporanKirimTambahan = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tanggal_kirim",
      key: "tanggal_kirim",
      align: "center",
    },
    {
      title: "Divisi Tujuan",
      dataIndex: "divisi",
      key: "divisi",
      align: "center",
    },
    {
      title: "Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Tambahan",
      dataIndex: "tambahan",
      key: "tambahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock_out",
      key: "stock_out",
      align: "right",
    },
    {
      title: "Berat",
      dataIndex: "berat_out",
      key: "berat_out",
      align: "right",
    },
  ];

  const dataLaporanKirimTambahan = useSelector(
    laporankirimtambahan.getAllLaporanKirimTambahan
  );

  return (
    <Table
      dataSource={dataLaporanKirimTambahan}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={5} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimTambahan.reduce(
                (a, b) => a + parseFloat(b.stock_out),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimTambahan
                .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanKirimTambahan;
