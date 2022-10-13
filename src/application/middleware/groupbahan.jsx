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
      api.GroupBahan.getAllGroupBahan().then((res) => {
        if (res.value !== null) {
          dispatch(setDataGroupBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataGroupBahanSuccess({ feedback: [] }));
          dispatch(setDataGroupBahanFailed({ error: res.error }));
        }
      });
    }
  };

const data = [getAllDataGroupBahan];

export default data;
