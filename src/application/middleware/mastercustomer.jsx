import {
  setDataMasterCustomerSuccess,
  setDataMasterCustomerFailed,
  GET_ALL_MASTER_CUSTOMER,
  GET_MASTER_CUSTOMER_ID,
  setEditFormMasterCustomer,
  setDataMasterCustomerEdit,
} from "../actions/mastercustomer";

const masteCustomerGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_CUSTOMER) {
      const response = await api.MasterCustomer.getAllMasterCustomer();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterCustomerSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterCustomerFailed({ error: response.error }));
      }
    }
  };

const masteCustomerGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_CUSTOMER_ID) {
      dispatch(setEditFormMasterCustomer(true));
      const dataMasterCustomer = getState().mastercustomer.feedback;
      const dataMasterCustomerFilter = dataMasterCustomer.filter((item) => {
        return item.kode_customer === action.payload;
      });
      dispatch(
        setDataMasterCustomerEdit({ dataEdit: dataMasterCustomerFilter })
      );
    }
  };

const data = [masteCustomerGetAll, masteCustomerGetDataID];

export default data;
