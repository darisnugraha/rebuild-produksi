import React from "react";
import { Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import getLocal from "../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteDataLocal } from "../../../application/actions/terimajo";

const TableTerimaJO = () => {
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
      title: "Kode Barang",
      dataIndex: "kode_barang",
      key: "kode_barang",
      align: "center",
    },
    {
      title: "Kode Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah Terima",
      dataIndex: "jumlah_terima",
      key: "jumlah_terima",
      align: "center",
    },
    {
      title: "Berat Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
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
              {/* <Button
                className="ant-btn-warning"
                htmltype="button"
                danger
                onClick={() => {
                  //   dispatch(editJobOrder(text.no_job_order));
                }}
              >
                EDIT
              </Button> */}
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

  const data = getLocal("terima_jo_head");
  //   const dataDetailBatu = getLocal("detail_batu");
  //   const dataDetailTambahan = getLocal("detail_tambahan");

  //   const visibleJO = useSelector(KirimJO.getIsEditJO);
  //   const visibleBatu = useSelector(KirimJO.getIsEditBatu);
  //   const visibleTambahan = useSelector(KirimJO.getIsEditTambahan);

  return (
    <>
      <Table dataSource={data} columns={columns} scroll={{ x: 500, y: 1500 }} />
    </>
  );
};

export default TableTerimaJO;
