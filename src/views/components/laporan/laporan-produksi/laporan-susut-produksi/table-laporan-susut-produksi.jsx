import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import laporanstatusproduksi from "../../../../../application/selectors/laporanproduksi";

const TableLaporanSusutProduksi = () => {
  const columnsTambahBahan = [
    {
      title: "Tambah Bahan",
      children: [
        {
          title: "Tanggal",
          dataIndex: "tanggal",
          key: "tanggal",
          align: "center",
        },
        {
          title: "Jenis Emas",
          dataIndex: "jenis_bahan",
          key: "jenis_bahan",
          align: "center",
        },
        {
          title: "Keterangan",
          dataIndex: "keterangan",
          key: "keterangan",
          align: "center",
        },
        {
          title: "Berat Kotor",
          dataIndex: "berat_kotor",
          key: "berat_kotor",
          align: "right",
        },
        {
          title: "%",
          dataIndex: "kadar",
          key: "kadar",
          align: "right",
        },
        {
          title: "Berat Murni",
          dataIndex: "berat_murni",
          key: "berat_murni",
          align: "right",
        },
      ],
    },
  ];

  const columnsBalikBahan = [
    {
      title: "Balik Bahan",
      children: [
        {
          title: "Tanggal",
          dataIndex: "tanggal",
          key: "tanggal",
          align: "center",
        },
        {
          title: "Jenis Emas",
          dataIndex: "nama_bahan",
          key: "nama_bahan",
          align: "center",
        },
        {
          title: "Keterangan",
          dataIndex: "keterangan",
          key: "keterangan",
          align: "center",
        },
        {
          title: "Berat Kotor",
          dataIndex: "berat_kotor",
          key: "berat_kotor",
          align: "right",
        },
        {
          title: "%",
          dataIndex: "kadar",
          key: "kadar",
          align: "right",
        },
        {
          title: "Berat Murni",
          dataIndex: "berat_murni",
          key: "berat_murni",
          align: "right",
        },
      ],
    },
  ];

  const columnsSusutJO = [
    {
      title: "Susut JO",
      children: [
        {
          title: "Tanggal Terima",
          dataIndex: "tanggal_terima",
          key: "tanggal_terima",
          align: "center",
        },
        {
          title: "SPK",
          dataIndex: "no_job_order",
          key: "no_job_order",
          align: "center",
        },
        {
          title: "Jenis Emas",
          dataIndex: "kode_jenis_bahan",
          key: "kode_jenis_bahan",
          align: "center",
        },
        {
          title: "%",
          dataIndex: "kadar",
          key: "kadar",
          align: "right",
        },
        {
          title: "Berat Awal",
          dataIndex: "berat_awal",
          key: "berat_awal",
          align: "right",
        },
        {
          title: "Berat Awal Murni",
          dataIndex: "berat_awal_murni",
          key: "berat_awal_murni",
          align: "right",
        },
        {
          title: "Tanggal Kirim",
          dataIndex: "tanggal_kirim",
          key: "tanggal_kirim",
          align: "center",
        },
        {
          title: "Berat Akhir",
          dataIndex: "berat_akhir",
          key: "berat_akhir",
          align: "right",
        },
        {
          title: "Susut Kotor",
          dataIndex: "susut_kotor",
          key: "susut_kotor",
          align: "right",
        },
        {
          title: "Susut Murni",
          dataIndex: "susut_murni",
          key: "susut_murni",
          align: "right",
        },
      ],
    },
  ];

  const columnsAbuLebur = [
    {
      title: "Abu Lebur",
      children: [
        {
          title: "Nama Tukang",
          dataIndex: "tukang",
          key: "tukang",
          align: "center",
        },
        {
          title: "Keterangan",
          dataIndex: "keterangan",
          key: "keterangan",
          align: "center",
          render: (text, row) => {
            return `${text.toUpperCase()}`;
          },
        },
        {
          title: "Berat Abu Awal",
          dataIndex: "berat_abu_awal",
          key: "berat_abu_awal",
          align: "right",
        },
        {
          title: "Berat Kotor Kembali",
          dataIndex: "berat_kotor_kembali",
          key: "berat_kotor_kembali",
          align: "right",
        },
        {
          title: "Susut Bruto",
          dataIndex: "susut_bruto",
          key: "susut_bruto",
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
          dataIndex: "berat_24k",
          key: "berat_24k",
          align: "right",
        },
        {
          title: "Susut 24K",
          dataIndex: "susut_24k",
          key: "susut_24k",
          align: "right",
        },
      ],
    },
  ];

  const data = useSelector(laporanstatusproduksi.getAllSusutProduksi);

  return (
    <>
      <Table
        dataSource={data[0]?.tambah_bahan}
        columns={columnsTambahBahan}
        scroll={{ x: 1500, y: 1000 }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3} align="right">
                Grand Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {data[0]?.tambah_bahan.reduce((a, b) => a + b.berat_kotor, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                {data[0]?.tambah_bahan.reduce((a, b) => a + b.berat_murni, 0)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
      <Table
        dataSource={data[1]?.balik_bahan}
        columns={columnsBalikBahan}
        scroll={{ x: 1500, y: 1000 }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3} align="right">
                Grand Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {data[1]?.balik_bahan.reduce((a, b) => a + b.berat_kotor, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                {data[1]?.balik_bahan.reduce((a, b) => a + b.berat_murni, 0)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
      <Table
        dataSource={data[3]?.susut_JO}
        columns={columnsSusutJO}
        scroll={{ x: 1500, y: 1000 }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3} align="right">
                Grand Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right">
                {data[3]?.susut_JO.reduce((a, b) => a + b.berat_awal, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                {data[3]?.susut_JO.reduce((a, b) => a + b.berat_awal_murni, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={5} align="right">
                {data[3]?.susut_JO.reduce((a, b) => a + b.berat_akhir, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={6} align="right">
                {data[3]?.susut_JO.reduce((a, b) => a + b.susut_kotor, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={7} align="right">
                {data[3]?.susut_JO.reduce((a, b) => a + b.susut_murni, 0)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
      <Table
        dataSource={data[2]?.abu_lebur}
        columns={columnsAbuLebur}
        scroll={{ x: 1500, y: 1000 }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={2} align="right">
                Grand Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {data[2]?.abu_lebur.reduce((a, b) => a + b.berat_abu_awal, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right">
                {data[2]?.abu_lebur.reduce(
                  (a, b) => a + b.berat_kotor_kembali,
                  0
                )}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                {data[2]?.abu_lebur.reduce((a, b) => a + b.susut_bruto, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={5} align="right"></Table.Summary.Cell>
              <Table.Summary.Cell index={6} align="right">
                {data[2]?.abu_lebur.reduce((a, b) => a + b.berat_24k, 0)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={7} align="right">
                {data[2]?.abu_lebur.reduce((a, b) => a + b.susut_24k, 0)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </>
  );
};

export default TableLaporanSusutProduksi;
