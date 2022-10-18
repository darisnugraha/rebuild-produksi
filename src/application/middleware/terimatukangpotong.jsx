import {
  setDataTerimaTukangPotongSuccess,
  setDataTerimaTukangPotongFailed,
  GET_TERIMA_TUKANG_POTONG,
  setNoPohon,
  setDataSusutSuccess,
  setDataBeratTerima,
  setDataBeratPentolan,
  SET_SUSUT,
  ADD_TERIMA_TUKANG_POTONG,
  setDataJenisBahan,
} from "../actions/terimatukangpotong";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataPohon =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_TUKANG_POTONG) {
      dispatch(setNoPohon({ feedback: action.payload.data }));
      api.TerimaTukangPotong.getTerimaTukangPotong({
        data: action.payload.data,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setDataTerimaTukangPotongSuccess({ feedback: res.value }));
            api.TerimaTukangPotong.getTerimaTukangPotongJenisBahan({
              data: res.value[0].kode_jenis_bahan,
            }).then((res) => {
              if (res.value !== null) {
                dispatch(setDataJenisBahan({ feedback: res.value }));
              } else {
                dispatch(setDataJenisBahan({ feedback: res.error }));
              }
            });
          } else {
            sweetalert.default.Failed("Data Tidak Ada !");
          }
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Mengambil Data !"
          );
          dispatch(setDataSusutSuccess({ feedback: "" }));
          dispatch(setDataBeratTerima({ beratTerima: "" }));
          dispatch(setDataBeratPentolan({ beratPentolan: "" }));
          dispatch(setDataTerimaTukangPotongSuccess({ feedback: [] }));
          dispatch(setDataTerimaTukangPotongFailed({ error: res.error }));
        }
      });
    }
  };

const setBeratSusut =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_SUSUT) {
      let berat_murni =
        getState().terimatukangpotong.feedback[0]?.berat_casting || 0;
      let berat_terima = action.payload.data || 0;
      let berat_pentolan =
        getState().form.FormTerimaTukangPotong.values.berat_terima || 0;
      let susut = 0;
      susut =
        parseFloat(berat_murni) -
        parseFloat(berat_terima) -
        parseFloat(berat_pentolan);
      dispatch(setDataSusutSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratTerima({ beratTerima: berat_terima }));
      dispatch(setDataBeratPentolan({ beratPentolan: berat_pentolan }));
    }
  };

const addDataTerimaTukangPotong =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_TUKANG_POTONG) {
      const data = getState().form.FormTerimaTukangPotong.values;
      if (data !== undefined) {
        data.berat = parseFloat(data.berat);
        data.berat_susut = parseFloat(data.berat_susut);
        data.berat_terima = parseFloat(data.berat_terima);
        data.berat_barang = parseFloat(data.berat_barang);
        const dataKirim = {
          no_pohon: data.pohon.toUpperCase(),
          kode_jenis_bahan: data.kode_jenis_bahan.toUpperCase(),
          nama_jenis_bahan: data.nama_jenis_bahan.toUpperCase(),
          berat_awal: data.berat,
          berat_pentolan: data.berat_terima,
          berat_barang: data.berat_barang,
          berat_susut: data.berat_susut,
        };
        api.TerimaTukangPotong.addTerimaPotong(dataKirim).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(res.value?.message);
          } else {
            sweetalert.default.Failed(res.error?.data.message);
          }
        });
      } else {
        sweetalert.default.Failed("Mohon Isi Form Terlebih Dahulu !");
      }
    }
  };

const data = [getDataPohon, setBeratSusut, addDataTerimaTukangPotong];

export default data;
