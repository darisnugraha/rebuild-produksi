import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanterimalebur from "../../../../../application/selectors/laporanlebur";

const TableLaporanTerimaLebur = () => {
  const columns = [
    {
      title: "No Terima",
      dataIndex: "no_terima",
      key: "no_terima",
      align: "center",
    },
    {
      title: "Tanggal Terima",
      dataIndex: "tgl_terima",
      key: "tgl_terima",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
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
      dataIndex: "berat_murni",
      key: "berat_murni",
      align: "right",
    },
    {
      title: "Berat Terima",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
      align: "right",
    },
    {
      title: "Berat Susut",
      dataIndex: "berat_susut",
      key: "berat_susut",
      align: "right",
    },
  ];

  const dataLaporanTerimaLebur = useSelector(
    laporanterimalebur.getAllLaporanTerimaLebur
  );

  return (
    <Table
      dataSource={dataLaporanTerimaLebur}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTerimaLebur
                .reduce((a, b) => a + parseFloat(b.berat_murni), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaLebur
                .reduce((a, b) => a + parseFloat(b.berat_kirim), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaLebur
                .reduce((a, b) => a + parseFloat(b.berat_susut), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTerimaLebur;
