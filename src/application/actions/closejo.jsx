export const GET_ALL_DETAIL_JO = "[closejo] get all detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS = "[closejo] get all detail jo success";
export const SET_DATA_DETAIL_JO_FAILED = "[closejo] get all detail jo failed";

export const ADD_CLOSE_JO = "[closejo] add close jo";
export const ADD_CLOSE_JO_LOCAL = "[closejo] add close jo local";

export const SET_BERAT_AKHIR = "[closejo] set berat akhir";
export const SET_BERAT_AKHIR_SUCCESS = "[closejo] set berat akhir success";
export const SET_BERAT_CLOSE = "[closejo] set berat close";

export const GET_NO_INDUK_JOB_ORDER = "[closejo] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[closejo] set no induk job order";

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[closejo] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[closejo] set data by no induk job order";

export const EDIT_JOB_ORDER = "[closejo] edit data job order";
export const SET_DATA_EDIT_JOB_ORDER = "[closejo] set edit data job order";

export const DELETE_DATA_LOCAL_TERIMA_JO = "[closejo] delete data local";
export const SET_IS_EDIT = "[closejo] set is edit";
export const SAVE_EDIT = "[closejo] save edit";

export const getAllDetailJO = ({ noJobOrder, datatype }) => ({
  type: GET_ALL_DETAIL_JO,
  payload: { data: noJobOrder, type: datatype },
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

export const addCloseJOLocal = {
  type: ADD_CLOSE_JO_LOCAL,
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

export const getNoIndukJobOrder = {
  type: GET_NO_INDUK_JOB_ORDER,
};
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

export const editJobOrder = (noJO) => ({
  type: EDIT_JOB_ORDER,
  payload: { data: noJO },
});

export const setDataEditJobOrder = (feedback) => ({
  type: SET_DATA_EDIT_JOB_ORDER,
  payload: { data: feedback },
});

export const setIsEdit = (isEdit) => ({
  type: SET_IS_EDIT,
  payload: { data: isEdit },
});

export const saveEdit = {
  type: SAVE_EDIT,
};
