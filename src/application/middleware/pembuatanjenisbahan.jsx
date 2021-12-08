import {
  setDataSaldoBahanStockSuccess,
  setDataSaldoBahanStockFailed,
  GET_ALL_SALDO_BAHAN_STOCK,
  ADD_DETAIL_JENIS_BAHAN,
  addDataDetailJenisBahanSuccess,
  addDataDetailBahanSuccess,
  ADD_DETAIL_BAHAN,
} from "../actions/pembuatanjenisbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const saldoBahanGetAll =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_BAHAN_STOCK) {
      const response = await api.PembuatanJenisBahan.getAllSaldoBahanStock();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataSaldoBahanStockSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataSaldoBahanStockFailed({ error: response.error }));
      }
    }
  };

const addDetailJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DETAIL_JENIS_BAHAN) {
      const data = getState().form.FormPembuatanJenisBahanDetail?.values;
      log(data);
      let datalocal = [];
      if (
        data.berat_dibutuhkan === undefined ||
        data.berat_susut === undefined ||
        data.no_pohon === undefined
      ) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(addDataDetailJenisBahanSuccess({ feedback: data }));
        datalocal.push(data);
        writeLocal("data_detail_jenis_bahan", datalocal);
        window.location.reload();
      }
    }
  };

const addDetailBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DETAIL_BAHAN) {
      const data = getState().form.FormTambahBahan?.values;
      log(data);
      let datalocal = [];
      if (data.berat_bahan === undefined) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else if (!getLocal("data_detail_jenis_bahan")) {
        sweetalert.default.Failed(
          "Tambahkan Detail Jenis Bahan Terlebih Dahulu !"
        );
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(addDataDetailBahanSuccess({ feedback: data }));
        datalocal.push(data);
        writeLocal("data_detail_bahan", datalocal);
        window.location.reload();
      }
    }
  };

const data = [saldoBahanGetAll, addDetailJenisBahan, addDetailBahan];

export default data;
