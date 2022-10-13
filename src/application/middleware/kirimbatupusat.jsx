import {
  setDataJOKirimBatuPusatSuccess,
  setDataJOKirimBatuPusatFailed,
  GET_ALL_JO_KIRIM_BATU,
  SET_DETAIL_JO_LOCAL,
  GET_ALL_DETAIL_BATU,
  setDataDetailBatuSuccess,
  setDataDetailBatuFailed,
  getAllDetailBatu,
  COUNT_BERAT_BATU_KIRIM,
  setCountBeratBatuSuccess,
  SET_BATU_LOCAL,
  // addCartKirimBatuFailed,
  addCartKirimBatuSuccess,
  CHECKOUT_KIRIM_BATU,
  checkoutKirimBatuSuccess,
  checkoutKirimBatuFailed,
} from "../actions/kirimbatupusat";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataJOKirimBatuPusat =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_JO_KIRIM_BATU) {
      api.KirimBatuPusat.getAllKirimBatuPusat({
        noJO: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            writeLocal("data_detail_jo_batu", res.value);
            dispatch(setDataJOKirimBatuPusatSuccess({ feedback: res.value }));
            dispatch(
              getAllDetailBatu({ noJO: res.value[0].no_admin_terima_batu })
            );
          } else {
            sweetalert.default.Failed("Data yg Anda Cari Tidak Ada !");
          }
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Terjadi Kesalahan !"
          );
          dispatch(setDataJOKirimBatuPusatFailed({ error: res.error }));
        }
      });
    }
  };

const setDataDetailJOLocal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_DETAIL_JO_LOCAL) {
      const dataform = getState().form.FormDetailJOKirimBatu.values;
      if (dataform.no_job_order === undefined) {
        sweetalert.default.Failed("Mohon Lengkapi Form !");
      } else {
        writeLocal("data_jo_kirim_batu_head", dataform);
        sweetalert.default.SuccessNoReload("Berhasil Menyimpan Data !");
      }
    }
  };

const getDataDetailBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_BATU) {
      const noadmminterimabatu = action.payload.data;
      api.KirimBatuPusat.getDetailBatu(noadmminterimabatu).then((res) => {
        if (res.value !== null) {
          dispatch(setDataDetailBatuSuccess({ feedback: res.value }));
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Terjadi Kesalahan !"
          );
          dispatch(setDataDetailBatuFailed({ error: res.error }));
        }
      });
    }
  };

const countBeratBatuKirim =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_BATU_KIRIM) {
      const jumlahkirim = parseFloat(action.payload.data) || 0;
      const beratbatu = getState().form.FormDetailBatu.values.berat_batu || 0;
      let total = parseFloat(beratbatu) * jumlahkirim;
      dispatch(setCountBeratBatuSuccess({ feedback: total }));
    }
  };

const setDataBatuLocal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_BATU_LOCAL) {
      const dataform = getState().form.FormDetailBatu.values;
      const datakirim = {
        berat_batu: dataform.berat_kirim,
        jumlah_batu: dataform.jumlah_kirim,
        kode_batu: dataform.kode_batu,
        no_job_order: getState().kirimbatupusat.no_job_order,
        kode_barang: getLocal("data_jo_kirim_batu_head").kode_barang,
        kode_divisi: getLocal("data_jo_kirim_batu_head").divisi,
      };
      if (getLocal("data_detail_batu_head") === null) {
        let data = [];
        data.push(datakirim);
        writeLocal("detail_batu_head", data);
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(addCartKirimBatuSuccess({ feedback: data }));
      } else {
        let data = getLocal("detail_batu_head");
        data.push(datakirim);
        writeLocal("detail_batu_head", data);
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(addCartKirimBatuSuccess({ feedback: data }));
      }
    }
  };

const checkoutDataKirimBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === CHECKOUT_KIRIM_BATU) {
      // const data = getLocal("detail_batu_head");
      const data_jo = getLocal("data_jo_kirim_batu_head");
      const data_detail_jo = getLocal("data_detail_jo_batu");
      const datakirim = {
        no_job_order: getState().kirimbatupusat.no_job_order,
        divisi: data_jo.divisi,
        kode_barang: data_jo.kode_barang,
        kode_jenis_bahan: data_jo.kode_jenis_bahan,
        no_terima_batu: data_detail_jo[0].no_admin_terima_batu,
      };
      api.KirimBatuPusat.addCheckoutKirimBatu(datakirim).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("data_jo_kirim_batu_head");
          localStorage.removeItem("data_detail_jo_batu");
          localStorage.removeItem("detail_batu_head");
          dispatch(checkoutKirimBatuSuccess({ feedback: res.value }));
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          dispatch(checkoutKirimBatuFailed({ error: res.error }));
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [
  getDataJOKirimBatuPusat,
  setDataDetailJOLocal,
  getDataDetailBatu,
  countBeratBatuKirim,
  setDataBatuLocal,
  checkoutDataKirimBatu,
];

export default data;
