import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanterimatambahanproduksi from "../../../../../application/selectors/laporanproduksi";

const TableLaporanTerimaTambahanProduksi = () => {
  const columns = [
    {
      title: "Tanggal Terima",
      dataIndex: "tanggal_terima",
      key: "tanggal_terima",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Tambahan",
      dataIndex: "tambahan",
      key: "tambahan",
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

  const dataLaporanTerimaTambahanProduksi = useSelector(
    laporanterimatambahanproduksi.getAllTerimaTambahanProduksi
  );

  return (
    <Table
      dataSource={dataLaporanTerimaTambahanProduksi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={3} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTerimaTambahanProduksi.reduce(
                (a, b) => a + parseFloat(b.stock_in),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaTambahanProduksi
                .reduce((a, b) => a + parseFloat(b.berat_in), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTerimaTambahanProduksi;
