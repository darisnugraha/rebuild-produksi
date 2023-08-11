import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanpembuatanjenisbahan from "../../../../../application/selectors/laporanpembuatanjenisbahan";

const TableLaporanPembuatanJenisBahan = () => {
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
      title: "Bahan Pakai",
      dataIndex: "nama_jenis_bahan",
      key: "nama_jenis_bahan",
      align: "center",
    },
    {
      title: "Berat Pakai",
      dataIndex: "berat",
      key: "berat",
      align: "right",
      render: (item) => {
        return item.toFixed(3);
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
      key: "karat_24",
      align: "right",
      render: (item) => {
        const total = parseFloat(item.berat) * (parseFloat(item.kadar) / 100);
        return total.toFixed(3);
      },
    },
  ];

  const dataLaporanPembuatanJenisBahan = useSelector(
    laporanpembuatanjenisbahan.getAllLaporanPembuatanJenisBahan
  );

  let total24k = 0;
  dataLaporanPembuatanJenisBahan.map((item) => {
    return (total24k =
      total24k + parseFloat(item.berat) * (parseFloat(item.kadar) / 100));
  });

  return (
    <Table
      dataSource={dataLaporanPembuatanJenisBahan}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={3} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataLaporanPembuatanJenisBahan
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right"></Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {total24k.toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanPembuatanJenisBahan;
