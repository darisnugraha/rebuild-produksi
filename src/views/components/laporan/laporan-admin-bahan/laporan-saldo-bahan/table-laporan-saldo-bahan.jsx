import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporansaldobahan from "../../../../../application/selectors/laporansaldobahan";

const TableLaporanSaldoBahan = () => {
  const columns = [
    {
      title: "Nama Bahan",
      dataIndex: "nama_bahan",
      key: "nama_bahan",
      align: "center",
    },
    {
      title: "Saldo Awal",
      dataIndex: "saldo_awal",
      key: "saldo_awal",
      align: "center",
    },
    {
      title: "Mutasi In",
      dataIndex: "mutasi_in",
      key: "mutasi_in",
      align: "right",
    },
    {
      title: "Mutasi Out",
      dataIndex: "mutasi_out",
      key: "mutasi_out",
      align: "right",
    },
    {
      title: "Saldo Akhir",
      key: "saldo_akhir",
      align: "right",
      render: (text) => {
        let saldo_akhir = 0;
        saldo_akhir = text.saldo_awal + text.mutasi_in - text.mutasi_out;
        return saldo_akhir.toFixed(3);
      },
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
        karat24 = text.saldo_awal * kadarkali;
        return karat24;
      },
    },
  ];

  const dataLaporanSaldoBahan = useSelector(
    laporansaldobahan.getAllLaporanSaldoBahan
  );

  return (
    <Table
      dataSource={dataLaporanSaldoBahan}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanSaldoBahan
                .reduce((a, b) => a + parseFloat(b.saldo_awal), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanSaldoBahan
                .reduce((a, b) => a + parseFloat(b.mutasi_in), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSaldoBahan
                .reduce((a, b) => a + parseFloat(b.mutasi_out), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanSaldoBahan
                .reduce((a, b) => a + parseFloat(b.saldo_awal), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanSaldoBahan
                .reduce((a, b) => a + parseFloat(b.kadar), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanSaldoBahan;
