import {
  setDataStaffSuccess,
  ADD_DATA_STAFF,
  ADD_DATA_DETAIL_JO,
  setDataDetailJOSuccess,
  ADD_JOB_ORDER_CHECKOUT,
  GET_DATA_BY_POHON,
  setDataByPohon,
  COUNT_BERAT_BALIK,
  setBeratBalik,
  SET_TYPE_POHON_MANUAL,
  getDataByPohon,
  setTukangByBahan,
  GET_TUKANG_BY_BAHAN,
  COUNT_BERAT_MANUAL,
  setBeratManual,
} from "../actions/tambahjoborder";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";
import { setLoadingButton } from "../actions/ui";

const addCheckoutJobOrder =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_JOB_ORDER_CHECKOUT) {
      dispatch(setLoadingButton(true));
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
        const dataKirim = {
          berat_awal: parseFloat(data[0].berat_awal),
          pohon_manual: data[0].pohon_manual,
          berat_balik: parseFloat(getLocal("berat_awal")),
          job_order: [],
        };
        dataDetail.forEach((element) => {
          const onSend = {
            no_job_order: element.no_job_order,
            no_pohon: data[0].no_buat,
            kode_barang: element.kode_barang,
            nama_barang: element.nama_barang,
            kode_jenis_bahan: element.kode_jenis_bahan,
            nama_bahan: data[0].nama_bahan,
            berat: parseFloat(element.berat),
            jumlah: parseInt(element.jumlah),
            berat_balik: parseFloat(element.berat_balik),
            tukang: data[0].staff.split("|")[0],
            kode_marketing: element.marketing,
            kode_customer: element.customer,
            catatan: element.catatan,
            kode_status_job_order: element.kode_status_job_order,
          };
          dataKirim.job_order.push(onSend);
        });
        api.TambahJobOrder.addTambahJobOrderCheckOut(dataKirim)
          .then((res) => {
            if (res.value !== null) {
              sweetalert.default.Success(res.value.message);
              localStorage.removeItem("data_staff");
              localStorage.removeItem("data_detail_jo");
              localStorage.removeItem("berat_awal");
            } else {
              sweetalert.default.Failed(res.error?.data.message);
            }
            dispatch(setLoadingButton(false));
          })
          .catch((er) => {
            console.log(er);
            dispatch(setLoadingButton(false));
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
    if (action.type === GET_TUKANG_BY_BAHAN) {
      const bahan = action.payload.data;
      api.TambahJobOrder.getDataTukangByBahan(bahan).then((res) => {
        if (res.value !== null) {
          dispatch(setTukangByBahan({ feedback: res.value }));
          dispatch(setBeratManual(res.value[0]?.berat));
        } else {
          dispatch(setBeratManual(0));
          dispatch(setTukangByBahan({ feedback: [] }));
          dispatch(change("FormDataStaff", "staff", ""));
        }
      });
    }
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
      if (data.no_buat === undefined) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else if (data.berat_awal === 0) {
        sweetalert.default.Failed("Berat Tidak Boleh 0 !");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(setDataStaffSuccess({ feedback: data }));
        dataLocal.push(data);
        writeLocal("berat_awal", data.berat_awal);
        writeLocal("data_staff", dataLocal);
      }
    }
    if (action.type === SET_TYPE_POHON_MANUAL) {
      if (action.payload.data) {
        dispatch(getDataByPohon({ pohon: "-" }));
      } else {
        dispatch(change("FormDataStaff", "no_buat", ""));
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
      const dataSystem = getLocal("tp_system");
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
            const beratAwal = parseFloat(getLocal("berat_awal"));
            data.staff = kodestaff;
            data.berat = parseFloat(data.berat).toFixed(3);
            data.berat_potong = parseFloat(data.berat_potong).toFixed(3);
            data.jumlah = parseFloat(data.jumlah);
            data.catatan = data.catatan.toUpperCase();
            data.nama_barang = data.nama_barang.toUpperCase();
            data.no_job_order =
              dataSystem.kode_toko + "-" + data.no_job_order.toUpperCase();
            // data.no_job_order = data.no_job_order.toUpperCase();
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataDetailJOSuccess({ feedback: data }));
            dataLocal.push(data);
            const beratAwalAkhir = parseFloat(beratAwal) - data.berat;
            writeLocal("berat_awal", beratAwalAkhir.toFixed(3));
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
            const beratAwal = parseFloat(getLocal("berat_awal"));
            data.staff = kodestaff;
            data.berat = parseFloat(data.berat).toFixed(3);
            data.berat_potong = parseFloat(data.berat_potong).toFixed(3);
            data.jumlah = parseFloat(data.jumlah);
            data.catatan = data.catatan.toUpperCase();
            data.nama_barang = data.nama_barang.toUpperCase();
            data.no_job_order =
              dataSystem.kode_toko + "-" + data.no_job_order.toUpperCase();
            // data.no_job_order = data.no_job_order.toUpperCase();
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataDetailJOSuccess({ feedback: data }));
            dataLocal.push(data);
            const beratAwalAkhir = parseFloat(beratAwal) - data.berat;
            writeLocal("berat_awal", beratAwalAkhir.toFixed(3));
            writeLocal("data_detail_jo", dataLocal);
          }
        }
      }
    }
  };

const countDataBeratBalik =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_MANUAL) {
      const berat_awal = parseFloat(action.payload.data || 0);
      const berat_stock = parseFloat(getState().tambahjoborder.beratManual);
      console.log(berat_stock);
      if (berat_awal > berat_stock) {
        sweetalert.default.Failed(
          "Berat Awal Tidak Boleh Melebihi Berat Tukang !"
        );
        dispatch(change("FormDataStaff", "berat_awal", 0));
      }
    }
    if (action.type === COUNT_BERAT_BALIK) {
      const beratBahan = parseFloat(action.payload.data || 0);
      const data = getState().form.FormDetailJobOrder.values;
      const beratBarang = parseFloat(data.berat_potong || 0);
      if (beratBahan > beratBarang) {
        sweetalert.default.Failed(
          "Berat Bahan Tidak Boleh Melebihi Berat Potong !"
        );
      } else {
        const beratBalik = beratBarang - beratBahan;
        dispatch(setBeratBalik(beratBalik));
      }
    }
  };

const data = [
  addDataStaff,
  addDataDetailJO,
  addCheckoutJobOrder,
  countDataBeratBalik,
];

export default data;
