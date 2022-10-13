import React from "react";
import { Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  deleteDataBahan,
  deleteDataDetailJenisBahan,
} from "../../../../application/actions/pembuatanjenisbahan";

const TablePembuatanJenisBahan = () => {
  const dispatch = useDispatch();
  const dataTable = getLocal("data_detail_bahan") || [];
  const dataTableDetail = getLocal("data_detail_jenis_bahan") || [];

  const onDelete = (data, type) => {
    Swal.fire({
      title: data,
      text: "Apakah Anda Yakin Akan Mengahapus Data Ini ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        if (type === "DETAIL") {
          dispatch(deleteDataDetailJenisBahan({ id: data }));
        } else {
          dispatch(deleteDataBahan({ id: data }));
        }
      }
    });
  };

  const columnsDetail = [
    {
      title: "No Pohon",
      dataIndex: "no_pohon",
      key: "no_pohon",
      align: "center",
    },
    {
      title: "Kode Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat_dibutuhkan",
      key: "berat_dibutuhkan",
      align: "right",
    },
    {
      title: "Berat Susut",
      dataIndex: "berat_susut",
      key: "berat_susut",
      align: "right",
    },
    {
      title: "Action",
      key: "act",
      align: "center",
      render: (text) => {
        return (
          <>
            <Space>
              <Button
                type="primary"
                htmltype="button"
                danger
                onClick={() => onDelete(text.no_pohon, "DETAIL")}
              >
                DELETE
              </Button>
            </Space>
          </>
        );
      },
    },
  ];
  const columns = [
    {
      title: "Nama Bahan",
      dataIndex: "nama_bahan",
      key: "nama_bahan",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat_bahan",
      key: "berat_bahan",
      align: "right",
    },
    {
      title: "Action",
      key: "act",
      align: "center",
      render: (text) => {
        return (
          <>
            <Space>
              <Button
                type="primary"
                htmltype="button"
                danger
                onClick={() => onDelete(text.nama_bahan, "BAHAN")}
              >
                DELETE
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={dataTableDetail}
        columns={columnsDetail}
        scroll={{ x: "100%" }}
        summary={(pageData) => {
          return (
            <>
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}></Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right">
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="right">
                    {dataTableDetail
                      .reduce((a, b) => a + Number(b.berat_dibutuhkan), 0)
                      .toLocaleString()}
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={3} align="right">
                    {dataTableDetail
                      .reduce((a, b) => a + Number(b.berat_susut), 0)
                      .toLocaleString()}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          );
        }}
      />
      <br />
      <Table
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: "100%" }}
        summary={(pageData) => {
          return (
            <>
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} align="right">
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right">
                    {dataTable
                      .reduce((a, b) => a + Number(b.berat_bahan), 0)
                      .toLocaleString()}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          );
        }}
      />
    </>
  );
};

export default TablePembuatanJenisBahan;
