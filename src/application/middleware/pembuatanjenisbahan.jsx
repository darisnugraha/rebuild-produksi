import {
  setDataSaldoBahanStockSuccess,
  setDataSaldoBahanStockFailed,
  GET_ALL_SALDO_BAHAN_STOCK,
  ADD_DETAIL_JENIS_BAHAN,
  addDataDetailJenisBahanSuccess,
  addDataDetailBahanSuccess,
  ADD_DETAIL_BAHAN,
  ADD_PEMBUATAN_JENIS_BAHAN,
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
      if (
        getLocal("data_detail_bahan") === undefined ||
        getLocal("data_detail_bahan") === null
      ) {
        const data = getState().form.FormTambahBahan?.values;
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
        }
      } else {
        const data = getState().form.FormTambahBahan?.values;
        let datalocal = getLocal("data_detail_bahan");
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
        }
      }
    }
  };

const addDataPembuatanJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_PEMBUATAN_JENIS_BAHAN) {
      const dataDetailJenisBahan = getLocal("data_detail_jenis_bahan");
      const dataDetailBahan = getLocal("data_detail_bahan");
      const onSendData = {
        berat: parseFloat(dataDetailJenisBahan[0].berat_dibutuhkan),
        berat_susut: parseFloat(dataDetailJenisBahan[0].berat_susut),
        detail_bahan: dataDetailBahan,
        kode_jenis_bahan: dataDetailJenisBahan[0].kode_jenis_bahan,
        pohon: dataDetailJenisBahan[0].no_pohon,
      };
      const response = await api.PembuatanJenisBahan.addPembuatanJenisBahan(
        onSendData
      );
      if (response.value !== null) {
        sweetalert.default.Success(response.value.pesan);
        localStorage.removeItem("data_detail_jenis_bahan");
        localStorage.removeItem("data_detail_bahan");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  saldoBahanGetAll,
  addDetailJenisBahan,
  addDetailBahan,
  addDataPembuatanJenisBahan,
];

export default data;
