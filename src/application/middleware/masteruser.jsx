import {
  setDataMasterUserSuccess,
  setDataMasterUserFailed,
  GET_ALL_MASTER_USER,
  GET_MASTER_USER_ID,
  setDataMasterUserEdit,
  ADD_MASTER_USER,
  DELETE_MASTER_USER,
  EDIT_MASTER_USER,
  setEditFormMasterUser,
} from "../actions/masteruser";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterUserGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_USER) {
      api.MasterUser.getAllMasterUser().then((res) => {
        if (res.value !== null) {
          delete res.value.statusCode;
          const newArr = [];
          const result = Object.keys(res.value).map((key) => [
            Number(key),
            res.value[key],
          ]);
          result.forEach((val) => {
            newArr.push(val[1]);
          });
          dispatch(setDataMasterUserSuccess({ feedback: newArr }));
        } else {
          dispatch(setDataMasterUserFailed({ error: res.error }));
        }
      });
    }
  };

const masterUserGetByID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_USER_ID) {
      dispatch(setEditFormMasterUser(true));
      const dataMasterUser = getState().masteruser.feedback;
      const dataMasterUserFilter = dataMasterUser.filter((item) => {
        return item.user_id === action.payload;
      });
      console.log(dataMasterUserFilter);
      dispatch(setDataMasterUserEdit({ dataEdit: dataMasterUserFilter }));
    }
  };

const addDataMasterUser =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_USER) {
      const data = getState().form.FormTambahMasterUser.values;
      const response = await api.MasterUser.addMasterUser(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterUser =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_USER) {
      const data = {
        user_id: action.payload.data,
      };
      const response = await api.MasterUser.deleteMasterUser(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterUser =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_USER) {
      const data = getState().form.FormTambahMasterUser.values;
      const response = await api.MasterUser.editMasterUser(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterUserGetAll,
  masterUserGetByID,
  addDataMasterUser,
  deleteDataMasterUser,
  editDataMasterUser,
];

export default data;
