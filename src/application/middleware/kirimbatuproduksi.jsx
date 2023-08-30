import {
  setDataJoKirimBatuProduksiSuccess,
  setDataJoKirimBatuProduksiFailed,
  GET_DETAIL_JO_BY_ID,
  GET_BERAT_BATU,
  setBeratBatuSuccess,
  COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  setCountBeratKirimBatuProduksi,
  POST_DATA_KIRIM_BATU_LOKAL,
  setDataKirimBatuProduksiSuccess,
  setDataHistoryKirimBatuProduksiSuccess,
  setDataHistoryKirimBatuProduksiFailed,
  ADD_DATA_KIRIM_BATU,
  POST_DATA_DETAIL_BATU_LOKAL,
  setDataDetailBatuProduksiSuccess,
} from "../actions/kirimbatuproduksi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const kirimbatuproduksiGetJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_JO_BY_ID) {
      api.KirimBatuProduksi.getAllKirimBatuProduksi(action.payload.data).then(
        (res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              dispatch(
                setDataJoKirimBatuProduksiSuccess({
                  feedback: res.value,
                })
              );
            } else {
              sweetalert.default.Failed("Data yg Anda Cari Tidak Ada !");
            }
          } else {
            dispatch(setDataJoKirimBatuProduksiFailed({ error: res.error }));
          }
        }
      );
    }
  };

const kirimbatuGetBeratBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BERAT_BATU) {
      const dataMasterBatu = getState().masterbatu.feedback;
      const dataMasterBatuFilter = dataMasterBatu.filter((item) => {
        return item.kode_batu === action.payload.data;
      });
      dispatch(setBeratBatuSuccess({ dataBatu: dataMasterBatuFilter }));
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_KIRIM_BATU_PRODUKSI) {
      let total = 0;
      const data = getState().kirimbatuproduksi.dataBatu[0].status_sintetis;
      const berat = action.payload;
      if (data) {
        dispatch(setCountBeratKirimBatuProduksi(berat.toFixed(3)));
      } else {
        total = berat * 0.2;
        dispatch(setCountBeratKirimBatuProduksi(total.toFixed(3)));
      }
    }
  };

const simpanDataKirimBatuLocal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === POST_DATA_KIRIM_BATU_LOKAL) {
      if (
        getLocal("data_kirim_batu_produksi") === undefined ||
        getLocal("data_kirim_batu_produksi") === null
      ) {
        const data = getState().form.FormTambahKirimBatuProduksi.values;
        let datalocal = [];
        if (data.no_job_order === undefined) {
          sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
        } else {
          api.KirimBatuProduksi.getHistoryKirimBatuProduksi(
            data.no_job_order
          ).then((res) => {
            if (res.value !== null) {
              dispatch(
                setDataHistoryKirimBatuProduksiSuccess({ feedback: res.value })
              );
              writeLocal("data_history_kirim_batu_produksi", res.value);
            } else {
              dispatch(setDataHistoryKirimBatuProduksiFailed({ error: [] }));
            }
          });
          sweetalert.default.Success("Berhasil Menambahkan Data !");
          dispatch(setDataKirimBatuProduksiSuccess({ feedback: data }));
          datalocal.push(data);
          writeLocal("data_kirim_batu_produksi", datalocal);
        }
      } else {
        const data = getState().form.FormTambahKirimBatuProduksi.values;
        let datalocal = getLocal("data_kirim_batu_produksi");
        const datalocalFill = datalocal.filter((item) => {
          return item.no_job_order === data.no_job_order;
        });
        if (datalocalFill.length === 0) {
          sweetalert.default.Failed("No Job Order Harus Sama !");
        } else {
          if (data.no_job_order === undefined) {
            sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
          } else {
            api.KirimBatuProduksi.getHistoryKirimBatuProduksi(
              data.no_job_order
            ).then((res) => {
              if (res.value !== null) {
                dispatch(
                  setDataHistoryKirimBatuProduksiSuccess({
                    feedback: res.value,
                  })
                );
                writeLocal("data_history_kirim_batu_produksi", res.value);
              } else {
                dispatch(setDataHistoryKirimBatuProduksiFailed({ error: [] }));
              }
            });
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataKirimBatuProduksiSuccess({ feedback: data }));
            datalocal.push(data);
            writeLocal("data_kirim_batu_produksi", datalocal);
            window.location.reload();
          }
        }
      }
    }
    if (action.type === POST_DATA_DETAIL_BATU_LOKAL) {
      if (
        getLocal("data_detail_kirim_batu") === undefined ||
        getLocal("data_detail_kirim_batu") === null
      ) {
        const data = getState().form.FormDetailBatuProduksi.values;
        let datalocal = [];
        if (data.kode_batu === undefined) {
          sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
        } else if (data.jumlah_kirim === 0 || data.berat_kirim === 0) {
          sweetalert.default.Failed("Jumlah Kirim Minimal 1");
        } else {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
          dispatch(setDataDetailBatuProduksiSuccess({ feedback: data }));
          datalocal.push(data);
          writeLocal("data_detail_kirim_batu", datalocal);
        }
      } else {
        const data = getState().form.FormTambahKirimBatuProduksi.values;
        let datalocal = getLocal("data_detail_kirim_batu");
        const datalocalFill = datalocal.filter((item) => {
          return item.no_job_order === data.no_job_order;
        });
        if (datalocalFill.length === 0) {
          sweetalert.default.Failed("No Job Order Harus Sama !");
        } else {
          if (data.no_job_order === undefined) {
            sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
          } else if (data.jumlah_kirim === 0 || data.berat_kirim === 0) {
            sweetalert.default.Failed("Jumlah Kirim Minimal 1");
          } else {
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataDetailBatuProduksiSuccess({ feedback: data }));
            datalocal.push(data);
            writeLocal("data_detail_kirim_batu", datalocal);
            window.location.reload();
          }
        }
      }
    }
  };

const addDataKirimBatuProduksiPost =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_KIRIM_BATU) {
      const data = getLocal("data_kirim_batu_produksi");
      const dataBatu = getLocal("data_detail_kirim_batu");
      let detail_batu = [];
      for (let index = 0; index < dataBatu.length; index++) {
        const data_detail = {
          kode_batu: dataBatu[index].kode_batu,
          jumlah_kirim: parseFloat(dataBatu[index].jumlah_kirim),
          berat_kirim: parseFloat(dataBatu[index].berat_kirim),
        };
        detail_batu.push(data_detail);
      }
      const onSend = {
        detail_batu,
        kode_barang: data[0].kode_barang,
        kode_jenis_bahan: data[0].kode_jenis_bahan,
        no_job_order: data[0].no_job_order,
      };
      api.KirimBatuProduksi.addKirimBatuProduksi(onSend).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("data_history_kirim_batu_produksi");
          localStorage.removeItem("data_detail_kirim_batu");
          localStorage.removeItem("data_kirim_batu_produksi");
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [
  kirimbatuproduksiGetJO,
  kirimbatuGetBeratBatu,
  countberatbatu,
  simpanDataKirimBatuLocal,
  addDataKirimBatuProduksiPost,
];

export default data;
