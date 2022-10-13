import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporantambahsaldobahan from "../../../../../application/selectors/laporantambahsaldobahan";

const TableLaporanTambahSaldoBahan = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_mutasi",
      key: "no_mutasi",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tanggal_mutasi",
      key: "tanggal_mutasi",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "Nama Bahan",
      dataIndex: "nama_bahan",
      key: "nama_bahan",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
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
      render: (item) => {
        const total = parseFloat(item.berat) * (parseFloat(item.kadar) / 100);
        return total.toFixed(3);
      },
    },
  ];

  const dataLaporanTambahSaldoBahan = useSelector(
    laporantambahsaldobahan.getAllLaporanTambahSaldoBahan
  );

  let total24k = 0;
  dataLaporanTambahSaldoBahan.map((item) => {
    return (total24k =
      total24k + parseFloat(item.berat) * (parseFloat(item.kadar) / 100));
  });

  return (
    <Table
      dataSource={dataLaporanTambahSaldoBahan}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanTambahSaldoBahan
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanTambahSaldoBahan
                .reduce((a, b) => a + parseFloat(b.kadar), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {total24k.toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTambahSaldoBahan;
