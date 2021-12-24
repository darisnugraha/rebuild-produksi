export const GET_ALL_DETAIL_JO = "[closejo] get all detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS = "[closejo] get all detail jo success";
export const SET_DATA_DETAIL_JO_FAILED = "[closejo] get all detail jo failed";

export const ADD_CLOSE_JO = "[closejo] add close jo";

export const SET_BERAT_AKHIR = "[closejo] set berat akhir";
export const SET_BERAT_AKHIR_SUCCESS = "[closejo] set berat akhir success";
export const SET_BERAT_CLOSE = "[closejo] set berat close";

export const getAllDetailJO = ({ noJobOrder }) => ({
  type: GET_ALL_DETAIL_JO,
  payload: { data: noJobOrder },
});
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const addCloseJO = {
  type: ADD_CLOSE_JO,
};

export const countBeratAkhir = ({ beratTerima }) => ({
  type: SET_BERAT_AKHIR,
  payload: { data: beratTerima },
});
export const setDataBeratAkhirSuccess = ({ feedback }) => ({
  type: SET_BERAT_AKHIR_SUCCESS,
  payload: { data: feedback },
});
export const setDataBeratClose = ({ beratClose }) => ({
  type: SET_BERAT_CLOSE,
  payload: { data: beratClose },
});
