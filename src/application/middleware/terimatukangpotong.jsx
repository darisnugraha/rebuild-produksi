import {
  setDataTerimaTukangPotongSuccess,
  setDataTerimaTukangPotongFailed,
  GET_TERIMA_TUKANG_POTONG,
  setNoPohon,
} from "../actions/terimatukangpotong";

const getDataPohon =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_TERIMA_TUKANG_POTONG) {
      const response = await api.TerimaTukangPotong.getTerimaTukangPotong({
        data: action.payload.data,
      });
      dispatch(setNoPohon({ feedback: action.payload.data }));
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataTerimaTukangPotongSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataTerimaTukangPotongSuccess({ feedback: [] }));
        dispatch(setDataTerimaTukangPotongFailed({ error: response.error }));
      }
    }
  };

const data = [getDataPohon];

export default data;
