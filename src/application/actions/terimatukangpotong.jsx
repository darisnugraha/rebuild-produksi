export const GET_TERIMA_TUKANG_POTONG =
  "[terimatukangpotong] get terima tukang potong";
export const SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS =
  "[terimatukangpotong] get terima tukang potong success";
export const SET_DATA_TERIMA_TUKANG_POTONG_FAILED =
  "[terimatukangpotong] get terima tukang potong failed";
export const SET_NO_POHON = "[terimatukangpotong] set no pohon";

export const getTerimaTukangPotong = ({ noTransaksi }) => ({
  type: GET_TERIMA_TUKANG_POTONG,
  payload: { data: noTransaksi },
});
export const setDataTerimaTukangPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS,
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
