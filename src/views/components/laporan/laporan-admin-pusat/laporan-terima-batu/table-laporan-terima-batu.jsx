import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanterimabatu from "../../../../../application/selectors/laporanterimabatu";

const TableLaporanTerimaBatu = () => {
  const columns = [
    {
      title: "No Terima",
      dataIndex: "no_admin_terima_batu",
      key: "no_admin_terima_batu",
      align: "center",
    },
    {
      title: "Tgl Transaksi",
      dataIndex: "tanggal_terima_batu",
      key: "tanggal_terima_batu",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim_batu",
      key: "no_kirim_batu",
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

  const dataLaporanTerimaBatu = useSelector(
    laporanterimabatu.getAllLaporanTerimaBatu
  );

  return (
    <Table
      dataSource={dataLaporanTerimaBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={5} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanTerimaBatu.reduce(
                (a, b) => a + parseFloat(b.stock_batu),
                0
              )}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanTerimaBatu
                .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanTerimaBatu;
