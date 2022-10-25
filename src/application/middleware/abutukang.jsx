import {
  setDataAbuTukangSuccess,
  setDataAbuTukangFailed,
  GET_ALL_ABU_TUKANG,
  SET_DATA_TUKANG,
  setDataTukangSuccess,
  GET_BERAT_KOTOR_KEMBALI,
  ADD_ABU_TUKANG,
  setBeratSusutBruto,
  set24K,
  GET_KADAR,
  GET_DIVISI_TUKANG_SUSUT,
  setDataDivisiTukangSusut,
  GET_TUKANG_BY_DIVISI,
  setDataTukangByDivisi,
  getTukangByDivisi,
} from "../actions/abutukang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const getDataSetorAbuTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_ABU_TUKANG) {
      dispatch(setLoadingButton(true));
      const data = getState().form.ButtonAbuTukang.values;
      api.AbuTukang.getSetorAbuTukang({
        dataKirim: data,
      }).then((res) => {
        dispatch(setLoadingButton(false));
        if (res.value !== null) {
          if (res.value?.length === 0) {
            sweetalert.default.Failed("Data Outstand Tukang Kosong !");
            dispatch(setDataAbuTukangSuccess({ feedback: res.value }));
          } else {
            sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
            dispatch(setDataAbuTukangSuccess({ feedback: res.value }));
          }
        } else {
          sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
          dispatch(setDataAbuTukangFailed({ error: res.error }));
        }
      });
    }
    if (action.type === SET_DATA_TUKANG) {
      const data = getLocal("data_select_tukang");
      if (data !== null) {
        if (data.length !== 0) {
          const totalabu = data.reduce((a, b) => a + b.abu, 0);
          const total24k = data.reduce((a, b) => a + parseFloat(b.karat_24), 0);
          const dataKirim = {
            totalAbu: totalabu,
            total24K: total24k.toFixed(3),
          };
          dispatch(setDataTukangSuccess({ feedback: dataKirim }));
        } else {
          sweetalert.default.Info("Silahkan Pilih Data Dahulu !");
        }
      } else {
        sweetalert.default.Info("Silahkan Pilih Data Dahulu !");
      }
    }
    if (action.type === GET_BERAT_KOTOR_KEMBALI) {
      const totalabu = getState().abutukang.total_abu;
      const berat = action.payload.data;
      const beratbruto = parseFloat(totalabu) - parseFloat(berat);
      const dataKirim = {
        beratBruto: beratbruto,
        beratKotor: berat,
      };
      dispatch(setBeratSusutBruto(dataKirim));
    }
    if (action.type === GET_KADAR) {
      const total24k = parseFloat(getState().abutukang.total_24k);
      const kadar = parseFloat(action.payload.data);
      const berat = parseFloat(getState().abutukang.berat_kotor);
      const k24 = (kadar / 100) * berat;

      const k_susut = total24k - k24;
      const kirim = {
        k_24: k24.toFixed(3),
        susut_k: k_susut.toFixed(3),
      };
      dispatch(set24K(kirim));
    }
    if (action.type === ADD_ABU_TUKANG) {
      const data = getState().abutukang;
      const dataForm = getState().form.ButtonAbuTukang.values;
      const dataKirim = {
        divisi: dataForm.divisi,
        kode_tukang: dataForm.staff,
        bahan_kembali: data.bahan_kembali.toString(),
        berat_kembali: parseFloat(data.berat_kotor),
        susut_bruto: parseFloat(data.berat_bruto),
        kadar_kembali: parseFloat(data.kadar),
        kembali_24: parseFloat(data.k24),
        susut_24: parseFloat(data.k_susut24),
        detail_no_kirim: [],
        detail_job_order: [],
      };
      const dataDetail = getLocal("data_select_tukang");
      dataDetail.forEach((element) => {
        const row = {
          no_kirim: element.no_transaksi,
        };
        dataKirim.detail_no_kirim.push(row);
        const rowJO = {
          no_job_order: element.no_spk,
        };
        dataKirim.detail_job_order.push(rowJO);
      });
      api.AbuTukang.addAbuTukang(dataKirim).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("data_select_tukang");
          sweetalert.default.Success(
            res.value.message || "Berhasil Menyimpan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menyimpan Data !"
          );
        }
      });
    }
    if (action.type === GET_DIVISI_TUKANG_SUSUT) {
      api.AbuTukang.getDivisiTukangSusut().then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataDivisiTukangSusut({
              feedback: res.value,
              datadivisi: res.value[0]?.divisi,
            })
          );
          dispatch(getTukangByDivisi(res.value[0]?.divisi));
        } else {
          dispatch(
            setDataDivisiTukangSusut({ feedback: [], datadivisi: undefined })
          );
        }
      });
    }
    if (action.type === GET_TUKANG_BY_DIVISI) {
      const divisi = action.payload.data;
      api.AbuTukang.getTukangByDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setDataTukangByDivisi({ feedback: res.value }));
        } else {
          dispatch(setDataTukangByDivisi({ feedback: [] }));
        }
      });
    }
  };

const data = [getDataSetorAbuTukang];

export default data;
