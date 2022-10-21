import React from "react";
import { Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteJobOrder } from "../../../../application/actions/gabungjo";

const TableGabungJO = () => {
  const dispatch = useDispatch();
  const onDelete = (kode) => {
    Swal.fire({
      title: kode,
      text: "Apakah Anda Yakin Akan Mengahapus Data Ini ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteJobOrder(kode));
      }
    });
  };

  const columns = [
    {
      title: "No Induk Job Order",
      dataIndex: "no_induk_job_order",
      key: "no_induk_job_order",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Divisi",
      dataIndex: "asal_divisi",
      key: "asal_divisi",
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
      dataIndex: "berat_out",
      key: "berat_out",
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
                onClick={() => {
                  onDelete(text.no_job_order);
                }}
              >
                DELETE
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  const data = getLocal("gabung_jo_head") || [];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 500, y: 1500 }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={4} align="center">
                Berat Gabung :
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                {data.reduce((a, b) => a + parseFloat(b.berat_out), 0)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </>
  );
};

export default TableGabungJO;
