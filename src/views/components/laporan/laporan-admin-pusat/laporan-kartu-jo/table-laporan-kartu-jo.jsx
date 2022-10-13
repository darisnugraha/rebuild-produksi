import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import kartujo from "../../../../../application/selectors/laporankartujoborder";

const TableKartuJo = () => {
  const columns = [
    {
      title: "Tgl Kirim",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Divisi",
      dataIndex: "divisi",
      key: "divisi",
      align: "center",
    },
    // {
    //   title: "Divisi Tujuan",
    //   dataIndex: "divisi_tujuan",
    //   key: "divisi_tujuan",
    //   align: "center",
    // },
    // {
    //   title: "Tukang",
    //   dataIndex: "kode_staff",
    //   key: "kode_staff",
    //   align: "center",
    // },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Berat In",
      dataIndex: "berat_in",
      key: "berat_in",
      align: "right",
    },
    {
      title: "Berat Out",
      dataIndex: "berat_out",
      key: "berat_out",
      align: "right",
    },
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "right",
    },
    {
      title: "Input Date",
      dataIndex: "input_date",
      key: "input_date",
      align: "center",
    },
  ];

  const dataKartuJo = useSelector(kartujo.getAllKartuJobOrder);

  return (
    <Table
      dataSource={dataKartuJo}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={6} align="right">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {dataKartuJo
                .reduce((a, b) => a + parseFloat(b.berat_in), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="right">
              {dataKartuJo
                .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              {dataKartuJo
                .reduce((a, b) => a + parseFloat(b.susut), 0)
                .toFixed(3)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default TableKartuJo;
