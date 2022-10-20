import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_ALL_DETAIL_JO,
  ADD_TERIMA_JO,
  setNoIndukJobOrder,
  GET_NO_INDUK_JOB_ORDER,
  getDataByNoInduk,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  setDataByNoInduk,
  getAllDetailJO,
  ADD_TERIMA_JO_LOCAL,
  DELETE_DATA_LOCAL_TERIMA_JO,
} from "../actions/terimajo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_JO) {
      const data = {
        nama_divisi: localStorage.getItem("divisi").toUpperCase(),
        no_job_order: action.payload.data,
      };
      const type = action.payload.dataType;
      api.TerimaJO.getDetailTerimaJO(data).then((res) => {
        if (type === "CHANGE") {
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Tidak Ada !");
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        } else {
          if (res.value !== null) {
            if (res.value.length === 0) {
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
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
      api.TerimaJO.getNoIndukJO().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setNoIndukJobOrder(res.value));
            dispatch(getDataByNoInduk(res.value[1]?.no_induk_job_order));
          } else {
            dispatch(setNoIndukJobOrder([]));
            dispatch(setDataDetailJOSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setNoIndukJobOrder([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const id = action.payload.data;
      const divisi = getLocal("divisi");
      const dataKirim = {
        no_induk: id,
        divisi: divisi.toUpperCase(),
      };
      const dataLocal = getLocal("terima_jo_head");
      api.TerimaJO.getJobOrderDetail(dataKirim).then((res) => {
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
                    type: "LOAD",
                  })
                );
              }
            } else {
              dispatch(setDataByNoInduk(res.value));
              dispatch(
                getAllDetailJO({
                  noJobOrder: res.value[0]?.no_job_order,
                  type: "LOAD",
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
  };

const addTerimaJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_JO) {
      const dataTerimaJO = getLocal("terima_jo_head");
      dataTerimaJO.forEach((element) => {
        delete element.no_induk_job_order;
      });
      const onSendCheckOut = { terima_job_order: dataTerimaJO };
      api.TerimaJO.addTerimaJOCheckout(onSendCheckOut).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("terima_jo_head");
          sweetalert.default.Success(
            res.value.message || "Berhasil Menyimpan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menyimpan Data !"
          );
        }
      });
    }
    if (action.type === ADD_TERIMA_JO_LOCAL) {
      const dataTerimaJO = getState().form.FormTerimaJO.values;
      const dataLocal = getLocal("terima_jo_head");
      if (dataLocal === null) {
        const newArr = [];
        const onSendCheckOut = {
          no_job_order: dataTerimaJO.no_job_order,
          divisi_tujuan: dataTerimaJO.divisi_terima.toUpperCase(),
          tukang_tujuan: dataTerimaJO.tukang_terima,
          kode_barang: dataTerimaJO.kode_barang,
          kode_jenis_bahan: dataTerimaJO.kode_jenis_bahan,
          jumlah_terima: parseFloat(dataTerimaJO.jumlah_akhir),
          berat_terima: parseFloat(dataTerimaJO.berat_akhir),
          no_induk_job_order: dataTerimaJO.no_induk_job_order,
        };
        newArr.push(onSendCheckOut);
        writeLocal("terima_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      } else {
        const newArr = dataLocal;
        const onSendCheckOut = {
          no_job_order: dataTerimaJO.no_job_order,
          divisi_tujuan: dataTerimaJO.divisi_terima.toUpperCase(),
          tukang_tujuan: dataTerimaJO.tukang_terima,
          kode_barang: dataTerimaJO.kode_barang,
          kode_jenis_bahan: dataTerimaJO.kode_jenis_bahan,
          jumlah_terima: parseFloat(dataTerimaJO.jumlah_akhir),
          berat_terima: parseFloat(dataTerimaJO.berat_akhir),
          no_induk_job_order: dataTerimaJO.no_induk_job_order,
        };
        newArr.push(onSendCheckOut);
        writeLocal("terima_jo_head", newArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
    }
    if (action.type === DELETE_DATA_LOCAL_TERIMA_JO) {
      const id = action.payload.data;
      const data = getLocal("terima_jo_head");
      const dataFill = data.filter((val) => val.no_job_order !== id);
      writeLocal("terima_jo_head", dataFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const data = [getDataDetailJo, addTerimaJO];

export default data;
