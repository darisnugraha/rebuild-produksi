import {
  setBahan,
  GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE,
  ADD_TERIMA_BAHAN,
  setDataBahanSuccess,
  setDataBahanFailed,
  setBeratBahan,
  GET_BAHAN,
  setKodeStaff,
  GET_TUKANG_DIVISI,
  setTukangDivisiSuccess,
  setTukangDivisiFailed,
  getBahanbyDivisiAndStaff,
  GET_DETAIL_BAHAN,
  getDetailBahan,
  setDetailBahanSuccess,
  setDetailBahanFailed,
  GET_TUKANG_DIVISI_PUSAT,
  setTukangDivisiPusatSuccess,
  setTukangDivisiPusatFailed,
} from "../actions/terimabahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const tukangDivisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TUKANG_DIVISI) {
      const divisi = action.payload.data;
      api.TerimaBahan.getTukangTerimaDivisi(divisi).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setTukangDivisiSuccess({ feedback: res.value }));
            // dispatch(
            //   getBahanbyDivisiAndStaff({ staff: res.value[0].nama_tukang })
            // );
          }
        } else {
          dispatch(setTukangDivisiFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_TUKANG_DIVISI_PUSAT) {
      const divisi = action.payload.data;
      api.TerimaBahan.getTukangTerimaDivisi(divisi).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setTukangDivisiPusatSuccess({ feedback: res.value }));
            dispatch(
              getBahanbyDivisiAndStaff({ staff: res.value[0].nama_tukang })
            );
          }
        } else {
          dispatch(setTukangDivisiPusatFailed({ error: res.error }));
        }
      });
    }
  };

const getDetailBahanMidd =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_BAHAN) {
      const data = getState().form.FormTerimaBahan.values;
      const bahan = action.payload.data;
      const dataKirim = {
        divisi:
          data.divisi.toUpperCase() === "ADMIN"
            ? "ADMIN PUSAT"
            : data.divisi.toUpperCase(),
        tukang: data.staff,
        nama_bahan: bahan,
      };
      api.TerimaBahan.getDetailBahan(dataKirim).then((res) => {
        if (res.value !== null) {
          dispatch(setDetailBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDetailBahanFailed({ error: undefined }));
        }
      });
      // const divisi = action.payload.data;
      // api.KirimBahanAdmin.getTukangDivisi(divisi).then((res) => {
      //   if (res.value !== null) {
      //     if (res.value.length !== 0) {
      //       dispatch(setTukangDivisiSuccess({ feedback: res.value }));
      //       dispatch(
      //         getBahanbyDivisiAndStaff({ staff: res.value[0].nama_tukang })
      //       );
      //     }
      //   } else {
      //     dispatch(setTukangDivisiFailed({ error: res.error }));
      //   }
      // });
    }
  };

const getDataBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BAHAN) {
      if (action.payload.data === null) {
        const data = getState().form.FormTerimaBahan.values;
        const dataKirim = {
          divisi: data.divisi_asal,
          divisi_tujuan: data.divisi.toUpperCase(),
          tukang_asal: data.staff,
        };
        api.TerimaBahan.getBahan(dataKirim).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              dispatch(setDataBahanSuccess({ feedback: res.value }));
              dispatch(setBeratBahan({ berat: res.value[0].berat }));
              dispatch(setKodeStaff({ staff: res.value[0].tukang }));
              dispatch(setBahan({ namaBahan: res.value[0].nama_bahan }));
              dispatch(getDetailBahan(res.value[0].nama_bahan));
            } else {
              dispatch(setDataBahanFailed({ error: res.error }));
              dispatch(setBeratBahan({ berat: 0 }));
              dispatch(setKodeStaff({ staff: null }));
              dispatch(setBahan({ namaBahan: null }));
            }
          } else {
            dispatch(setDataBahanFailed({ error: res.error }));
            dispatch(setBeratBahan({ berat: 0 }));
            dispatch(setKodeStaff({ staff: null }));
            dispatch(setBahan({ namaBahan: null }));
          }
        });
      } else {
        dispatch(setKodeStaff({ staff: action.payload.data }));
        const data = getState().form.FormTerimaBahan.values;
        const dataKirim = {
          divisi: data.divisi_asal,
          divisi_tujuan: data.divisi.toUpperCase(),
          tukang_asal: action.payload.data,
        };
        api.TerimaBahan.getBahan(dataKirim).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              dispatch(setDataBahanSuccess({ feedback: res.value }));
              dispatch(setBeratBahan({ berat: res.value[0].berat }));
              dispatch(setBahan({ namaBahan: res.value[0].nama_bahan }));
              dispatch(getDetailBahan(res.value[0].nama_bahan));
            } else {
              dispatch(setDataBahanFailed({ error: res.error }));
              dispatch(setBeratBahan({ berat: 0 }));
              dispatch(setBahan({ namaBahan: null }));
            }
          } else {
            dispatch(setDataBahanFailed({ error: res.error }));
            dispatch(setBeratBahan({ berat: 0 }));
            dispatch(setBahan({ namaBahan: null }));
          }
        });
      }
    }
  };

const setDataBeratBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_SALDO_KIRIM_BAHAN_OPEN_CHANGE) {
      const namaBahan = action.payload.data;
      const dataBahan = getState().terimabahan.feedback;
      const dataBahanFind = dataBahan.find((val) => val._id === namaBahan);
      dispatch(setBahan({ namaBahan: dataBahanFind.nama_bahan }));
      dispatch(setBeratBahan({ berat: dataBahanFind.berat }));
    }
  };

const addTerimaTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_BAHAN) {
      const data = getState().form.FormTerimaBahan.values;
      const bahan = getState().terimabahan.namaBahan;
      if (data.divisi_asal.toUpperCase() === "ADMIN BAHAN") {
        const onSendData = {
          divisi_asal: data.divisi_asal.toUpperCase(),
          divisi_tujuan:
            data.divisi.toUpperCase() === "ADMIN"
              ? "ADMIN PUSAT"
              : data.divisi.toUpperCase(),
          tukang_tujuan: data.staff,
          tukang_asal: "ADMIN BAHAN",
          nama_bahan: bahan,
          berat: parseFloat(data.berat_bahan),
        };
        api.TerimaBahan.addTerimaBahan(onSendData).then((res) => {
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
      } else {
        const onSendData = {
          divisi_asal: data.divisi_asal.toUpperCase(),
          divisi_tujuan: data.divisi.toUpperCase(),
          tukang_tujuan: data.staff_tujuan,
          tukang_asal: data.staff,
          nama_bahan: bahan,
          berat: parseFloat(data.berat_bahan),
        };
        api.TerimaBahan.addTerimaBahan(onSendData).then((res) => {
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
    }
  };

const data = [
  getDetailBahanMidd,
  tukangDivisGetAll,
  getDataBahan,
  setDataBeratBahan,
  addTerimaTambahan,
];

export default data;
