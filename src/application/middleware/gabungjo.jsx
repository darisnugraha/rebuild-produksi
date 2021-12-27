import {
  setDataJobOrderSuccess,
  setDataJobOrderFailed,
  GET_ALL_JOB_ORDER,
  GET_ALL_JOB_ORDER_DUA,
  setDataJobOrderSuccessDua,
  setDataJobOrderFailedDua,
  ADD_GABUNG_JO,
} from "../actions/gabungjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_JOB_ORDER) {
      const response = await api.GabungJO.getDetailJOGabung(
        action.payload.data
      );
      if (response.value !== null) {
        if (response.value.data.length !== 0) {
          const berat_dua = parseFloat(response.value.data[0].berat_akhir);
          const berat_satu =
            parseFloat(getState().form.FormGabungJO.values.berat_akhir_dua) ||
            0;
          let total = 0;
          total = berat_satu + berat_dua;
          dispatch(
            setDataJobOrderSuccess({
              feedback: response.value.data,
              noJO: action.payload.data,
              beratGabung: total,
            })
          );
          writeLocal("gabungJOSatu", action.payload.data);
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
          dispatch(setDataJobOrderFailed({ error: response.value.pesan }));
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
        dispatch(setDataJobOrderFailed({ error: response.error }));
      }
    } else if (action.type === GET_ALL_JOB_ORDER_DUA) {
      const JO_satu = getLocal("gabungJOSatu");
      if (JO_satu === action.payload.data) {
        sweetalert.default.Failed("No Jo Ini Sudah Ada !");
      } else {
        const response = await api.GabungJO.getDetailJOGabung(
          action.payload.data
        );
        if (response.value !== null) {
          if (response.value.data.length !== 0) {
            const berat_satu =
              parseFloat(getState().form.FormGabungJO.values.berat_akhir) || 0;
            const berat_dua = parseFloat(response.value.data[0].berat_akhir);
            let total = 0;
            total = berat_satu + berat_dua;
            dispatch(
              setDataJobOrderSuccessDua({
                feedback: response.value.data,
                noJO: action.payload.data,
                beratGabung: total,
              })
            );
          } else {
            sweetalert.default.Failed(response.value.pesan);
            dispatch(
              setDataJobOrderSuccessDua({
                feedback: [],
                noJO: "",
                beratGabung: 0,
              })
            );
            dispatch(setDataJobOrderFailedDua({ error: response.value.pesan }));
          }
        } else {
          sweetalert.default.Failed(response.error.data.pesan);
          dispatch(
            setDataJobOrderSuccessDua({
              feedback: [],
              noJO: "",
              beratGabung: 0,
            })
          );
          dispatch(setDataJobOrderFailedDua({ error: response.error }));
        }
      }
    }
  };

const addDataGabungJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_GABUNG_JO) {
      const data = getState().form.FormGabungJO.values;
      const onSend = {
        asal_divisi: "ADMIN",
        asal_divisi_dua: "ADMIN",
        berat_akhir: parseFloat(data.berat_gabung),
        berat_in: parseFloat(data.berat_akhir),
        berat_out: parseFloat(data.berat_akhir_dua),
        kode_jenis_bahan: data.kode_jenis_bahan,
        kode_jenis_bahan_dua: data.kode_jenis_bahan_dua,
        no_job_order: data.no_job_order,
        no_job_order_dua: data.no_job_order_dua,
      };
      const response = await api.GabungJO.addGabungJO(onSend);
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          sweetalert.default.Success(response.value.pesan);
        } else {
          sweetalert.default.Failed(response.value.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [getDataJO, addDataGabungJO];

export default data;
