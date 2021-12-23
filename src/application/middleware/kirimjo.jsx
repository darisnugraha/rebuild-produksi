import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_DETAIL_JO_POST_METHOD,
  COUNT_BERAT_KIRIM_JO,
  setCountBeratKirimJO,
  SAVE_JUMLAH_KIRIM_JO,
  setJumlahKirimJO,
  ADD_LOCAL_KIRIM_JO,
  ADD_LOCAL_TAMBAHAN,
} from "../actions/kirimjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_JO_POST_METHOD) {
      const noJO = action.payload.data;
      const asalDivisi = localStorage.getItem("divisi");
      let data = {
        asal_divisi: asalDivisi,
        no_job_order: noJO,
        parameter: "GET_DETAIL",
      };
      const response = await api.KirimJO.getDetailJO({ dataKirim: data });
      if (response.value?.status === "berhasil") {
        sweetalert.default.SuccessNoReload("Berhasil !");
        dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
      } else {
        sweetalert.default.Failed("NO JO Tidak Ada !");
        dispatch(setDataDetailJOFailed({ error: response.error }));
      }
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_KIRIM_JO) {
      let total = 0;
      const berat_kirim = action.payload;
      const berat_akhir = parseFloat(
        getState().kirimjo.dataDetailJO[0].berat_akhir
      );
      total = berat_akhir - berat_kirim;
      dispatch(setCountBeratKirimJO(total.toFixed(3)));
    }
  };

const savejumlahkirim =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SAVE_JUMLAH_KIRIM_JO) {
      const jumlahKirim = action.payload;
      dispatch(setJumlahKirimJO(jumlahKirim));
    }
  };

const addDataLocalKirimJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_LOCAL_KIRIM_JO) {
      const data = getState().form.FormKirimJO.values;
      const divisi = getState().kirimbahanadmin.feedback;
      const divisiFil = divisi.filter((item) => {
        return item.kode_divisi === data.divisi_tujuan;
      });
      const dataKirim = {
        nama_divisi: divisiFil[0].nama_divisi,
        no_job_order: data.no_job_order,
        staff: data.tukang_tujuan,
        staffasal: data.tukang_asal,
      };
      const dataKirimcart = {
        berat: parseFloat(data.berat_kirim),
        jumlah: parseFloat(data.jumlah_kirim),
        tujuan_divisi: divisiFil[0].nama_divisi,
        no_job_order: data.no_job_order,
        staff: data.tukang_tujuan,
        susut: data.susut,
      };
      if (dataKirim.berat === 0 || dataKirim.jumlah === 0) {
        sweetalert.default.Failed("Isi Berat dan Jumlah Terlebih Dahulu !");
      } else {
        sweetalert.default.Success("Berhasil Menyimpan Data !");
        writeLocal("kirim_jo_head", dataKirim);
        writeLocal("kirim_jo_head_cart", dataKirimcart);
      }
    }
  };

const addLocalDataTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_LOCAL_TAMBAHAN) {
      const dataHeadCart = getLocal("kirim_jo_head_cart");
      const dataHead = getLocal("kirim_jo_head");
      const data = getState().form.FormDetailTambahan.values;
      if (dataHeadCart === undefined || dataHeadCart === null) {
        sweetalert.default.Failed("Isi Detail Kirim Jo Terlebih Dahulu !");
      } else {
        const dataDetailBahan = [];
        dataDetailBahan.push(data);
        dataHeadCart.asal_divisi = localStorage.getItem("divisi");
        dataHeadCart.detail_bahan = dataDetailBahan;
        const response = await api.KirimJO.addKirimJOCart(dataHeadCart);
        log(response);
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            dataHead.asal_divisi = localStorage.getItem("divisi");
            const responsedua = await api.KirimJO.addKirimJOCheckOut(dataHead);
            if (responsedua.value !== null) {
              if (responsedua.value.status === "berhasil") {
                localStorage.removeItem("kirim_jo_head_cart");
                localStorage.removeItem("kirim_jo_head");
                sweetalert.default.Success(responsedua.value.pesan);
              } else {
                sweetalert.default.Failed(responsedua.value.pesan);
              }
            } else {
              sweetalert.default.Failed(responsedua.error.data.pesan);
            }
          } else {
            sweetalert.default.Failed(response.value.pesan);
          }
        } else {
          sweetalert.default.Failed(response.error.data.pesan);
        }
      }
    }
  };

const data = [
  getDataDetailJO,
  countberatbatu,
  savejumlahkirim,
  addDataLocalKirimJo,
  addLocalDataTambahan,
];

export default data;
