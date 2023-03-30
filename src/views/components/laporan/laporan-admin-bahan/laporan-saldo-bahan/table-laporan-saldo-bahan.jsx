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
      align: "right",
      render: (text) => {
        return text.toFixed(3);
      },
    },
    {
      title: "Mutasi In",
      dataIndex: "berat_in",
      key: "mutasi_in",
      align: "right",
      render: (text) => {
        return text.toFixed(3);
      },
    },
    {
      title: "Mutasi Out",
      dataIndex: "berat_out",
      key: "mutasi_out",
      align: "right",
      render: (text) => {
        return text.toFixed(3);
      },
    },
    {
      title: "Saldo Akhir",
      key: "saldo_akhir",
      align: "right",
      render: (text) => {
        let saldo_akhir = 0;
        saldo_akhir = text.saldo_awal + text.berat_in - text.berat_out;
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
        return karat24.toFixed(3);
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
      summary={(row) => {
        let karat24 = 0;
        row.forEach((el) => {
          const kadarkali = el.kadar / 100;
          karat24 += el.saldo_awal * kadarkali;
        });
        return (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} align="right">
                Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {dataLaporanSaldoBahan
                  .reduce((a, b) => a + parseFloat(b.saldo_awal), 0)
                  .toFixed(3)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {dataLaporanSaldoBahan
                  .reduce((a, b) => a + parseFloat(b.berat_in), 0)
                  .toFixed(3)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right">
                {dataLaporanSaldoBahan
                  .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                  .toFixed(3)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                {dataLaporanSaldoBahan
                  .reduce(
                    (a, b) =>
                      a + parseFloat(b.saldo_awal + b.berat_in - b.berat_out),
                    0
                  )
                  .toFixed(3)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={5} align="right">
                {karat24.toFixed(3)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        );
      }}
    />
  );
};

export default TableLaporanSaldoBahan;
