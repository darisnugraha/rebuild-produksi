import {
  setDataMasterCustomerSuccess,
  setDataMasterCustomerFailed,
  GET_ALL_MASTER_CUSTOMER,
  GET_MASTER_CUSTOMER_ID,
  setEditFormMasterCustomer,
  setDataMasterCustomerEdit,
  ADD_MASTER_CUSTOMER,
  DELETE_MASTER_CUSTOMER,
  EDIT_MASTER_CUSTOMER,
} from "../actions/mastercustomer";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

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

const addDataMasterCustomer =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_CUSTOMER) {
      const data = getState().form.FormTambahMasterCustomer.values;
      const response = await api.MasterCustomer.addMasterCustomer(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterCustomer =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_CUSTOMER) {
      const data = {
        kode_customer: action.payload.data,
      };
      const response = await api.MasterCustomer.deleteMasterCustomer(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterCustomer =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_CUSTOMER) {
      const data = getState().form.FormTambahMasterCustomer.values;
      const response = await api.MasterCustomer.editMasterCustomer(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masteCustomerGetAll,
  masteCustomerGetDataID,
  addDataMasterCustomer,
  deleteDataMasterCustomer,
  editDataMasterCustomer,
];

export default data;
