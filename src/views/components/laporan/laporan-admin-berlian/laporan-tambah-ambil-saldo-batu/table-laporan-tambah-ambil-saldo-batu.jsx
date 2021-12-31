import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporantambahambilsaldobatu from "../../../../../application/selectors/laporantambahambilsaldobatu";

const TableLaporanTambahAmbilSaldoBatu = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_mutasi_batu",
      key: "no_mutasi_batu",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tgl_mutasi",
      key: "tgl_mutasi",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "right",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "right",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];

  const dataLaporanTambahAmbilBatu = useSelector(
    laporantambahambilsaldobatu.getAllLaporanTambahAmbilSaldoBatu
  );

  return (
    <Table
      dataSource={dataLaporanTambahAmbilBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={3} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTambahAmbilBatu.reduce(
                (a, b) => a + parseFloat(b.jumlah),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTambahAmbilBatu
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTambahAmbilSaldoBatu;
