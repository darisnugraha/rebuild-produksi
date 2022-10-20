import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_ALL_DETAIL_JO,
  ADD_CLOSE_JO,
  SET_BERAT_AKHIR,
  setDataBeratAkhirSuccess,
  setDataBeratClose,
  GET_NO_INDUK_JOB_ORDER,
  setNoIndukJobOrder,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  getDataByNoInduk,
  setDataByNoInduk,
  getAllDetailJO,
  ADD_CLOSE_JO_LOCAL,
  DELETE_DATA_LOCAL_TERIMA_JO,
  EDIT_JOB_ORDER,
  setDataEditJobOrder,
  setIsEdit,
  SAVE_EDIT,
} from "../actions/closejo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_JO) {
      const no_job_order = action.payload.data;
      const type = action.payload.type;
      api.CloseJO.getDetailCloseJO(no_job_order.toUpperCase()).then((res) => {
        if (type === "CHANGE") {
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Yg Anda Cari Tidak Ada !");
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            } else {
              sweetalert.default.SuccessNoReload(res.value.pesan);
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        } else {
          if (res.value !== null) {
            if (res.value.length === 0) {
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            } else {
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        }
      });
    }
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      api.CloseJO.getNoIndukJO().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setNoIndukJobOrder(res.value));
            dispatch(getDataByNoInduk(res.value[1]?.no_induk_job_order));
          } else {
            dispatch(setNoIndukJobOrder([]));
            // dispatch(setDataDetailJOSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setNoIndukJobOrder([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const id = action.payload.data;
      // const divisi = getLocal("divisi");
      const dataKirim = {
        no_induk: id,
        // divisi: divisi.toUpperCase(),
      };
      const dataLocal = getLocal("close_jo_head");
      api.CloseJO.getJobOrderDetail(dataKirim).then((res) => {
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
                dispatch(
                  getAllDetailJO({
                    noJobOrder: dataArr[0]?.no_job_order,
                    datatype: "LOAD",
                  })
                );
              }
            } else {
              dispatch(setDataByNoInduk(res.value));
              dispatch(
                getAllDetailJO({
                  noJobOrder: res.value[0]?.no_job_order,
                  datatype: "LOAD",
                })
              );
            }
          } else {
            dispatch(setDataByNoInduk([]));
            dispatch(setDataDetailJOSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setDataByNoInduk([]));
        }
      });
    }
    if (action.type === EDIT_JOB_ORDER) {
      dispatch(setIsEdit(true));
      const noJo = action.payload.data;
      const dataLocal = getLocal("close_jo_head");
      api.CloseJO.getDetailCloseJO(noJo).then((res) => {
        if (res.value !== null) {
          const dataLocalfill = dataLocal.find(
            (item) => item.no_job_order === noJo
          );
          const data = res.value;
          data.no_induk_job_order = dataLocalfill.no_induk_job_order;
          data.berat_close = dataLocalfill.berat_close;
          data.keterangan = dataLocalfill.keterangan;
          let susut = 0;
          susut =
            parseFloat(data.berat_out || 0) -
            parseFloat(dataLocalfill.berat_close || 0);
          dispatch(setDataBeratAkhirSuccess({ feedback: susut.toFixed(3) }));
          dispatch(
            setDataBeratClose({ beratClose: dataLocalfill.berat_close })
          );
          dispatch(setDataEditJobOrder(data));
        } else {
          dispatch(setDataEditJobOrder(undefined));
        }
      });
    }
  };

const setBeratAkhir =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_BERAT_AKHIR) {
      let berat_murni = getState().closejo.feedback?.berat_out || 0;
      let berat_terima = action.payload.data || 0;
      let susut = 0;
      susut = parseFloat(berat_murni) - parseFloat(berat_terima);
      dispatch(setDataBeratAkhirSuccess({ feedback: susut.toFixed(3) }));
      dispatch(setDataBeratClose({ beratClose: berat_terima }));
    }
  };

const addCloseJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_CLOSE_JO) {
      const data = getLocal("close_jo_head");
      data.forEach((element) => {
        delete element.no_induk_job_order;
      });
      const onSendData = { close_job_order: data };
      api.CloseJO.addCloseJOCheckout(onSendData).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("close_jo_head");
          sweetalert.default.Success(
            res.value.message || "JO Berhasil di Close !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Terjadi Kesalahan !"
          );
        }
      });
    }
    if (action.type === ADD_CLOSE_JO_LOCAL) {
      const data = getState().form.FormCloseJO.values;
      const dataLocal = getLocal("close_jo_head");
      if (dataLocal === null) {
        const newArr = [];
        const onSendData = {
          berat_close: parseFloat(data.berat_close),
          keterangan: data.keterangan,
          no_job_order: data.no_job_order,
          no_induk_job_order: data.no_induk_job_order,
        };
        newArr.push(onSendData);
        writeLocal("close_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      } else {
        const newArr = dataLocal;
        const onSendData = {
          berat_close: parseFloat(data.berat_close),
          keterangan: data.keterangan,
          no_job_order: data.no_job_order,
          no_induk_job_order: data.no_induk_job_order,
        };
        newArr.push(onSendData);
        writeLocal("close_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
      // api.CloseJO.addCloseJOCheckout(onSendData).then((res) => {
      //   if (res.value !== null) {
      //     sweetalert.default.Success(
      //       res.value.message || "JO Berhasil di Close !"
      //     );
      //   } else {
      //     sweetalert.default.Failed(
      //       res.error?.data.message || "Terjadi Kesalahan !"
      //     );
      //   }
      // });
    }
    if (action.type === DELETE_DATA_LOCAL_TERIMA_JO) {
      const id = action.payload.data;
      const data = getLocal("close_jo_head");
      const dataFill = data.filter((val) => val.no_job_order !== id);
      writeLocal("close_jo_head", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === SAVE_EDIT) {
      const data = getState().form.FormCloseJO.values;
      const onSendData = {
        berat_close: parseFloat(data.berat_close),
        keterangan: data.keterangan,
        no_job_order: data.no_job_order,
        no_induk_job_order: data.no_induk_job_order,
      };
      const dataLocal = getLocal("close_jo_head");
      const dataLocalFill = dataLocal.filter(
        (element) => element.no_job_order !== data.no_job_order
      );
      dataLocalFill.push(onSendData);
      writeLocal("close_jo_head", dataLocalFill);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
  };

const data = [getDataDetailJo, addCloseJO, setBeratAkhir];

export default data;
