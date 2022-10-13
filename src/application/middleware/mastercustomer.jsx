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
      api.MasterCustomer.getAllMasterCustomer().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterCustomerSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterCustomerFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterCustomer.getMasterCustomerById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterCustomerEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterCustomerEdit({ dataEdit: [] }));
        }
      });
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
      api.MasterCustomer.addMasterCustomer(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const deleteDataMasterCustomer =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_CUSTOMER) {
      const id = action.payload.data;
      api.MasterCustomer.deleteMasterCustomer("/" + id).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menghapus Data !"
          );
        }
      });
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
      const id = data.id;
      delete data.id;
      api.MasterCustomer.editMasterCustomer("/" + id, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Merubah Data !"
          );
        }
      });
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
