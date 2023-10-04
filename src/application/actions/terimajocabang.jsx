export const GET_ALL_DETAIL_JO = "[terimajocabang] get all detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[terimajocabang] get all detail jo success";
export const SET_DATA_DETAIL_JO_FAILED =
  "[terimajocabang] get all detail jo failed";

export const GET_NO_INDUK_JOB_ORDER = "[terimajocabang] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[terimajocabang] set no induk job order";

export const ADD_TERIMA_JO = "[terimajocabang] add terima jo";
export const ADD_TERIMA_JO_LOCAL = "[terimajocabang] add terima jo local";

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[terimajocabang] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[terimajocabang] set data by no induk job order";

export const DELETE_DATA_LOCAL_TERIMA_JO = "[terimajocabang] delete data local";

export const GET_ALL_CABANG = "[terimajocabang] get all cabang";
export const SET_ALL_CABANG = "[terimajocabang] set all cabang";

export const GET_TUKANG_BY_DIVISI = "[terimajocabang] get tukang by divisi";
export const SET_TUKANG_BY_DIVISI = "[terimajocabang] set tukang by divisi";

export const getAllDetailJO = ({ noJobOrder, type }) => ({
  type: GET_ALL_DETAIL_JO,
  payload: { data: noJobOrder, dataType: type },
});
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const addTerimaJO = {
  type: ADD_TERIMA_JO,
};

export const addTerimaJOLocal = {
  type: ADD_TERIMA_JO_LOCAL,
};

export const getNoIndukJobOrder = (kodeTokoAsal) => ({
  type: GET_NO_INDUK_JOB_ORDER,
  payload: { data: kodeTokoAsal },
});
export const setNoIndukJobOrder = (feedback) => ({
  type: SET_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const getDataByNoInduk = (noInduk) => ({
  type: GET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: noInduk },
});

export const setDataByNoInduk = (feedback) => ({
  type: SET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const deleteDataLocal = (id) => ({
  type: DELETE_DATA_LOCAL_TERIMA_JO,
  payload: { data: id },
});

export const getAllCabang = {
  type: GET_ALL_CABANG,
};
export const setAllCabang = (feedback) => ({
  type: SET_ALL_CABANG,
  payload: { data: feedback },
});

export const getTukangByDivisi = (divisi) => ({
  type: GET_TUKANG_BY_DIVISI,
  payload: { data: divisi },
});

export const setTukangByDivisi = (feedback) => ({
  type: SET_TUKANG_BY_DIVISI,
  payload: { data: feedback },
});
