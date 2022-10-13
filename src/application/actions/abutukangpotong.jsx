export const GET_ALL_SETOR_OUTSTAND_POTONG =
  "[abutukangpotong] get all setor outstand potong";
export const SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS =
  "[abutukangpotong] get all setor outstand potong success";
export const SET_DATA_SETOR_OUTSTAND_POTONG_FAILED =
  "[abutukangpotong] get all setor outstand potong failed";

export const SET_DATA_POTONG = "[abutukangpotong] set data potong";
export const SET_DATA_POTONG_SUCCESS =
  "[abutukangpotong] set data potong success";

export const SET_BERAT_SUSUT_BRUTO = "[abutukangpotong] set berat susut bruto";
export const GET_BERAT_KOTOR_KEMBALI =
  "[abutukangpotong] get berat kotor kembali";
export const SET_BAHAN_KEMBALI = "[abutukangpotong] set bahan kembali";

export const GET_KADAR = "[abutukangpotong] get kadar";
export const SET_24K = "[abutukangpotong] set 24K";

export const ADD_ABU_POTONG = "[abutukangpotong] add abu potong";

export const getAllSetorOutstandPotong = {
  type: GET_ALL_SETOR_OUTSTAND_POTONG,
};
export const setDataSetorOutstandPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS,
  payload: { data: feedback },
});
export const setDataSetorOutstandPotongFailed = ({ error }) => ({
  type: SET_DATA_SETOR_OUTSTAND_POTONG_FAILED,
  payload: { data: error },
});

export const pilihDataPotong = {
  type: SET_DATA_POTONG,
};

export const setDataPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_POTONG_SUCCESS,
  payload: { data: feedback },
});

export const getBeratKotorKembali = (berat) => ({
  type: GET_BERAT_KOTOR_KEMBALI,
  payload: { data: berat },
});

export const setBeratSusutBruto = (berat) => ({
  type: SET_BERAT_SUSUT_BRUTO,
  payload: { data: berat },
});

export const setBahanKembali = (bahan) => ({
  type: SET_BAHAN_KEMBALI,
  payload: { data: bahan },
});

export const getKadar = (kadar) => ({
  type: GET_KADAR,
  payload: { data: kadar },
});

export const set24K = (kadar) => ({
  type: SET_24K,
  payload: { data: kadar },
});

export const addAbuPotong = {
  type: ADD_ABU_POTONG,
};
