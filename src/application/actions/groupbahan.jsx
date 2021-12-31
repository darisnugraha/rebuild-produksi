export const GET_ALL_GROUP_BAHAN = "[groupbahan] get all group bahan";
export const SET_DATA_GROUP_BAHAN_SUCCESS =
  "[groupbahan] get all group bahan success";
export const SET_DATA_GROUP_BAHAN_FAILED =
  "[groupbahan] get all group bahan failed";

export const getAllGroupBahan = {
  type: GET_ALL_GROUP_BAHAN,
};
export const setDataGroupBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_GROUP_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataGroupBahanFailed = ({ error }) => ({
  type: SET_DATA_GROUP_BAHAN_FAILED,
  payload: { data: error },
});
