export const GET_ALL_ABU_TUKANG = "[abutukang] get all abu tukang";
export const SET_DATA_ABU_TUKANG_SUCCESS =
  "[abutukang] get all abu tukang success";
export const SET_DATA_ABU_TUKANG_FAILED =
  "[abutukang] get all abu tukang failed";

export const SET_DATA_TUKANG = "[abutukang] set data abu tukang";
export const SET_DATA_TUKANG_SUCCESS =
  "[abutukang] set data abu tukang success";

export const SET_BERAT_SUSUT_BRUTO = "[abutukang] set berat susut bruto";
export const GET_BERAT_KOTOR_KEMBALI = "[abutukang] get berat kotor kembali";
export const SET_BAHAN_KEMBALI = "[abutukang] set bahan kembali";

export const GET_KADAR = "[abutukang] get kadar";
export const SET_24K = "[abutukang] set 24K";

export const ADD_ABU_TUKANG = "[abutukang] add abu tukang";

export const getAllAbuTukang = {
  type: GET_ALL_ABU_TUKANG,
};
export const setDataAbuTukangSuccess = ({ feedback }) => ({
  type: SET_DATA_ABU_TUKANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataAbuTukangFailed = ({ error }) => ({
  type: SET_DATA_ABU_TUKANG_FAILED,
  payload: { data: error },
});

export const pilihDataTukang = {
  type: SET_DATA_TUKANG,
};

export const setDataTukangSuccess = ({ feedback }) => ({
  type: SET_DATA_TUKANG_SUCCESS,
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

export const addAbuTukang = {
  type: ADD_ABU_TUKANG,
};
