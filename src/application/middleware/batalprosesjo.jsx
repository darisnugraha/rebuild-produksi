import {
  setDataJOByNoProses,
  GET_DATA_JO_BY_NO_PROSES,
  ADD_DATA_BATAL_PROSES_JO,
  DELETE_DATA_BATAL_PROSES_JO,
  POST_DATA_BATAL_PROSES_JO,
} from "../actions/batalprosesjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const batalProsesJOFlow =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DATA_JO_BY_NO_PROSES) {
      const noProses = action.payload.data;
      const check = noProses.includes("AK");
      if (check) {
        api.BatalProsesJO.getDataJOKirim(noProses).then((res) => {
          if (res.value !== null) {
            dispatch(setDataJOByNoProses(res.value));
          } else {
            dispatch(setDataJOByNoProses([]));
          }
        });
      } else {
        api.BatalProsesJO.getDataJOTerima(noProses).then((res) => {
          if (res.value !== null) {
            dispatch(setDataJOByNoProses(res.value));
          } else {
            dispatch(setDataJOByNoProses([]));
          }
        });
      }
    }
    if (action.type === ADD_DATA_BATAL_PROSES_JO) {
      const data = getState().form.FormBatalProsesJO.values;
      const dataLocal = getLocal("batal_proses_jo");
      if (dataLocal === null || dataLocal.length === 0) {
        const newArr = [];
        newArr.push(data);
        writeLocal("batal_proses_jo", newArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      } else {
        const checkLocal = dataLocal[0].no_proses.includes("AK");
        const checkForm = data.no_proses.includes("AK");
        if (checkLocal === checkForm) {
          const newArr = dataLocal;
          newArr.push(data);
          writeLocal("batal_proses_jo", newArr);
          sweetalert.default.Success("Berhasil Menyimpan Data !");
        } else {
          sweetalert.default.Failed("Tipe Proses Berbeda !");
        }
      }
    }
    if (action.type === DELETE_DATA_BATAL_PROSES_JO) {
      const noJO = action.payload.data;
      const dataLocal = getLocal("batal_proses_jo");
      const dataLocalFil = dataLocal.filter(
        (item) => item.no_job_order !== noJO
      );
      writeLocal("batal_proses_jo", dataLocalFil);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === POST_DATA_BATAL_PROSES_JO) {
      const dataLocal = getLocal("batal_proses_jo");
      const check = dataLocal[0].no_proses.includes("AK");
      if (check) {
        const newArr = [];
        dataLocal.forEach((element) => {
          const row = {
            no_kirim: element.no_proses,
            no_job_order: element.no_job_order,
          };
          newArr.push(row);
        });
        const dataKirim = { cancel_kirim_job_order: newArr };
        api.BatalProsesJO.addBatalProsesJO(dataKirim).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("batal_proses_jo");
            sweetalert.default.Success(
              res.value.message || "Berhasil Menyimpan Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
          }
        });
      } else {
        const newArr = [];
        dataLocal.forEach((element) => {
          const row = {
            no_terima: element.no_proses,
            no_job_order: element.no_job_order,
          };
          newArr.push(row);
        });
        const dataKirim = { cancel_terima_job_order: newArr };
        api.BatalProsesJO.addBatalProsesJOTerima(dataKirim).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("batal_proses_jo");
            sweetalert.default.Success(
              res.value.message || "Berhasil Menyimpan Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Terjadi Kesalahan !"
            );
          }
        });
      }
    }
  };

const data = [batalProsesJOFlow];

export default data;
