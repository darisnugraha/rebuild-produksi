export const GET_TERIMA_TUKANG_POTONG =
  "[terimatukangpotong] get terima tukang potong";
export const SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS =
  "[terimatukangpotong] get terima tukang potong success";
export const SET_DATA_TERIMA_TUKANG_POTONG_FAILED =
  "[terimatukangpotong] get terima tukang potong failed";
export const SET_NO_POHON = "[terimatukangpotong] set no pohon";

export const SET_SUSUT = "[terimatukangpotong] set susust";
export const SET_SUSUT_SUCCESS = "[terimatukangpotong] set susut success";
export const SET_BERAT_TERIMA = "[terimatukangpotong] set berat terima";
export const SET_BERAT_PENTOLAN = "[terimatukangpotong] set berat pentolan";
export const SET_JENIS_BAHAN = "[terimatukangpotong] set jenis bahan";

export const ADD_TERIMA_TUKANG_POTONG =
  "[terimatukangpotong] add terima tukang potong";

export const getTerimaTukangPotong = ({ noTransaksi }) => ({
  type: GET_TERIMA_TUKANG_POTONG,
  payload: { data: noTransaksi },
});
export const setDataTerimaTukangPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS,
  payload: { data: feedback },
});
export const setDataJenisBahan = ({ feedback }) => ({
  type: SET_JENIS_BAHAN,
  payload: { data: feedback },
});
export const setDataTerimaTukangPotongFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_TUKANG_POTONG_FAILED,
  payload: { data: error },
});
export const setNoPohon = ({ feedback }) => ({
  type: SET_NO_POHON,
  payload: { data: feedback },
});

export const countSusut = ({ beratTerima }) => ({
  type: SET_SUSUT,
  payload: { data: beratTerima },
});
export const setDataSusutSuccess = ({ feedback }) => ({
  type: SET_SUSUT_SUCCESS,
  payload: { data: feedback },
});
export const setDataBeratTerima = ({ beratTerima }) => ({
  type: SET_BERAT_TERIMA,
  payload: { data: beratTerima },
});
export const setDataBeratPentolan = ({ beratPentolan }) => ({
  type: SET_BERAT_PENTOLAN,
  payload: { data: beratPentolan },
});

export const addDataTerimaTukangPotong = {
  type: ADD_TERIMA_TUKANG_POTONG,
};
