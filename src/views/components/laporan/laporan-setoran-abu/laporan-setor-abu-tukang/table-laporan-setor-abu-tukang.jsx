import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporansetorabutukang from "../../../../../application/selectors/laporansetorabutukang";

const TableLaporanSetorAbuTukang = () => {
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No SPK",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Divisi",
      dataIndex: "divisi",
      key: "divisi",
      align: "center",
    },
    {
      title: "Tukang",
      dataIndex: "kode_tukang",
      key: "kode_tukang",
      align: "center",
    },
    {
      title: "Bahan Kembali",
      dataIndex: "bahan_kembali",
      key: "bahan_kembali",
      align: "center",
    },
    {
      title: "Berat Kembali",
      dataIndex: "berat_kembali",
      key: "berat_kembali",
      align: "right",
    },
    {
      title: "Susut Bruto",
      dataIndex: "susut_bruto",
      key: "susut_bruto",
      align: "right",
      render: (text) => {
        return parseFloat(text) ? text : 0;
      },
    },
    {
      title: "Kadar Kembali",
      dataIndex: "kadar_kembali",
      key: "kadar_kembali",
      align: "right",
    },
    {
      title: "24K Kembali",
      dataIndex: "kembali_24",
      key: "kembali_24",
      align: "right",
    },
    {
      title: "Susut 24K",
      dataIndex: "susut_24",
      key: "susut_24",
      align: "right",
      render: (text) => {
        return parseFloat(text) ? text : 0;
      },
    },
  ];

  const dataLaporanSetorAbuTukang = useSelector(
    laporansetorabutukang.getAllLaporanSetorAbuTukang
  );

  return (
    <Table
      dataSource={dataLaporanSetorAbuTukang}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={5} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataLaporanSetorAbuTukang
                .reduce((a, b) => a + parseFloat(b.berat_kembali), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSetorAbuTukang
                .reduce((a, b) => a + (parseFloat(b.susut_bruto) || 0), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSetorAbuTukang
                .reduce((a, b) => a + parseFloat(b.kadar_kembali), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSetorAbuTukang
                .reduce((a, b) => a + parseFloat(b.kembali_24), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataLaporanSetorAbuTukang
                .reduce((a, b) => a + (parseFloat(b.susut_24) || 0), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableLaporanSetorAbuTukang;
