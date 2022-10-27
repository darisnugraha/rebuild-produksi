import {
  setDataStaffSuccess,
  ADD_DATA_STAFF,
  ADD_DATA_DETAIL_JO,
  setDataDetailJOSuccess,
  ADD_JOB_ORDER_CHECKOUT,
  GET_DATA_BY_POHON,
  setDataByPohon,
} from "../actions/tambahjoborder";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const addCheckoutJobOrder =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_JOB_ORDER_CHECKOUT) {
      const data = getLocal("data_staff");
      const dataDetail = getLocal("data_detail_jo");
      if (
        data === undefined ||
        getLocal("data_detail_jo") === undefined ||
        data === null ||
        getLocal("data_detail_jo") === null
      ) {
        sweetalert.default.Failed(
          "Isi Data Staff dan Detail JO Terlebih Dahulu !"
        );
      } else {
        const dataKirim = { job_order: [] };
        dataDetail.forEach((element) => {
          const onSend = {
            no_job_order: element.no_job_order,
            no_pohon: data[0].no_buat,
            kode_barang: element.kode_barang,
            nama_barang: element.nama_barang,
            kode_jenis_bahan: element.kode_jenis_bahan,
            berat: element.berat,
            jumlah: element.jumlah,
            tukang: data[0].staff,
            kode_marketing: element.marketing,
            kode_customer: element.customer,
            catatan: element.catatan,
            kode_status_job_order: element.kode_status_job_order,
          };
          dataKirim.job_order.push(onSend);
        });
        api.TambahJobOrder.addTambahJobOrderCheckOut(dataKirim).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(res.value.message);
            localStorage.removeItem("data_staff");
            localStorage.removeItem("data_detail_jo");
          } else {
            sweetalert.default.Failed(res.error?.data.message);
          }
        });
      }
    }
  };

const addDataStaff =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DATA_BY_POHON) {
      const pohon = action.payload.data;
      api.TambahJobOrder.getDataPohon(pohon).then((res) => {
        if (res.value !== null) {
          dispatch(setDataByPohon({ feedback: res.value[0] }));
        } else {
          dispatch(setDataByPohon({ feedback: undefined }));
        }
      });
    }
    if (action.type === ADD_DATA_STAFF) {
      const data = getState().form.FormDataStaff.values;
      data.pentolan = 0;
      let dataLocal = [];
      data.no_buat = data.no_buat.toUpperCase();
      if (data.no_buat === undefined) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(setDataStaffSuccess({ feedback: data }));
        dataLocal.push(data);
        writeLocal("data_staff", dataLocal);
      }
    }
  };

const addDataDetailJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_DETAIL_JO) {
      if (
        getLocal("data_staff") === undefined ||
        getLocal("data_staff") === null
      ) {
        sweetalert.default.Failed("Isi Data Staff Terlebih Dahulu !");
      } else {
        const staff = getLocal("data_staff");
        const kodestaff = staff[0].staff;
        if (
          getLocal("data_detail_jo") === undefined ||
          getLocal("data_detail_jo") === null
        ) {
          let data = getState().form.FormDetailJobOrder.values;
          let dataLocal = [];
          if (
            data.no_job_order === undefined ||
            data.nama_barang === undefined ||
            data.jumlah === undefined ||
            data.berat === undefined ||
            data.catatan === undefined
          ) {
            sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
          } else {
            data.staff = kodestaff;
            data.berat = parseFloat(data.berat);
            data.jumlah = parseFloat(data.jumlah);
            data.catatan = data.catatan.toUpperCase();
            data.nama_barang = data.nama_barang.toUpperCase();
            data.no_job_order = data.no_job_order.toUpperCase();
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataDetailJOSuccess({ feedback: data }));
            dataLocal.push(data);
            writeLocal("data_detail_jo", dataLocal);
          }
        } else {
          let data = getState().form.FormDetailJobOrder.values;
          let dataLocal = getLocal("data_detail_jo");
          if (
            data.no_job_order === undefined ||
            data.nama_barang === undefined ||
            data.jumlah === undefined ||
            data.berat === undefined ||
            data.catatan === undefined
          ) {
            sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
          } else {
            data.staff = kodestaff;
            data.berat = parseFloat(data.berat);
            data.jumlah = parseFloat(data.jumlah);
            data.catatan = data.catatan.toUpperCase();
            data.nama_barang = data.nama_barang.toUpperCase();
            data.no_job_order = data.no_job_order.toUpperCase();
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataDetailJOSuccess({ feedback: data }));
            dataLocal.push(data);
            writeLocal("data_detail_jo", dataLocal);
          }
        }
      }
    }
  };

const data = [addDataStaff, addDataDetailJO, addCheckoutJobOrder];

export default data;
