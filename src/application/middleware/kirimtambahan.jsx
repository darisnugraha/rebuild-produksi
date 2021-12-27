import {
  setDataAsalStockBahanSuccess,
  setDataAsalStockBahanFailed,
  GET_ALL_ASAL_STOCK_BAHAN,
  GET_STOCK_BAHAN_ADMIN,
  setDataStockBahanAdminByStaffSuccess,
  setDataStockBahanAdminByStaffFailed,
  ADD_KIRIM_TAMBAHAN_CART,
  ADD_KIRIM_TAMBAHAN_DIVISI,
  setDataKirimTambahanDivisiSuccess,
  setDataKirimTambahanDivisiFailed,
} from "../actions/kirimtambahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAsalStockBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_ASAL_STOCK_BAHAN) {
      const response = await api.KirimTambahan.getAllAsalStockBahan();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataAsalStockBahanSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataAsalStockBahanFailed({ error: response.error }));
      }
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
        const response = await api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        });
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataStockBahanAdminByStaffSuccess({
              feedback: response.value.data,
            })
          );
        } else {
          dispatch(
            setDataStockBahanAdminByStaffFailed({ error: response.error })
          );
        }
      } else {
        const staffKirim = action.payload.data;
        const data = {
          staff: staffKirim,
        };
        const response = await api.KirimTambahan.getStockBahanAdmin({
          dataKirim: data,
        });
        if (response.value?.status === "berhasil") {
          dispatch(
            setDataStockBahanAdminByStaffSuccess({
              feedback: response.value.data,
            })
          );
        } else {
          dispatch(
            setDataStockBahanAdminByStaffFailed({ error: response.error })
          );
        }
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
      const data = getState().form.FormDetailJOKirimTambahan.values;
      const dataTambahan = getState().form.FormDetailTambahan.values;
      const onSendData = {
        asal_saldo: dataTambahan.saldo_asal,
        berat: dataTambahan.berat_bahan,
        divisi: data.divisi,
        jumlah: 1,
        kode_barang: "-",
        nama_bahan: dataTambahan.berat_bahan,
        no_job_order: "-",
      };
      const response = await api.KirimTambahan.addKirimTambahanCart(onSendData);
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          sweetalert.default.Success(response.value.pesan);
          dispatch(
            setDataAsalStockBahanSuccess({ feedback: response.value.data })
          );
          writeLocal("data_tambahan_cart", onSendData);
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataAsalStockBahanFailed({ error: response.value }));
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      const dataLocal = getLocal("divisi_detail_tambahan");
      if (data.divisi === undefined) {
        const response = await api.KirimTambahan.getCartKirimTambahan(
          dataLocal.divisi
        );
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            dispatch(
              setDataKirimTambahanDivisiSuccess({
                feedback: response.value.data,
              })
            );
          } else {
            dispatch(
              setDataKirimTambahanDivisiFailed({ error: response.value })
            );
          }
        } else {
          dispatch(setDataKirimTambahanDivisiFailed({ error: response.error }));
        }
      } else {
        const dataDivisi = getState().kirimbahanadmin.feedback;
        const dataDivisiFill = dataDivisi.filter((item) => {
          return item.kode_divisi === data.divisi;
        });
        const onSendData = {
          divisi: dataDivisiFill[0].nama_divisi,
          kode_divisi: dataDivisiFill[0].kode_divisi,
          kode_barang: "-",
          kode_jenis_bahan: "-",
          nama_barang: "-",
          no_job_order: "-",
        };
        if (data.divisi !== undefined || data.divisi !== null) {
          const response = await api.KirimTambahan.getCartKirimTambahan(
            onSendData.divisi
          );
          if (response.value !== null) {
            if (response.value.status === "berhasil") {
              dispatch(
                setDataKirimTambahanDivisiSuccess({
                  feedback: response.value.data,
                })
              );
              writeLocal("divisi_detail_tambahan", onSendData);
              sweetalert.default.SuccessNoReload(response.value.pesan);
            } else {
              sweetalert.default.Failed(response.value.pesan);
              dispatch(
                setDataKirimTambahanDivisiFailed({ error: response.value })
              );
            }
          } else {
            sweetalert.default.Failed(response.error.data.pesan);
            dispatch(
              setDataKirimTambahanDivisiFailed({ error: response.error })
            );
          }
        } else {
          sweetalert.default.Failed("Mohon Isi Divisi Terlebih Dahulu !");
        }
      }
    }
  };

const data = [
  getAsalStockBahan,
  getStockBahanAdmin,
  addDataKirimTambahanCart,
  setDataDivisiKirimTambahan,
];

export default data;
