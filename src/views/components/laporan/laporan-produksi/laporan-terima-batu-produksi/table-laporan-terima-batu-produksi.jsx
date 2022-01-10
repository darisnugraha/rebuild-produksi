import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanterimabatu from "../../../../../application/selectors/laporanproduksi";

const TableLaporanTerimaBatu = () => {
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
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock_in",
      key: "stock_in",
      align: "right",
    },
    {
      title: "Berat",
      dataIndex: "berat_in",
      key: "berat_in",
      align: "right",
    },
  ];

  const dataLaporanTerimaBatu = useSelector(
    laporanterimabatu.getAllTerimaBatuProduksi
  );

  return (
    <Table
      dataSource={dataLaporanTerimaBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTerimaBatu.reduce(
                (a, b) => a + parseFloat(b.stock_in),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaBatu
                .reduce((a, b) => a + parseFloat(b.berat_in), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTerimaBatu;
