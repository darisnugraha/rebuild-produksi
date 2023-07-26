import {
  setDataJobOrderSuccess,
  setDataJobOrderFailed,
  GET_ALL_JOB_ORDER,
  ADD_GABUNG_JO,
  ADD_GABUNG_JO_LOCAL,
  GET_NO_INDUK_JOB_ORDER,
  setNoIndukJobOrder,
  getDataByNoInduk,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  setDataByNoInduk,
  getAllJobOrder,
  DELETE_JOB_ORDER,
} from "../actions/gabungjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_JOB_ORDER) {
      api.GabungJO.getDetailJOGabung(action.payload.data).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            const berat_dua = parseFloat(res.value[0].berat_akhir);
            const berat_satu =
              parseFloat(getState().form.FormGabungJO.values.berat_akhir_dua) ||
              0;
            let total = 0;
            total = berat_satu + berat_dua;
            dispatch(
              setDataJobOrderSuccess({
                feedback: res.value,
                noJO: action.payload.data,
                beratGabung: total,
              })
            );
          } else {
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
            dispatch(setDataJobOrderFailed({ error: res.value }));
          }
        } else {
          sweetalert.default.Failed(res.error?.data.message);
          dispatch(setDataJobOrderSuccess({ feedback: [], noJO: "" }));
          dispatch(setDataJobOrderFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      api.KirimJO.getNoIndulJO().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setNoIndukJobOrder(res.value));
            dispatch(getDataByNoInduk(res.value[1]?.no_induk_job_order));
          }
        } else {
          dispatch(setNoIndukJobOrder([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const noIndukJO = action.payload.data;
      const dataLocal = getLocal("gabung_jo_head");
      api.GabungJO.getNOJobOrder(noIndukJO).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            if (dataLocal !== null) {
              const dataArr = res.value.filter((val) => {
                return !dataLocal.some((item) => {
                  return val.no_job_order === item.no_job_order;
                });
              });
              dispatch(setDataByNoInduk(dataArr));
              if (dataArr.length !== 0) {
                dispatch(getAllJobOrder(dataArr[0]?.no_job_order));
              }
            } else {
              dispatch(setDataByNoInduk(res.value));
              dispatch(getAllJobOrder(res.value[0]?.no_job_order));
            }
          } else {
            dispatch(setDataByNoInduk([]));
          }
        } else {
          dispatch(setDataByNoInduk([]));
        }
      });
    }
  };

const addDataGabungJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_GABUNG_JO_LOCAL) {
      const data = getState().form.FormGabungJO.values;
      const dataLocal = getLocal("gabung_jo_head");

      let newArr = [];
      if (dataLocal === null) {
        const onSend = {
          asal_divisi: data.asal_divisi,
          berat_out: parseFloat(data.berat_akhir),
          kode_jenis_bahan: data.kode_jenis_bahan,
          no_job_order: data.no_job_order,
          no_induk_job_order: data.no_induk_job_order,
        };
        newArr.push(onSend);
        writeLocal("gabung_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menambahkan Data !");
      } else {
        // const check = dataLocal.filter((val) => {
        //   if (val.no_induk_job_order === data.no_induk_job_order) {
        //     return 1;
        //   } else {
        //     return 0;
        //   }
        // });
        // if (check.length === 0) {
        //   sweetalert.default.Failed("No Induk Berbeda !");
        // } else {
        //   newArr = dataLocal;
        //   const onSend = {
        //     asal_divisi: data.asal_divisi,
        //     berat_out: parseFloat(data.berat_akhir),
        //     kode_jenis_bahan: data.kode_jenis_bahan,
        //     no_job_order: data.no_job_order,
        //     no_induk_job_order: data.no_induk_job_order,
        //   };
        //   newArr.push(onSend);
        //   writeLocal("gabung_jo_head", newArr);
        //   sweetalert.default.Success("Berhasil Menambahkan Data !");
        // }
        newArr = dataLocal;
        const onSend = {
          asal_divisi: data.asal_divisi,
          berat_out: parseFloat(data.berat_akhir),
          kode_jenis_bahan: data.kode_jenis_bahan,
          no_job_order: data.no_job_order,
          no_induk_job_order: data.no_induk_job_order,
        };
        newArr.push(onSend);
        writeLocal("gabung_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menambahkan Data !");
      }
    }
    if (action.type === ADD_GABUNG_JO) {
      const data = getLocal("gabung_jo_head");
      data.forEach((element) => {
        delete element.no_induk_job_order;
      });
      const onSend = {
        detail_job_order: data,
        berat_akhir: data.reduce((a, b) => a + b.berat_out, 0),
        berat_in: data.reduce((a, b) => a + b.berat_out, 0),
      };
      api.GabungJO.addGabungJO(onSend).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("gabung_jo_head");
          sweetalert.default.Success(
            res.value.message || "Berhasil Menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
    if (action.type === DELETE_JOB_ORDER) {
      const noJO = action.payload.data;
      const data = getLocal("gabung_jo_head");
      const dataFill = data.filter((item) => item.no_job_order !== noJO);
      writeLocal("gabung_jo_head", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const data = [getDataJO, addDataGabungJO];

export default data;
