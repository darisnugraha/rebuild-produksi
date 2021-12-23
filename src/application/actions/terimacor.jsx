export const GET_ALL_DETAIL_POHON = "[terimacor] get all detail pohon";
export const SET_DATA_DETAIL_POHON_SUCCESS =
  "[terimacor] get all detail pohon success";
export const SET_DATA_DETAIL_POHON_FAILED =
  "[terimacor] get all detail pohon failed";
export const SET_NO_POHON = "[terimacor] set no pohon";

export const SET_SUSUT = "[terimacor] set susust";
export const SET_SUSUT_SUCCESS = "[terimacor] set susut success";
export const SET_BERAT_TERIMA = "[terimacor] set berat terima";

export const ADD_TERIMA_COR = "[terimacor] add terima cor";

export const getAllDetailPohon = ({ noPohon }) => ({
  type: GET_ALL_DETAIL_POHON,
  payload: { data: noPohon },
});
export const setDataDetailPohonSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_POHON_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailPohonFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_POHON_FAILED,
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

export const addDataTerimaCor = {
  type: ADD_TERIMA_COR,
};
