import {
  setDataMasterMarketingSuccess,
  setDataMasterMarketingFailed,
  GET_ALL_MASTER_MARKETING,
  GET_MASTER_MARKETING_ID,
  setEditFormMasterMarketing,
  setDataMasterMarketingEdit,
} from "../actions/mastermarketing";

const masterMarketingGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_MARKETING) {
      const response = await api.MasterMarketing.getAllMasterMarketing();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterMarketingSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterMarketingFailed({ error: response.error }));
      }
    }
  };

const masterMarketingGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_MARKETING_ID) {
      dispatch(setEditFormMasterMarketing(true));
      const dataMasterMarketing = getState().mastermarketing.feedback;
      const dataMasterMarketingFilter = dataMasterMarketing.filter((item) => {
        return item.kode_marketing === action.payload;
      });
      dispatch(
        setDataMasterMarketingEdit({ dataEdit: dataMasterMarketingFilter })
      );
    }
  };

const data = [masterMarketingGetAll, masterMarketingGetDataID];

export default data;
