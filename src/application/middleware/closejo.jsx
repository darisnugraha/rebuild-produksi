import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_ALL_DETAIL_JO,
  ADD_CLOSE_JO,
  SET_BERAT_AKHIR,
  setDataBeratAkhirSuccess,
  setDataBeratClose,
} from "../actions/closejo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_JO) {
      const no_job_order = action.payload.data;
      api.CloseJO.getDetailCloseJO(no_job_order.toUpperCase()).then((res) => {
        if (res.value !== null) {
          if (res.value.length === 0) {
            sweetalert.default.Failed("Data Yg Anda Cari Tidak Ada !");
            dispatch(setDataDetailJOSuccess({ feedback: res.value }));
          } else {
            sweetalert.default.SuccessNoReload(res.value.pesan);
            dispatch(setDataDetailJOSuccess({ feedback: res.value }));
          }
        } else {
          dispatch(setDataDetailJOFailed({ error: res.error }));
        }
      });
    }
  };

const setBeratAkhir =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_BERAT_AKHIR) {
      let berat_murni = getState().closejo.feedback?.berat_out || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataBeratAkhirSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratClose({ beratClose: berat_terima }));
    }
  };

const addCloseJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_CLOSE_JO) {
      const data = getState().form.FormCloseJO.values;
      const onSendData = {
        berat_close: parseFloat(data.berat_close),
        keterangan: data.keterangan,
        no_job_order: data.no_job_order,
      };
      api.CloseJO.addCloseJOCheckout(onSendData).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "JO Berhasil di Close !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Terjadi Kesalahan !"
          );
        }
      });
    }
  };

const data = [getDataDetailJo, addCloseJO, setBeratAkhir];

export default data;
