import {
  setDataSaldoBahanStockSuccess,
  setDataSaldoBahanStockFailed,
  GET_ALL_SALDO_BAHAN_STOCK,
  ADD_DETAIL_JENIS_BAHAN,
  addDataDetailJenisBahanSuccess,
  addDataDetailBahanSuccess,
  ADD_DETAIL_BAHAN,
  ADD_PEMBUATAN_JENIS_BAHAN,
  DELETE_DETAIL_JENIS_BAHAN,
  DELETE_BAHAN,
  RESET_PEMBUATAN_JENIS_BAHAN,
  setDetailBillOfMaterials,
} from "../actions/pembuatanjenisbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import Swal from "sweetalert2";

const saldoBahanGetAll =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_BAHAN_STOCK) {
      api.PembuatanJenisBahan.getAllSaldoBahanStock().then((res) => {
        if (res.value !== null) {
          dispatch(setDataSaldoBahanStockSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataSaldoBahanStockFailed({ error: res.error }));
        }
      });
    }
  };

const addDetailJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DETAIL_JENIS_BAHAN) {
      const data = getState().form.FormPembuatanJenisBahanDetail?.values;
      let datalocal = [];
      if (
        data.berat_dibutuhkan === undefined ||
        data.berat_susut === undefined ||
        data.no_pohon === undefined
      ) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const dataDetail = getLocal("data_detail_jenis_bahan");
        api.PembuatanJenisBahan.getBillOfMaterials(data).then((res) => {
          if (res.value !== null) {
            dispatch(setDetailBillOfMaterials({ feedback: res.value }));
            writeLocal("data_detail_bahan", res.value);
            if (dataDetail === null || dataDetail.length === 0) {
              dispatch(addDataDetailJenisBahanSuccess({ feedback: data }));
              datalocal.push(data);
              writeLocal("data_detail_jenis_bahan", datalocal);
              sweetalert.default.Success("Berhasil Menambahkan Data !");
            } else {
              Swal.fire({
                title: "Add Data",
                text: "Apakah Anda Yakin Akan Mengganti Data Sebelumnya ?",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya",
              }).then((result) => {
                if (result.isConfirmed) {
                  sweetalert.default.Success("Berhasil Menambahkan Data !");
                  dispatch(addDataDetailJenisBahanSuccess({ feedback: data }));
                  datalocal.push(data);
                  writeLocal("data_detail_jenis_bahan", datalocal);
                }
              });
            }
          } else {
            dispatch(setDetailBillOfMaterials({ feedback: [] }));
          }
        });
      }
    }
  };

const addDetailBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DETAIL_BAHAN) {
      if (
        getLocal("data_detail_bahan") === undefined ||
        getLocal("data_detail_bahan") === null
      ) {
        const data = getState().form.FormTambahBahan?.values;
        let datalocal = [];
        if (data.berat_bahan === undefined) {
          sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
        } else if (!getLocal("data_detail_jenis_bahan")) {
          sweetalert.default.Failed(
            "Tambahkan Detail Jenis Bahan Terlebih Dahulu !"
          );
        } else {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
          dispatch(addDataDetailBahanSuccess({ feedback: data }));
          datalocal.push(data);
          writeLocal("data_detail_bahan", datalocal);
        }
      } else {
        const data = getState().form.FormTambahBahan?.values;
        let datalocal = getLocal("data_detail_bahan");
        const cekData = datalocal.find((val) => {
          return val.kode_bahan === data.kode_bahan;
        });
        if (data.berat === undefined) {
          sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
        } else if (!getLocal("data_detail_jenis_bahan")) {
          sweetalert.default.Failed(
            "Tambahkan Detail Jenis Bahan Terlebih Dahulu !"
          );
        } else if (cekData) {
          sweetalert.default.Failed(
            `Bahan ${data.kode_bahan} Sudah Ada Pada Tabel !`
          );
        } else {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
          dispatch(addDataDetailBahanSuccess({ feedback: data }));
          datalocal.push(data);
          writeLocal("data_detail_bahan", datalocal);
        }
      }
    }
  };

const addDataPembuatanJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_PEMBUATAN_JENIS_BAHAN) {
      const dataDetailJenisBahan = getLocal("data_detail_jenis_bahan");
      const dataDetailBahan = getLocal("data_detail_bahan");
      let dataDetailNewArr = [];
      dataDetailBahan.forEach((element) => {
        const row = {
          nama_bahan: element.kode_bahan,
          berat_bahan: parseFloat(element.berat),
        };
        dataDetailNewArr.push(row);
      });
      const onSendData = {
        berat: parseFloat(dataDetailJenisBahan[0].berat_dibutuhkan),
        berat_susut: parseFloat(dataDetailJenisBahan[0].berat_susut),
        detail_bahan: dataDetailNewArr,
        kode_jenis_bahan: dataDetailJenisBahan[0].kode_jenis_bahan,
        no_pohon: dataDetailJenisBahan[0].no_pohon,
      };
      api.PembuatanJenisBahan.addPembuatanJenisBahan(onSendData).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Membuat Bahan !");
          localStorage.removeItem("data_detail_jenis_bahan");
          localStorage.removeItem("data_detail_bahan");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Membuat Bahan !"
          );
        }
      });
    }
  };

const deleteDetailJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_DETAIL_JENIS_BAHAN) {
      // console.log(action.payload.data);
      const id = action.payload.data;
      const data = getLocal("data_detail_jenis_bahan");
      const dataFill = data.filter((val) => val.no_pohon !== id);
      writeLocal("data_detail_jenis_bahan", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const deleteBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_BAHAN) {
      const id = action.payload.data;
      const data = getLocal("data_detail_bahan");
      const dataFill = data.filter((val) => val.nama_bahan !== id);
      writeLocal("data_detail_bahan", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const resetPembuatanJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === RESET_PEMBUATAN_JENIS_BAHAN) {
      localStorage.removeItem("data_detail_bahan");
      localStorage.removeItem("data_detail_jenis_bahan");
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const data = [
  saldoBahanGetAll,
  addDetailJenisBahan,
  addDetailBahan,
  addDataPembuatanJenisBahan,
  deleteDetailJenisBahan,
  deleteBahan,
  resetPembuatanJenisBahan,
];

export default data;
