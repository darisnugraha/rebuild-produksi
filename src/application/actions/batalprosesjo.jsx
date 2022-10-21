export const GET_DATA_JO_BY_NO_PROSES =
  "[batalprosesjo] get data jo by no proses";
export const SET_DATA_JO_BY_NO_PROSES =
  "[batalprosesjo] set data jo by no proses";
export const ADD_DATA_BATAL_PROSES_JO =
  "[batalprosesjo] add data batal proses jo";
export const DELETE_DATA_BATAL_PROSES_JO =
  "[batalprosesjo] delete data batal proses jo";
export const POST_DATA_BATAL_PROSES_JO =
  "[batalprosesjo] post data batal proses jo";

export const getDataJOByNoProses = (NoProses) => ({
  type: GET_DATA_JO_BY_NO_PROSES,
  payload: { data: NoProses },
});

export const setDataJOByNoProses = (feedback) => ({
  type: SET_DATA_JO_BY_NO_PROSES,
  payload: { data: feedback },
});

export const addDataBatalProsesJO = {
  type: ADD_DATA_BATAL_PROSES_JO,
};

export const deleteDataBatalProsesJO = (noJO) => ({
  type: DELETE_DATA_BATAL_PROSES_JO,
  payload: { data: noJO },
});

export const postDataBatalProsesJO = {
  type: POST_DATA_BATAL_PROSES_JO,
};
