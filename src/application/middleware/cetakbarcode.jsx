import { TextFile } from "../../infrastructure/helpers/text";
import {
  setNoIndukJobOrder,
  GET_NO_INDUK_JOB_ORDER,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  setDataByNoInduk,
  getDataByNoInduk,
  GET_DATA_BY_NO_JO,
  setDataByNoJO,
  getDataByNoJO,
  ADD_DATA_CETAK_BARCODE,
} from "../actions/cetakbarcode";

const cetakBarcodeFlow =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      api.CetakBarcode.getNoInduk().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setNoIndukJobOrder(res.value));
            dispatch(getDataByNoInduk(res.value[1].no_induk_job_order));
          } else {
            dispatch(setNoIndukJobOrder([]));
          }
        } else {
          dispatch(setNoIndukJobOrder([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const noInduk = action.payload.data;
      api.CetakBarcode.getNoJO(noInduk).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataByNoInduk(res.value));
            dispatch(getDataByNoJO(res.value[0].no_job_order));
          } else {
            dispatch(setDataByNoInduk([]));
          }
        } else {
          dispatch(setDataByNoInduk([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_JO) {
      const noInduk = action.payload.data;
      api.CetakBarcode.getDetailByNoJO(noInduk).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataByNoJO(res.value[0]));
          } else {
            dispatch(setDataByNoJO(undefined));
          }
        } else {
          dispatch(setDataByNoJO(undefined));
        }
      });
    }
    if (action.type === ADD_DATA_CETAK_BARCODE) {
      const data = getState().form.FormCetakBarcode.values;
      document.getElementById("nota_ganerate").value = data.no_job_order;
      setTimeout(() => {
        TextFile("autoprint_barcode");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }, 300);
    }
  };

const data = [cetakBarcodeFlow];

export default data;
