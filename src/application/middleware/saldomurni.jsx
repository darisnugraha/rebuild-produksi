import {
  setDataSaldoMurniSuccess,
  setDataSaldoMurniFailed,
  GET_ALL_SALDO_MURNI,
  GET_SALDO_MURNI_ID,
  setTambahSaldoMurniForm,
  setDataSaldoMurniID,
  setAmbilSaldoMurniForm,
} from "../actions/saldomurni";

const saldoMurniGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_MURNI) {
      const response = await api.SaldoMurni.getAllSaldoMurni();
      if (response.value?.status === "berhasil") {
        dispatch(setDataSaldoMurniSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataSaldoMurniFailed({ error: response.error }));
      }
    }
  };

const saldomurniGetDataID =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_MURNI_ID) {
      if (action.payload.type === "ADD") {
        dispatch(setTambahSaldoMurniForm(true));
        const dataSaldoMurniAll = getState().saldomurni.feedback;
        const dataSaldoMurniFilter = dataSaldoMurniAll.filter((item) => {
          return item.nama_bahan === action.payload.data;
        });
        dispatch(setDataSaldoMurniID({ dataSaldoMurni: dataSaldoMurniFilter }));
      } else {
        dispatch(setAmbilSaldoMurniForm(true));
        const dataSaldoMurniAll = getState().saldomurni.feedback;
        const dataSaldoMurniFilter = dataSaldoMurniAll.filter((item) => {
          return item.nama_bahan === action.payload.data;
        });
        dispatch(setDataSaldoMurniID({ dataSaldoMurni: dataSaldoMurniFilter }));
      }
    }
  };

const data = [saldoMurniGetAll, saldomurniGetDataID];

export default data;
