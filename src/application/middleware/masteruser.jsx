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
  setMasterUser,
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
        if (res !== undefined) {
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
        return item._id === action.payload;
      });
      dispatch(setMasterUser({ id: dataMasterUserFilter[0]?._id || "" }));
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
      const dataKirim = {
        user_name: data.nama_lkp,
        user_id: data.nama_lkp,
        password: data.password,
        level: data.type,
      };
      api.MasterUser.addMasterUser(dataKirim).then((res) => {
        if (res !== undefined) {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Menambahkan Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menambahkan Data !"
            );
          }
        }
      });
    }
  };

const deleteDataMasterUser =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_USER) {
      const data = action.payload.data;
      api.MasterUser.deleteMasterUser(data).then((res) => {
        if (res !== undefined) {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Menghapus Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menghapus Data !"
            );
          }
        }
      });
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
      const id = getState().masteruser.userID;
      const dataKirim = {
        user_name: data.nama_lkp,
        level: data.type,
      };
      api.MasterUser.editMasterUser(dataKirim, id).then((res) => {
        if (res !== undefined) {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Merubah Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Merubah Data !"
            );
          }
        }
      });
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
