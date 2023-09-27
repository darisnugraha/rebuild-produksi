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
  GET_DETAIL_BAHAN,
  getDetailBahan,
  setDetailBahanSuccess,
  setDetailBahanFailed,
  GET_TUKANG_DIVISI_PUSAT,
  setTukangDivisiPusatSuccess,
  setTukangDivisiPusatFailed,
  GET_DIVISI_ALL,
  setDivisiAll,
  getTukangAsalByDivisi,
  GET_TUKANG_ASAL_BY_DIVISI,
  setTukangAsalByDivisi,
  // getBahanbyDivisiAndStaff,
  GET_BAHAN_BY_TUKANG_TUJUAN,
  getSaldoKirimBahanOpenChange,
  // getBahanByTukangTujuan,
  GET_BAHAN_BY_TUKANG_ASAL,
  getBahanByTukangTujuan,
  // getBahanByTukangAsal,
} from "../actions/terimabahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";

const tukangDivisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DIVISI_ALL) {
      api.TerimaBahan.getDivisiAll().then((res) => {
        if (res.value !== null) {
          dispatch(setDivisiAll({ feedback: res.value }));
          dispatch(getTukangAsalByDivisi(res.value[0]?.divisi));
        } else {
          dispatch(setDivisiAll({ feedback: [] }));
        }
      });
    }
    if (action.type === GET_TUKANG_ASAL_BY_DIVISI) {
      const divisi = action.payload.data;
      api.TerimaBahan.getTukangAsalTerimaDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setTukangAsalByDivisi({ feedback: res.value }));
          dispatch(
            change("FormTerimaBahan", "staff", res.value[0]?.nama_tukang)
          );
          // dispatch(
          //   getBahanbyDivisiAndStaff({ staff: res.value[0]?.nama_tukang })
          // );
          const data = getState().form.FormTerimaBahan.values;
          dispatch(
            getBahanByTukangTujuan({
              staff: data.staff_tujuan,
            })
          );
        } else {
          dispatch(setTukangAsalByDivisi({ feedback: [] }));
        }
      });
    }
    if (action.type === GET_TUKANG_DIVISI) {
      const divisi = action.payload.data;
      api.TerimaBahan.getTukangTerimaDivisi(divisi).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setTukangDivisiSuccess({ feedback: res.value }));
            dispatch(
              change(
                "FormTerimaBahan",
                "staff_tujuan",
                res.value[0]?.nama_tukang
              )
            );
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
          data.divisi?.toUpperCase() === "ADMIN"
            ? "ADMIN PUSAT"
            : data.divisi?.toUpperCase(),
        tukang: data.staff,
        divisi_asal: data.divisi_asal,
        nama_bahan: bahan,
      };
      api.TerimaBahan.getDetailBahan(dataKirim).then((res) => {
        if (res.value !== null) {
          dispatch(setDetailBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDetailBahanFailed({ error: undefined }));
        }
      });
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
          divisi_tujuan: data.divisi?.toUpperCase(),
          tukang_asal: data.staff.split("|")[0],
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
          divisi_tujuan: data.divisi?.toUpperCase(),
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
      dispatch(change("FormTerimaBahan", "nama_bahan", action.payload.data));
      const data = getState().form.FormTerimaBahan.values;
      const namaBahan = action.payload.data.replace("+", "-");
      const dataKirim = {
        divisi: data.divisi_asal,
        divisi_tujuan: data.divisi?.toUpperCase(),
        tukang_asal: data.staff.split("|")[0],
        tukang_tujuan: data.staff_tujuan,
        nama_bahan: namaBahan,
      };
      api.TerimaBahan.getBahanNew(dataKirim).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(
              change("FormTerimaBahan", "berat_bahan", res.value[0].berat)
            );
          } else {
            dispatch(change("FormTerimaBahan", "berat_bahan", 0));
          }
        } else {
          dispatch(change("FormTerimaBahan", "berat_bahan", 0));
        }
      });
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
      if (data.divisi_asal?.toUpperCase() === "ADMIN BAHAN") {
        const onSendData = {
          divisi_asal: data.divisi_asal?.toUpperCase(),
          divisi_tujuan:
            data.divisi?.toUpperCase() === "ADMIN"
              ? "ADMIN PUSAT"
              : data.divisi?.toUpperCase(),
          tukang_tujuan: data.staff_tujuan,
          tukang_asal: "ADMIN BAHAN",
          nama_bahan: data.nama_bahan,
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
          divisi_asal: data.divisi_asal?.toUpperCase(),
          divisi_tujuan: data.divisi?.toUpperCase(),
          tukang_tujuan: data.staff_tujuan,
          tukang_asal: data.staff.split("|")[0],
          nama_bahan: data.nama_bahan,
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

const getDataBahanByTukangTujuan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BAHAN_BY_TUKANG_TUJUAN) {
      dispatch(setKodeStaff({ staff: action.payload.data }));
      const data = getState().form.FormTerimaBahan.values;
      const dataKirim = {
        divisi: data.divisi_asal,
        divisi_tujuan: data.divisi?.toUpperCase(),
        tukang_asal: data.staff.split("|")[0],
        tukang_tujuan: action.payload.data,
        nama_bahan: "ALL",
      };
      api.TerimaBahan.getBahanNew(dataKirim).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataBahanSuccess({ feedback: res.value }));
            dispatch(setBeratBahan({ berat: res.value[0].berat }));
            dispatch(setKodeStaff({ staff: res.value[0].tukang }));
            dispatch(setBahan({ namaBahan: res.value[0].nama_bahan }));
            dispatch(getDetailBahan(res.value[0].nama_bahan));
            dispatch(
              getSaldoKirimBahanOpenChange({
                namaBahan: res.value[0].nama_bahan,
              })
            );
          } else {
            dispatch(setDataBahanFailed({ error: res.error }));
            dispatch(setBeratBahan({ berat: 0 }));
            dispatch(setKodeStaff({ staff: null }));
            dispatch(setBahan({ namaBahan: null }));
            dispatch(
              getSaldoKirimBahanOpenChange({
                namaBahan: "",
              })
            );
          }
        } else {
          dispatch(setDataBahanFailed({ error: res.error }));
          dispatch(setBeratBahan({ berat: 0 }));
          dispatch(setKodeStaff({ staff: null }));
          dispatch(setBahan({ namaBahan: null }));
          dispatch(
            getSaldoKirimBahanOpenChange({
              namaBahan: "",
            })
          );
        }
      });
    }
    if (action.type === GET_BAHAN_BY_TUKANG_ASAL) {
      dispatch(setKodeStaff({ staff: action.payload.data }));
      const data = getState().form.FormTerimaBahan.values;
      const dataKirim = {
        divisi: data.divisi_asal,
        divisi_tujuan: data.divisi?.toUpperCase(),
        tukang_asal: action.payload.data,
        tukang_tujuan: data.staff_tujuan,
        nama_bahan: "ALL",
      };
      api.TerimaBahan.getBahanNew(dataKirim).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataBahanSuccess({ feedback: res.value }));
            dispatch(setBeratBahan({ berat: res.value[0].berat }));
            dispatch(setKodeStaff({ staff: res.value[0].tukang }));
            dispatch(setBahan({ namaBahan: res.value[0].nama_bahan }));
            dispatch(getDetailBahan(res.value[0].nama_bahan));
            dispatch(
              getSaldoKirimBahanOpenChange({
                namaBahan: res.value[0].nama_bahan,
              })
            );
          } else {
            dispatch(setDataBahanFailed({ error: res.error }));
            dispatch(setBeratBahan({ berat: 0 }));
            dispatch(setKodeStaff({ staff: null }));
            dispatch(setBahan({ namaBahan: null }));
            dispatch(
              getSaldoKirimBahanOpenChange({
                namaBahan: "",
              })
            );
          }
        } else {
          dispatch(setDataBahanFailed({ error: res.error }));
          dispatch(setBeratBahan({ berat: 0 }));
          dispatch(setKodeStaff({ staff: null }));
          dispatch(setBahan({ namaBahan: null }));
          dispatch(
            getSaldoKirimBahanOpenChange({
              namaBahan: "",
            })
          );
        }
      });
    }
  };

const data = [
  getDetailBahanMidd,
  tukangDivisGetAll,
  getDataBahan,
  setDataBeratBahan,
  addTerimaTambahan,
  getDataBahanByTukangTujuan,
];

export default data;
