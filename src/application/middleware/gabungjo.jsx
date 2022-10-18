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
      api.GabungJO.getDetailJOGabung(action.payload.data).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            const berat_dua = parseFloat(res.value[0].berat_akhir);
            const berat_satu =
              parseFloat(getState().form.FormGabungJO.values.berat_akhir_dua) ||
              0;
            let total = 0;
            total = berat_satu + berat_dua;
            dispatch(
              setDataJobOrderSuccess({
                feedback: res.value,
                noJO: action.payload.data,
                beratGabung: total,
              })
            );
            writeLocal("gabungJOSatu", action.payload.data);
          } else {
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
            dispatch(setDataJobOrderFailed({ error: res.value }));
          }
        } else {
          sweetalert.default.Failed(res.error?.data.message);
          dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
          dispatch(setDataJobOrderFailed({ error: res.error }));
        }
      });
    } else if (action.type === GET_ALL_JOB_ORDER_DUA) {
      const JO_satu = getLocal("gabungJOSatu");
      if (JO_satu === action.payload.data) {
        sweetalert.default.Failed("No Jo Ini Sudah Ada !");
      } else {
        api.GabungJO.getDetailJOGabung(action.payload.data).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              const berat_satu =
                parseFloat(getState().form.FormGabungJO.values.berat_akhir) ||
                0;
              const berat_dua = parseFloat(res.value[0].berat_akhir);
              let total = 0;
              total = berat_satu + berat_dua;
              dispatch(
                setDataJobOrderSuccessDua({
                  feedback: res.value,
                  noJO: action.payload.data,
                  beratGabung: total,
                })
              );
            } else {
              sweetalert.default.Failed("Data Tidak Ada !");
              dispatch(
                setDataJobOrderSuccessDua({
                  feedback: [],
                  noJO: "",
                  beratGabung: 0,
                })
              );
              dispatch(setDataJobOrderFailedDua({ error: res.value }));
            }
          } else {
            sweetalert.default.Failed(res.error?.data.message);
            dispatch(
              setDataJobOrderSuccessDua({
                feedback: [],
                noJO: "",
                beratGabung: 0,
              })
            );
            dispatch(setDataJobOrderFailedDua({ error: res.error }));
          }
        });
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
        asal_divisi: data.asal_divisi,
        asal_divisi_dua: data.asal_divisi_dua,
        berat_akhir: parseFloat(data.berat_gabung),
        berat_in: parseFloat(data.berat_akhir),
        berat_out: parseFloat(data.berat_akhir_dua),
        kode_jenis_bahan: data.kode_jenis_bahan,
        kode_jenis_bahan_dua: data.kode_jenis_bahan_dua,
        no_job_order: data.no_job_order,
        no_job_order_dua: data.no_job_order_dua,
      };
      api.GabungJO.addGabungJO(onSend).then((res) => {
        if (res.value !== null) {
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

const data = [getDataJO, addDataGabungJO];

export default data;
