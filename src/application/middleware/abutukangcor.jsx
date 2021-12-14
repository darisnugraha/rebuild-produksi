import {
  setDataSetorOutstandCastingSuccess,
  setDataSetorOutstandCastingFailed,
  GET_ALL_SETOR_OUTSTAND_CASTING,
} from "../actions/abutukangcor";

const getSetorOutstandCasting =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SETOR_OUTSTAND_CASTING) {
      const response = await api.AbuTukangCOR.getSetorOutstandCasting({
        dataKirim: "",
      });
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataSetorOutstandCastingSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataSetorOutstandCastingFailed({ error: response.error }));
      }
    }
  };

const data = [getSetorOutstandCasting];

export default data;
