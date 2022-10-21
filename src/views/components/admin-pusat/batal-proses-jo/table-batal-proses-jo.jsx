import React from "react";
import { Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteDataBatalProsesJO } from "../../../../application/actions/batalprosesjo";

const TableBatalProsesJO = () => {
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
        dispatch(deleteDataBatalProsesJO(kode));
      }
    });
  };

  const columns = [
    {
      title: "No Kirim/Terima",
      dataIndex: "no_proses",
      key: "no_proses",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
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

  const data = getLocal("batal_proses_jo") || [];

  return (
    <>
      <Table dataSource={data} columns={columns} scroll={{ x: 500, y: 1500 }} />
    </>
  );
};

export default TableBatalProsesJO;
