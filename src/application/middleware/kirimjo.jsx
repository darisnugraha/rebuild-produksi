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
  countBeratKirimJO,
  ADD_LOCAL_BATU,
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
      api.KirimJO.getDetailJO(
        noJO.toUpperCase(),
        asalDivisi.toUpperCase()
      ).then((res) => {
        if (res.value !== null) {
          if (res.value.length === 0) {
            sweetalert.default.Failed("Data Yg Anda Cari Tidak Ada !");
            dispatch(setDataDetailJOFailed({ feedback: [] }));
          } else {
            sweetalert.default.SuccessNoReload("Berhasil !");
            dispatch(setDataDetailJOSuccess({ feedback: res.value }));
            dispatch(setCountBeratKirimJO(res.value[0].berat_akhir));
          }
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Mengambil Data !"
          );
          dispatch(setDataDetailJOFailed({ error: res.error }));
        }
      });
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
      const berat_kirim = parseFloat(action.payload);
      const berat_akhir = parseFloat(
        getState().kirimjo.dataDetailJO[0].berat_akhir
      );
      if (berat_kirim > berat_akhir) {
        sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
        dispatch(countBeratKirimJO({ beratKirim: 0 }));
      } else {
        total = berat_akhir - berat_kirim;
        dispatch(setCountBeratKirimJO(total.toFixed(3)));
      }
    }
  };

const savejumlahkirim =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SAVE_JUMLAH_KIRIM_JO) {
      const jumlahKirim = parseInt(action.payload);
      const jumlahAkhir = parseInt(
        getState().kirimjo.dataDetailJO[0].stock_akhir
      );
      if (jumlahKirim > jumlahAkhir) {
        sweetalert.default.Failed("Jumlah Lebih Dari Jumlah Akhir !");
        dispatch(setJumlahKirimJO(0));
      } else {
        dispatch(setJumlahKirimJO(jumlahKirim));
      }
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
      if (data.berat_kirim === 0 || data.jumlah_kirim === 0) {
        sweetalert.default.Failed("Isi Berat dan Jumlah Terlebih Dahulu !");
      } else {
        const divisi_asal = getLocal("divisi");
        const dataSave = {
          no_job_order: data.no_job_order.toUpperCase(),
          divisi_asal: divisi_asal.toUpperCase(),
          divisi_tujuan: data.divisi_tujuan.toUpperCase(),
          tukang_asal: data.tukang_asal.toUpperCase(),
          tukang_tujuan: data.tukang_tujuan.toUpperCase(),
          kode_barang: data.kode_barang.toUpperCase(),
          nama_barang: data.nama_barang.toUpperCase(),
          kode_jenis_bahan: data.kode_jenis_bahan.toUpperCase(),
          jumlah_kirim: parseInt(data.jumlah_kirim || 0),
          berat_kirim: parseFloat(data.berat_kirim || 0),
          susut: parseFloat(data.susut || 0),
          jumlah_berat_batu_tak_terpakai: parseFloat(
            data.jumlah_berat_batu_tak_terpakai
          ),
          nama_bahan_tambahan: "",
          jumlah_tambahan: 0,
          berat_tambahan: 0,
        };
        sweetalert.default.Success("Berhasil Menyimpan Data !");
        writeLocal("kirim_jo_head", dataSave);
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
      const dataHead = getLocal("kirim_jo_head");
      const dataDetailBatu = getLocal("detail_batu");
      const data = getState().form.FormDetailTambahan.values;
      if (dataHead === undefined || dataHead === null) {
        sweetalert.default.Failed("Isi Detail Kirim Jo Terlebih Dahulu !");
      } else if (
        dataDetailBatu.length === 0 ||
        dataDetailBatu === undefined ||
        dataDetailBatu === null
      ) {
        sweetalert.default.Failed("Detail Batu Harus Di isi !");
      } else {
        dataHead.nama_bahan_tambahan = data.nama_bahan;
        dataHead.jumlah_tambahan = parseInt(data.jumlah_bahan);
        dataHead.berat_tambahan = parseFloat(data.berat_bahan);
        dataHead.detail_batu = dataDetailBatu;
        api.KirimJO.addKirimJOCart(dataHead).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("kirim_jo_head");
            localStorage.removeItem("detail_batu");
            sweetalert.default.Success(
              res.value.message || "Berhasil Mengirim Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Gagal Mengirim Data !"
            );
          }
        });
      }
    }
    if (action.type === ADD_LOCAL_BATU) {
      const detailBatu = getLocal("detail_batu");
      if (detailBatu === null || detailBatu === undefined) {
        const arr = [];
        const data = getState().form.FormDetailBatu.values;
        data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
        data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
        arr.push(data);
        writeLocal("detail_batu", arr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      } else {
        const arr = detailBatu;
        const data = getState().form.FormDetailBatu.values;
        data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
        data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
        arr.push(data);
        writeLocal("detail_batu", arr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
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
