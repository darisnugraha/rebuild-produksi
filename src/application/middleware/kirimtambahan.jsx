import {
  setDataAsalStockBahanSuccess,
  setDataAsalStockBahanFailed,
  GET_ALL_ASAL_STOCK_BAHAN,
  GET_STOCK_BAHAN_ADMIN,
  setDataStockBahanAdminByStaffSuccess,
  setDataStockBahanAdminByStaffFailed,
  ADD_KIRIM_TAMBAHAN_CART,
  ADD_KIRIM_TAMBAHAN_DIVISI,
  DELETE_KIRIM_TAMBAHAN_CART,
  ADD_KIRIM_TAMBAHAN_CHECKOUT,
} from "../actions/kirimtambahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAsalStockBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_ASAL_STOCK_BAHAN) {
      api.KirimTambahan.getAllAsalStockBahan().then((res) => {
        if (res.value !== null) {
          dispatch(setDataAsalStockBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataAsalStockBahanFailed({ error: res.error }));
        }
      });
    }
  };

const getStockBahanAdmin =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_STOCK_BAHAN_ADMIN) {
      if (action.payload.data === null) {
        const staffKirim = getState().form.FormDetailTambahan.values.saldo_asal;
        const data = {
          staff: staffKirim,
        };
        api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        }).then((res) => {
          if (res.value !== null) {
            dispatch(
              setDataStockBahanAdminByStaffSuccess({ feedback: res.value })
            );
          } else {
            dispatch(setDataStockBahanAdminByStaffFailed({ error: res.error }));
          }
        });
      } else {
        const staffKirim = action.payload.data;
        const data = {
          staff: staffKirim,
        };
        api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        }).then((res) => {
          if (res.value !== null) {
            dispatch(
              setDataStockBahanAdminByStaffSuccess({
                feedback: res.value,
              })
            );
          } else {
            dispatch(setDataStockBahanAdminByStaffFailed({ error: res.error }));
          }
        });
      }
    }
  };

const addDataKirimTambahanCart =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_TAMBAHAN_CART) {
      const dataTambahan = getState().form.FormDetailTambahan.values;
      const divisi = getLocal("divisi_detail_tambahan").divisi;
      const noJO = getLocal("divisi_detail_tambahan").no_job_order;
      const onSendData = {
        asal_saldo_tukang: dataTambahan.saldo_asal,
        berat: parseFloat(dataTambahan.berat_bahan),
        divisi_tujuan: divisi,
        jumlah: 1,
        kode_barang: "-",
        nama_bahan: dataTambahan.nama_bahan,
        no_job_order: noJO,
      };
      writeLocal("data_tambahan_cart", onSendData);
      sweetalert.default.Success("Berhasil Menyimpan Data !");
    }
  };

const setDataDivisiKirimTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_TAMBAHAN_DIVISI) {
      const data = getState().form.FormDetailJOKirimTambahan.values;
      writeLocal("divisi_detail_tambahan", data);
      sweetalert.default.Success("Berhasil Menyimpan Data !");
    }
  };

const deleteCartKirimTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_KIRIM_TAMBAHAN_CART) {
      localStorage.removeItem("data_tambahan_cart");
      localStorage.removeItem("divisi_detail_tambahan");
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const addKirimTambahanCheckout =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_TAMBAHAN_CHECKOUT) {
      const divisi = getLocal("divisi_detail_tambahan").divisi || null;
      const dataDetail = getLocal("data_tambahan_cart") || null;
      const dataKirim = { kirim_tambahan: [] };
      dataKirim.kirim_tambahan.push(dataDetail);
      if (divisi === null || divisi === undefined) {
        sweetalert.default.Failed("Pilih Divisi Terlebih Dahulu !");
      } else {
        api.KirimTambahan.addKirimTambahanCheckout(dataKirim).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("divisi_detail_tambahan");
            localStorage.removeItem("data_tambahan_cart");
            sweetalert.default.Success(
              res.value.message || "Berhasil Menambahkan Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error?.data.message ||
                "Terjadi Kesalahan Saat Menambahkan Data !"
            );
          }
        });
      }
    }
  };

const data = [
  getAsalStockBahan,
  getStockBahanAdmin,
  addDataKirimTambahanCart,
  setDataDivisiKirimTambahan,
  deleteCartKirimTambahan,
  addKirimTambahanCheckout,
];

export default data;
