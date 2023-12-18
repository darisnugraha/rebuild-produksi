import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporansaldobatu from "../../../../../application/selectors/laporansaldobatu";

const TableLaporanSaldoBatu = () => {
  const columns = [
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Nama Batu",
      dataIndex: "nama_batu",
      key: "nama_batu",
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
  ];

  const dataLaporanSaldoBatu = useSelector(
    laporansaldobatu.getAllLaporanSaldoBatu
  );

  return (
    <Table
      dataSource={dataLaporanSaldoBatu}
      columns={columns}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} align="center">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanSaldoBatu.reduce(
                (a, b) => a + parseFloat(b.jumlah),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSaldoBatu
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanSaldoBatu;
