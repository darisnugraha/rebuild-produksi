import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_ALL_DETAIL_JO,
  ADD_TERIMA_JO,
  setNoIndukJobOrder,
  GET_NO_INDUK_JOB_ORDER,
  getDataByNoInduk,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  setDataByNoInduk,
  getAllDetailJO,
  ADD_TERIMA_JO_LOCAL,
  DELETE_DATA_LOCAL_TERIMA_JO,
  GET_ALL_CABANG,
  setAllCabang,
  GET_TUKANG_BY_DIVISI,
  setTukangByDivisi,
} from "../actions/terimajocabang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";

const getDataDetailJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TUKANG_BY_DIVISI) {
      const divisi = action.payload.data;
      api.TerimaJOCabang.getTukangByDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setTukangByDivisi(res.value));
        } else {
          dispatch(setTukangByDivisi([]));
        }
      });
    }
    if (action.type === GET_ALL_CABANG) {
      api.TerimaJOCabang.getAllCabang().then((res) => {
        if (res.value !== undefined) {
          const kodeToko = getLocal("tp_system").kode_toko;
          dispatch(
            setAllCabang(res.value.filter((val) => val.kode_toko !== kodeToko))
          );
        } else {
          dispatch(setAllCabang([]));
        }
      });
    }
    if (action.type === GET_ALL_DETAIL_JO) {
      const divisi = localStorage.getItem("divisi").toUpperCase();
      const url = getLocal("url_cabang");
      const data = {
        nama_divisi:
          divisi === "Admin" || divisi === "ADMIN"
            ? "ADMIN PUSAT"
            : divisi.toUpperCase(),
        no_job_order: action.payload.data,
      };
      const type = action.payload.dataType;
      api.TerimaJOCabang.getDetailTerimaJO(url, data).then((res) => {
        if (type === "CHANGE") {
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Tidak Ada !");
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
              dispatch(
                change(
                  "FormTerimaJOCabang",
                  "kode_barang",
                  res.value[0].kode_barang
                )
              );
              dispatch(
                change(
                  "FormTerimaJOCabang",
                  "nama_barang",
                  res.value[0].nama_barang
                )
              );
              dispatch(
                change(
                  "FormTerimaJOCabang",
                  "kode_jenis_bahan",
                  res.value[0].kode_jenis_bahan
                )
              );
              dispatch(
                change(
                  "FormTerimaJOCabang",
                  "jumlah_akhir",
                  res.value[0].stock_akhir
                )
              );
              dispatch(
                change(
                  "FormTerimaJOCabang",
                  "berat_akhir",
                  res.value[0].berat_akhir
                )
              );
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        } else {
          if (res.value !== null) {
            if (res.value.length === 0) {
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
            } else {
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        }
      });
    }
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      const kodeToko = getLocal("tp_system").kode_toko;
      const kodeTokoAsal = action.payload.data.split("|")[0];
      const url = action.payload.data.split("|")[1];
      api.TerimaJOCabang.getNoIndukJO(url, kodeToko, kodeTokoAsal).then(
        (res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              writeLocal("url_cabang", url);
              dispatch(setNoIndukJobOrder(res.value));
              dispatch(getDataByNoInduk(res.value[1]?.no_induk_job_order));
            } else {
              dispatch(setNoIndukJobOrder([]));
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
            }
          } else {
            dispatch(setNoIndukJobOrder([]));
          }
        }
      );
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const id = action.payload.data;
      const divisi = getLocal("divisi");
      const url = getLocal("url_cabang");
      const dataKirim = {
        no_induk: id,
        divisi:
          divisi === "Admin" || divisi === "ADMIN"
            ? "ADMIN PUSAT"
            : divisi.toUpperCase(),
      };
      const dataLocal = getLocal("terima_jo_head_cabang");
      api.TerimaJOCabang.getJobOrderDetail(url, dataKirim).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            if (dataLocal !== null) {
              const dataArr = res.value.filter((val) => {
                return !dataLocal.some((item) => {
                  return val.no_job_order === item.no_job_order;
                });
              });

              dispatch(setDataByNoInduk(dataArr));
              if (dataArr.length !== 0) {
                dispatch(
                  getAllDetailJO({
                    noJobOrder: dataArr[0]?.no_job_order,
                    type: "LOAD",
                  })
                );
              }
            } else {
              dispatch(setDataByNoInduk(res.value));
              dispatch(
                getAllDetailJO({
                  noJobOrder: res.value[0]?.no_job_order,
                  type: "LOAD",
                })
              );
            }
          } else {
            dispatch(setDataByNoInduk([]));
            dispatch(setDataDetailJOSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setDataByNoInduk([]));
        }
      });
    }
  };

const addTerimaJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_JO) {
      const dataTerimaJO = getLocal("terima_jo_head_cabang");
      dataTerimaJO.forEach((element) => {
        delete element.no_induk_job_order;
      });
      const kodeToko = getLocal("tp_system").kode_toko;
      const onSendCheckOut = {
        kode_toko: kodeToko,
        terima_job_order: dataTerimaJO,
      };
      api.TerimaJOCabang.addTerimaJOCheckout(onSendCheckOut).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("terima_jo_head_cabang");
          sweetalert.default.Success(
            res.value.message || "Berhasil Menyimpan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menyimpan Data !"
          );
        }
      });
    }
    if (action.type === ADD_TERIMA_JO_LOCAL) {
      const dataTerimaJO = getState().form.FormTerimaJOCabang.values;
      if (dataTerimaJO.tukang_terima === undefined) {
        sweetalert.default.Failed("Mohon Pilih Tukang Terlebih Dahulu!");
        return false;
      }
      if (dataTerimaJO.no_job_order === undefined) {
        sweetalert.default.Failed("Mohon Pilih Job Order Terlebih Dahulu!");
        return false;
      }
      if (dataTerimaJO.no_induk_job_order === undefined) {
        sweetalert.default.Failed(
          "Mohon Pilih No Induk Job Order Terlebih Dahulu!"
        );
        return false;
      }
      const newArr = [];
      const onSendCheckOut = {
        no_job_order: dataTerimaJO.no_job_order,
        divisi_tujuan: "ADMIN PUSAT",
        tukang_tujuan: dataTerimaJO.tukang_terima,
        kode_barang: dataTerimaJO.kode_barang,
        kode_jenis_bahan: dataTerimaJO.kode_jenis_bahan,
        jumlah_terima: parseFloat(dataTerimaJO.berat_akhir),
        berat_terima: parseFloat(dataTerimaJO.berat_akhir),
        no_induk_job_order: dataTerimaJO.no_induk_job_order,
      };
      newArr.push(onSendCheckOut);
      writeLocal("terima_jo_head_cabang", newArr);
      sweetalert.default.Success("Berhasil Menyimpan Data !");
    }
    if (action.type === DELETE_DATA_LOCAL_TERIMA_JO) {
      const id = action.payload.data;
      const data = getLocal("terima_jo_head_cabang");
      const dataFill = data.filter((val) => val.no_job_order !== id);
      writeLocal("terima_jo_head_cabang", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const data = [getDataDetailJo, addTerimaJO];

export default data;
