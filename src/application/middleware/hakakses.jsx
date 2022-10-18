import { ADD_HAK_AKSES_MENU_USER } from "../actions/hakakses";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const addDataMenuUser =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_HAK_AKSES_MENU_USER) {
      const data = action.payload.data;
      const user = action.payload.user;
      const dataKirim = {
        user_id: user,
        hak_akses: data,
      };
      api.HakAkses.addHakAkses(dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [addDataMenuUser];

export default data;
