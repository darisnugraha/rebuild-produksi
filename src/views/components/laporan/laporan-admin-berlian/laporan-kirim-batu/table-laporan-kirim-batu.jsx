import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporankirimbatu from "../../../../../application/selectors/laporankirimbatu";

const TableLaporanKirimBatu = () => {
  const columns = [
    {
      title: "No Kirim",
      dataIndex: "no_kirim_batu",
      key: "no_kirim_batu",
      align: "center",
    },
    {
      title: "Tgl Kirim",
      dataIndex: "tanggal_kirim",
      key: "tanggal_kirim",
      align: "center",
    },
    {
      title: "No JO",
      dataIndex: "no_job_order",
      key: "no_job_order",
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

  const dataLaporanKirimBatu = useSelector(
    laporankirimbatu.getAllLaporanKirimBatu
  );

  return (
    <Table
      dataSource={dataLaporanKirimBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanKirimBatu.reduce(
                (a, b) => a + parseFloat(b.stock_batu),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanKirimBatu
                .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanKirimBatu;
