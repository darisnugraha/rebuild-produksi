import {
  setDataDivisiSuccess,
  setDataDivisiFailed,
  GET_ALL_DIVISI,
  ADD_KIRIM_BAHAN_ADMIN_BAHAN,
  GET_TUKANG_DIVISI,
  setTukangDivisiSuccess,
  setTukangDivisiFailed,
} from "../actions/kirimbahancabang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const tukangDivisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TUKANG_DIVISI) {
      const divisi = action.payload.data;
      api.KirimBahanCabang.getTukangDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setTukangDivisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setTukangDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const divisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DIVISI) {
      api.KirimBahanCabang.getAllDivisi().then((res) => {
        if (res.value !== null) {
          dispatch(setDataDivisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const addDataKirimBahanAdminBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_BAHAN_ADMIN_BAHAN) {
      const data = getState().form.FormKirimBahanCabang.values;
      if (data !== undefined) {
        data.berat = parseFloat(data.berat);
        const onSend = {
          kode_toko_tujuan: data.cabang_tujuan.split("|")[0],
          nama_bahan: data.nama_bahan,
          berat: parseFloat(data.berat),
        };
        api.KirimBahanCabang.addKirimBahanCabang(onSend).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(
              res.value?.message || "Berhasil Mengirim Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Mengirim Data !"
            );
          }
        });
      } else {
        sweetalert.default.Failed("Mohon Isi Form Terlebih Dahulu !");
      }
    }
  };

const data = [tukangDivisGetAll, divisGetAll, addDataKirimBahanAdminBahan];

export default data;
