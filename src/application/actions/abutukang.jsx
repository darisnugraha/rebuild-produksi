export const GET_ALL_ABU_TUKANG =
  "[abutukang] get all abu tukang";
export const SET_DATA_ABU_TUKANG_SUCCESS =
  "[abutukang] get all abu tukang success";
export const SET_DATA_ABU_TUKANG_FAILED =
  "[abutukang] get all abu tukang failed";

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
