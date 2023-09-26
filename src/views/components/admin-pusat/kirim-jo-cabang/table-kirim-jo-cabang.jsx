import React from "react";
import { Button, Divider, Space, Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import getLocal from "../../../../infrastructure/services/local/get-local";
import Swal from "sweetalert2";
import {
  deleteBatu,
  deleteJobOrder,
  deleteTambahan,
  editBatu,
  editJobOrder,
  editTambahan,
  setIsEditBatu,
  setIsEditJobOrder,
  setIsEditTambahan,
} from "../../../../application/actions/kirimjocabang";
import { useDispatch } from "react-redux";
import FormKirimJo from "./form-kirim-jo-cabang";
import KirimJO from "../../../../application/selectors/kirimjocabang";
import FormDetailBatu from "./form-detail-batu-cabang";
import FormDetailTambahan from "./form-detail-tambahan-cabang";

const TableKirimJOCabang = () => {
  const dispatch = useDispatch();
  const onDelete = (kode, nama, batu, tambahan, type) => {
    Swal.fire({
      title: nama,
      text: "Apakah Anda Yakin Akan Mengahapus Data Ini ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        if (type === "DETAILJO") {
          dispatch(deleteJobOrder(kode));
        } else if (type === "DETAILBATU") {
          dispatch(deleteBatu(kode, batu));
        } else {
          dispatch(deleteTambahan(kode, tambahan));
        }
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
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
      align: "center",
    },
    {
      title: "Kode Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah Kirim",
      dataIndex: "jumlah_kirim",
      key: "jumlah_kirim",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
      align: "center",
    },
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
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
                className="ant-btn-warning"
                htmltype="button"
                danger
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
                  onDelete(
                    text.no_job_order,
                    text.no_job_order,
                    null,
                    null,
                    "DETAILJO"
                  );
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
  const columnsDetailBatu = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah Batu",
      dataIndex: "jumlah_tak_terpakai",
      key: "jumlah_tak_terpakai",
      align: "center",
    },
    {
      title: "Berat Batu",
      dataIndex: "berat_tak_terpakai",
      key: "berat_tak_terpakai",
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
                className="ant-btn-warning"
                htmltype="button"
                danger
                onClick={() => {
                  dispatch(editBatu(text.no_job_order, text.kode_batu));
                }}
              >
                EDIT
              </Button>
              <Button
                type="primary"
                htmltype="button"
                danger
                onClick={() => {
                  onDelete(
                    text._id,
                    text.no_job_order,
                    text.kode_batu,
                    null,
                    "DETAILBATU"
                  );
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
  const columnsDetailTambahan = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Nama Bahan",
      dataIndex: "nama_bahan_tambahan",
      key: "nama_bahan_tambahan",
      align: "center",
    },
    {
      title: "Jumlah Bahan",
      dataIndex: "jumlah_tambahan",
      key: "jumlah_tambahan",
      align: "center",
    },
    {
      title: "Berat Bahan",
      dataIndex: "berat_tambahan",
      key: "berat_tambahan",
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
                className="ant-btn-warning"
                htmltype="button"
                danger
                onClick={() => {
                  dispatch(
                    editTambahan(text.no_job_order, text.nama_bahan_tambahan)
                  );
                }}
              >
                EDIT
              </Button>
              <Button
                type="primary"
                htmltype="button"
                danger
                onClick={() => {
                  onDelete(
                    text.no_job_order,
                    text.no_job_order,
                    null,
                    text.nama_bahan_tambahan,
                    "DETAILTAMBAHAN"
                  );
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
  const data = getLocal("kirim_jo_head_cabang");
  const dataDetailBatu = getLocal("detail_batu");
  const dataDetailTambahan = getLocal("detail_tambahan");

  const visibleJO = useSelector(KirimJO.getIsEditJO);
  const visibleBatu = useSelector(KirimJO.getIsEditBatu);
  const visibleTambahan = useSelector(KirimJO.getIsEditTambahan);

  return (
    <>
      <Table dataSource={data} columns={columns} scroll={{ x: 500, y: 1500 }} />
      <Divider orientation="left" style={{ fontSize: "14px" }}>
        Tabel Detail Batu
      </Divider>
      <Table
        dataSource={dataDetailBatu}
        columns={columnsDetailBatu}
        scroll={{ x: 500, y: 1500 }}
      />
      <Divider orientation="left" style={{ fontSize: "14px" }}>
        Tabel Detail Tambahan
      </Divider>
      <Table
        dataSource={dataDetailTambahan}
        columns={columnsDetailTambahan}
        scroll={{ x: 500, y: 1500 }}
      />
      <FormKirimJo
        visible={visibleJO}
        onCancel={() => {
          // setVisible(false);
          dispatch(setIsEditJobOrder(false));
        }}
      />
      <FormDetailBatu
        visible={visibleBatu}
        onCancel={() => {
          // setVisible(false);
          dispatch(setIsEditBatu(false));
        }}
      />
      <FormDetailTambahan
        visible={visibleTambahan}
        onCancel={() => {
          // setVisible(false);
          dispatch(setIsEditTambahan(false));
        }}
      />
    </>
  );
};

export default TableKirimJOCabang;
