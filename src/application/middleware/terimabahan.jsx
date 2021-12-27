import {
  setDataSaldoBahanTukangSuccess,
  setDataSaldoBahanTukangFailed,
  GET_SALDO_BAHAN_TUKANG,
  setDataSaldoKirimBahanOpenSuccess,
  setDataSaldoKirimBahanOpenFailed,
  setBahan,
  GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  ADD_TERIMA_BAHAN,
} from "../actions/terimabahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getSaldoBahanTukang =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_BAHAN_TUKANG) {
      if (action.payload.data === null) {
        const dataForm =
          getState().form.FormTerimaBahan?.values ||
          getState().form.FormTerimaTambahan?.values;
        delete dataForm.berat_bahan;
        delete dataForm.nama_bahan;
        dataForm.divisi = dataForm.divisi.toUpperCase();
        const response = await api.TerimaBahan.getTerimaBahanTukang({
          dataKirim: dataForm,
        });
        if (response.value !== undefined) {
          if (response.value?.status === "berhasil") {
            dispatch(
              setDataSaldoBahanTukangSuccess({ feedback: response.value.data })
            );
            dispatch(
              setBahan({
                noTransaksi:
                  response.value.data[0] !== undefined
                    ? response.value.data[0]?.no_transaksi
                    : null,
              })
            );
          } else {
            dispatch(
              setDataSaldoBahanTukangFailed({ error: response.value.pesan })
            );
          }
        } else {
          dispatch(setDataSaldoBahanTukangFailed({ error: response.error }));
        }
      } else {
        const dataForm =
          getState().form.FormTerimaBahan?.values ||
          getState().form.FormTerimaTambahan?.values;
        delete dataForm.berat_bahan;
        delete dataForm.nama_bahan;
        dataForm.divisi = dataForm.divisi.toUpperCase();
        dataForm.staff = action.payload.data;
        const response = await api.TerimaBahan.getTerimaBahanTukang({
          dataKirim: dataForm,
        });
        if (response.value !== undefined) {
          if (response.value?.status === "berhasil") {
            dispatch(
              setDataSaldoBahanTukangSuccess({ feedback: response.value.data })
            );
            dispatch(
              setBahan({
                noTransaksi:
                  response.value.data[0] !== undefined
                    ? response.value.data[0]?.no_transaksi
                    : null,
              })
            );
          } else {
            dispatch(
              setDataSaldoBahanTukangFailed({ error: response.value.pesan })
            );
          }
        } else {
          dispatch(setDataSaldoBahanTukangFailed({ error: response.error }));
        }
      }
    }
  };

const getDataSaldoKirimBahanOpenChange =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE) {
      const dataForm =
        getState().form.FormTerimaBahan?.values ||
        getState().form.FormTerimaTambahan?.values;
      if (dataForm.nama_bahan !== undefined) {
        delete dataForm.berat_bahan;
        dataForm.divisi = dataForm.divisi.toUpperCase();
        const dataBahan = getState().terimabahan.dataSaldoBahan;
        const dataBahanFilter = dataBahan.filter((item) => {
          return item.no_transaksi === dataForm.nama_bahan;
        });
        dataForm.nama_bahan = dataBahanFilter[0].nama_bahan;
        const response = await api.TerimaBahan.getSaldoBahanOpen({
          dataKirim: dataForm,
        });
        if (response.value !== undefined) {
          if (response.value?.status === "berhasil") {
            dispatch(
              setDataSaldoKirimBahanOpenSuccess({
                feedback: response.value.data,
              })
            );
          } else {
            dispatch(
              setDataSaldoKirimBahanOpenFailed({ error: response.value.pesan })
            );
          }
        } else {
          dispatch(setDataSaldoKirimBahanOpenFailed({ error: response.error }));
        }
      } else {
        const noTransaksi =
          getState().terimabahan.dataSaldoBahan[0]?.no_transaksi;
        delete dataForm.berat_bahan;
        dataForm.divisi = dataForm.divisi.toUpperCase();
        const dataBahan = getState().terimabahan.dataSaldoBahan;
        const dataBahanFilter = dataBahan.filter((item) => {
          return item.no_transaksi === noTransaksi.toString();
        });
        dataForm.nama_bahan = dataBahanFilter[0].nama_bahan;
        const response = await api.TerimaBahan.getSaldoBahanOpen({
          dataKirim: dataForm,
        });
        if (response.value !== undefined) {
          if (response.value?.status === "berhasil") {
            dispatch(
              setDataSaldoKirimBahanOpenSuccess({
                feedback: response.value.data,
              })
            );
          } else {
            dispatch(
              setDataSaldoKirimBahanOpenFailed({ error: response.value.pesan })
            );
          }
        } else {
          dispatch(setDataSaldoKirimBahanOpenFailed({ error: response.error }));
        }
      }
    }
  };

const addTerimaBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_BAHAN) {
      const data = getState().form.FormTerimaBahan.values;
      const onSendData = {
        berat: parseFloat(data.berat_bahan),
        divisi: data.divisi,
        kode_jenis_bahan: data.nama_bahan,
        staff: data.staff,
      };
      const response = await api.TerimaBahan.addTerimaBahan(onSendData);
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

const data = [
  getSaldoBahanTukang,
  getDataSaldoKirimBahanOpenChange,
  addTerimaBahan,
];

export default data;
