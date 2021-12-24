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
      const data = {
        no_job_order: action.payload.data,
      };
      const response = await api.CloseJO.getDetailCloseJO(data);
      if (response.value?.status === "berhasil") {
        if (response.value.data.length === 0) {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
        } else {
          sweetalert.default.SuccessNoReload(response.value.pesan);
          dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
        }
      } else {
        dispatch(setDataDetailJOFailed({ error: response.error }));
      }
    }
  };

const setBeratAkhir =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_BERAT_AKHIR) {
      let berat_murni = getState().closejo.feedback[0]?.berat_out || 0;
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
      const response = await api.CloseJO.addCloseJOCheckout(onSendData);
      if (response.value !== null) {
        if (response.value.status === "berhasil") {
          sweetalert.default.Success(response.value.pesan);
        } else {
          sweetalert.default.Failed(response.value.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [getDataDetailJo, addCloseJO, setBeratAkhir];

export default data;
