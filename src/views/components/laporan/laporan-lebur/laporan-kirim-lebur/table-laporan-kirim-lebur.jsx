import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporankirimlebur from "../../../../../application/selectors/laporanlebur";

const TableLaporanKirimLebur = () => {
  const columns = [
    {
      title: "No Kirim",
      dataIndex: "no_kirim_lebur",
      key: "no_kirim_lebur",
      align: "center",
    },
    {
      title: "Tanggal Kirim",
      dataIndex: "tanggal_kirim",
      key: "tanggal_kirim",
      align: "center",
    },
    {
      title: "Asal Bahan",
      dataIndex: "asal_bahan",
      key: "asal_bahan",
      align: "center",
    },
    {
      title: "Nama Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Berat Kirim",
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
      render: (text) => {
        const karat24 = parseFloat(text.berat) * (parseFloat(text.kadar) / 100);
        return karat24.toFixed(3);
      },
    },
  ];

  const dataLaporanKirimLebur = useSelector(
    laporankirimlebur.getAllLaporanKirimLebur
  );

  return (
    <Table
      dataSource={dataLaporanKirimLebur}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimLebur
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimLebur
                .reduce((a, b) => a + parseFloat(b.kadar), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimLebur
                .reduce(
                  (a, b) =>
                    a + parseFloat(b.berat) * (parseFloat(b.kadar) / 100),
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

export default TableLaporanKirimLebur;
