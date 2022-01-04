import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporantambahjoborder from "../../../../../application/selectors/laporantambahjoborder";

const TableLaporanTambahJobOrder = () => {
  const columns = [
    {
      title: "No Transaksi",
      dataIndex: "no_tambah",
      key: "no_tambah",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tgl_tambah",
      key: "tgl_tambah",
      align: "center",
    },
    {
      title: "Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "stock",
      key: "stock",
      align: "right",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "right",
    },
  ];

  const dataLaporanTambahJobOrder = useSelector(
    laporantambahjoborder.getAllLaporanTambahJobOrder
  );

  let total24k = 0;
  dataLaporanTambahJobOrder.map((item) => {
    return (total24k =
      total24k + parseFloat(item.berat) * (parseFloat(item.kadar) / 100));
  });

  return (
    <Table
      dataSource={dataLaporanTambahJobOrder}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTambahJobOrder.reduce(
                (a, b) => a + parseFloat(b.stock),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTambahJobOrder
                .reduce((a, b) => a + parseFloat(b.berat), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTambahJobOrder;
