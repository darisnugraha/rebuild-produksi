import {
  setDataGroupBahanSuccess,
  setDataGroupBahanFailed,
  GET_ALL_GROUP_BAHAN,
} from "../actions/groupbahan";

const getAllDataGroupBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_GROUP_BAHAN) {
      const response = await api.GroupBahan.getAllGroupBahan();
      if (response.value?.status === "berhasil") {
        dispatch(setDataGroupBahanSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataGroupBahanFailed({ error: response.error }));
      }
    }
  };

const data = [getAllDataGroupBahan];

export default data;
