import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporankirimbatupusat from "../../../../../application/selectors/laporankirimbatupusat";

const TableLaporanKirimBatuPusat = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_kirim_batu",
      key: "no_kirim_batu",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tanggal_kirim_batu",
      key: "tanggal_kirim_batu",
      align: "center",
    },
    {
      title: "Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock_batu",
      key: "stock_batu",
      align: "right",
    },
    {
      title: "Berat",
      dataIndex: "berat_batu",
      key: "berat_batu",
      align: "right",
    },
  ];

  const dataLaporanKirimBatuPusat = useSelector(
    laporankirimbatupusat.getAllLaporanKirimBatuPusat
  );

  return (
    <Table
      dataSource={dataLaporanKirimBatuPusat}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimBatuPusat.reduce(
                (a, b) => a + parseFloat(b.stock_batu),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimBatuPusat
                .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanKirimBatuPusat;
