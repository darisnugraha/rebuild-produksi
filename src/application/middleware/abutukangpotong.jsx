import {
  setDataSetorOutstandPotongSuccess,
  setDataSetorOutstandPotongFailed,
  GET_ALL_SETOR_OUTSTAND_POTONG,
  SET_DATA_POTONG,
  GET_BERAT_KOTOR_KEMBALI,
  GET_KADAR,
  ADD_ABU_POTONG,
  setDataPotongSuccess,
  setBeratSusutBruto,
  set24K,
} from "../actions/abutukangpotong";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const getDataSetorAbuTukangPotong =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SETOR_OUTSTAND_POTONG) {
      dispatch(setLoadingButton(true));
      api.AbuTukangPotong.getSetorOutstandPotong().then((res) => {
        dispatch(setLoadingButton(false));
        if (res.value !== null) {
          if (res.value.length === 0) {
            sweetalert.default.Failed("Data Outstand Potong Kosong !");
            dispatch(
              setDataSetorOutstandPotongSuccess({ feedback: res.value })
            );
          } else {
            sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
            dispatch(
              setDataSetorOutstandPotongSuccess({ feedback: res.value })
            );
          }
        } else {
          if (res.error !== undefined) {
            sweetalert.default.Failed(
              res.error.data?.message ||
                "Terjadi Kesalahan Saat Mengambil Data !"
            );
            dispatch(setDataSetorOutstandPotongFailed({ error: res.error }));
          } else {
            sweetalert.default.Failed(
              "Terjadi Kesalahan Saat Mengambil Data !"
            );
            dispatch(setDataSetorOutstandPotongFailed({ error: res.error }));
          }
        }
      });
    }
    if (action.type === SET_DATA_POTONG) {
      const data = getLocal("data_select_potong");
      if (data !== null) {
        if (data.length !== 0) {
          const totalabu = data.reduce((a, b) => a + b.abu, 0);
          const total24k = data.reduce((a, b) => a + parseFloat(b.karat_24), 0);
          const dataKirim = {
            totalAbu: totalabu,
            total24K: total24k.toFixed(3),
          };
          dispatch(setDataPotongSuccess({ feedback: dataKirim }));
        } else {
          sweetalert.default.Info("Silahkan Pilih Data Dahulu !");
        }
      } else {
        sweetalert.default.Info("Silahkan Pilih Data Dahulu !");
      }
    }
    if (action.type === GET_BERAT_KOTOR_KEMBALI) {
      const totalabu = getState().abutukangpotong.total_abu;
      const berat = action.payload.data;
      const beratbruto = parseFloat(totalabu) - parseFloat(berat);
      const dataKirim = {
        beratBruto: beratbruto,
        beratKotor: berat,
      };
      dispatch(setBeratSusutBruto(dataKirim));
    }
    if (action.type === GET_KADAR) {
      const total24k = parseFloat(getState().abutukangpotong.total_24k);
      const kadar = parseFloat(action.payload.data);
      const berat = parseFloat(getState().abutukangpotong.berat_kotor);
      const k24 = (kadar / 100) * berat;

      const k_susut = total24k - k24;
      const kirim = {
        k_24: k24.toFixed(3),
        susut_k: k_susut.toFixed(3),
      };
      dispatch(set24K(kirim));
    }
    if (action.type === ADD_ABU_POTONG) {
      const data = getState().abutukangpotong;
      const dataKirim = {
        bahan_kembali: data.bahan_kembali.toString(),
        berat_kembali: parseFloat(data.berat_kotor),
        susut_bruto: parseFloat(data.berat_bruto),
        kadar_kembali: parseFloat(data.kadar),
        kembali_24: parseFloat(data.k24),
        susut_24: parseFloat(data.k_susut24),
        detail_pohon: [],
      };
      const dataPohon = getLocal("data_select_potong");
      dataPohon.forEach((element) => {
        const row = {
          no_pohon: element.pohon,
        };
        dataKirim.detail_pohon.push(row);
      });
      api.AbuTukangPotong.addAbuTukangPotong(dataKirim).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("data_select_potong");
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
  };

const data = [getDataSetorAbuTukangPotong];

export default data;
