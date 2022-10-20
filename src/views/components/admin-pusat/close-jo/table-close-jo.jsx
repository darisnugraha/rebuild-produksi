import React from "react";
import { Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import {
  deleteDataLocal,
  editJobOrder,
  setIsEdit,
} from "../../../../application/actions/closejo";
import { useDispatch, useSelector } from "react-redux";
import FormCloseJo from "./form-close-jo";
import CloseJO from "../../../../application/selectors/closejo";

const TableCloseJO = () => {
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
        dispatch(deleteDataLocal(kode));
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
      title: "Berat Close",
      dataIndex: "berat_close",
      key: "berat_close",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
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
                type="warning"
                htmltype="button"
                onClick={() => {
                  dispatch(editJobOrder(text.no_job_order));
                }}
              >
                EDIT
              </Button>
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

  const data = getLocal("close_jo_head");
  const visible = useSelector(CloseJO.getIsEditDataDetailJO);

  return (
    <>
      <Table dataSource={data} columns={columns} scroll={{ x: 500, y: 1500 }} />
      <FormCloseJo
        visible={visible}
        onCancel={() => {
          dispatch(setIsEdit(false));
        }}
      />
    </>
  );
};

export default TableCloseJO;
