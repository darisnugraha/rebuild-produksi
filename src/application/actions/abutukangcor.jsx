export const GET_ALL_SETOR_OUTSTAND_CASTING =
  "[abutukangcor] get all setor outstand casting";
export const SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS =
  "[abutukangcor] get all setor outstand casting success";
export const SET_DATA_SETOR_OUTSTAND_CASTING_FAILED =
  "[abutukangcor] get all setor outstand casting failed";

export const SET_DATA_CASTING = "[abutukangcor] set data casting";
export const SET_DATA_CASTING_SUCCESS =
  "[abutukangcor] set data casting success";

export const SET_BERAT_SUSUT_BRUTO = "[abutukangcor] set berat susut bruto";
export const GET_BERAT_KOTOR_KEMBALI = "[abutukangcor] get berat kotor kembali";
export const SET_BAHAN_KEMBALI = "[abutukangcor] set bahan kembali";

export const GET_KADAR = "[abutukangcor] get kadar";
export const SET_24K = "[abutukangcor] set 24K";

export const ADD_ABU_COR = "[abutukangcor] add abu cor";

export const getAllSetorOutstandCasting = {
  type: GET_ALL_SETOR_OUTSTAND_CASTING,
};
export const setDataSetorOutstandCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataSetorOutstandCastingFailed = ({ error }) => ({
  type: SET_DATA_SETOR_OUTSTAND_CASTING_FAILED,
  payload: { data: error },
});

export const pilihDataCasting = {
  type: SET_DATA_CASTING,
};

export const setDataCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_CASTING_SUCCESS,
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

export const addAbuCOR = {
  type: ADD_ABU_COR,
};
