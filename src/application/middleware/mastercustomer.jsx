import {
  setDataMasterCustomerSuccess,
  setDataMasterCustomerFailed,
  GET_ALL_MASTER_CUSTOMER,
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

const data = [masteCustomerGetAll];

export default data;
