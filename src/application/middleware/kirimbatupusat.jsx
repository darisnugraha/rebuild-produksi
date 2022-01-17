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
  addCartKirimBatuFailed,
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
      const response = await api.KirimBatuPusat.getAllKirimBatuPusat({
        noJO: action.payload.data,
      });
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          if (response.value?.data.length === 0) {
            sweetalert.default.Failed(response.value.pesan);
          } else {
            writeLocal("data_detail_jo_batu", response.value.data);
            dispatch(
              setDataJOKirimBatuPusatSuccess({ feedback: response.value.data })
            );
            dispatch(
              getAllDetailBatu({ noJO: response.value.data[0].kode_batu })
            );
          }
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(
            setDataJOKirimBatuPusatFailed({ error: response.value.pesan })
          );
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      const nojo = getState().kirimbatupusat.no_job_order;
      const data = {
        kode_batu: action.payload.data,
        no_job_order: nojo,
        parameter: "DETAIL_BATU",
      };
      const response = await api.KirimBatuPusat.getDetailBatu(data);
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          dispatch(setDataDetailBatuSuccess({ feedback: response.value.data }));
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataDetailBatuFailed({ error: response.value.pesan }));
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
        const response = await api.KirimBatuPusat.addKirimBatuCart(datakirim);
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            if (response.value.data.length === 0) {
              sweetalert.default.Failed(response.value.pesan);
            } else {
              data.push(datakirim);
              writeLocal("detail_batu_head", data);
              sweetalert.default.Success(response.value.pesan);
              dispatch(
                addCartKirimBatuSuccess({ feedback: response.value.data })
              );
            }
          } else {
            sweetalert.default.Failed(response.value.pesan);
            dispatch(addCartKirimBatuFailed({ error: response.value.pesan }));
          }
        } else {
          dispatch(addCartKirimBatuFailed({ error: response.error }));
          sweetalert.default.Failed(response.error.data.pesan);
        }
      } else {
        let data = getLocal("detail_batu_head");
        const response = await api.KirimBatuPusat.addKirimBatuCart(datakirim);
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            if (response.value.data.length === 0) {
              sweetalert.default.Failed(response.value.pesan);
            } else {
              data.push(datakirim);
              writeLocal("detail_batu_head", data);
              sweetalert.default.Success(response.value.pesan);
              dispatch(
                addCartKirimBatuSuccess({ feedback: response.value.data })
              );
            }
          } else {
            sweetalert.default.Failed(response.value.pesan);
            dispatch(addCartKirimBatuFailed({ error: response.value.pesan }));
          }
        } else {
          dispatch(addCartKirimBatuFailed({ error: response.error }));
          sweetalert.default.Failed(response.error.data.pesan);
        }
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
      const datakirim = {
        no_job_order: getState().kirimbatupusat.no_job_order,
        kode_divisi: getLocal("data_jo_kirim_batu_head").divisi,
      };
      const response = await api.KirimBatuPusat.addCheckoutKirimBatu(datakirim);
      if (response.value !== null) {
        if (response.value.status === "berhasil") {
          if (response.value.data.length === 0) {
            sweetalert.default.Failed(response.value.pesan);
          } else {
            localStorage.removeItem("data_jo_kirim_batu_head");
            localStorage.removeItem("data_detail_jo_batu");
            localStorage.removeItem("detail_batu_head");
            dispatch(
              checkoutKirimBatuSuccess({ feedback: response.value.data })
            );
            sweetalert.default.Success(response.value.pesan);
          }
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(checkoutKirimBatuFailed({ error: response.value.pesan }));
        }
      } else {
        dispatch(checkoutKirimBatuFailed({ error: response.error }));
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
