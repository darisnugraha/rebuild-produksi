import {
  setDataStaffSuccess,
  ADD_DATA_STAFF,
  ADD_DATA_DETAIL_JO,
  setDataDetailJOSuccess,
  ADD_JOB_ORDER_CHECKOUT,
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
        const onSend = {
          pentolan: 0,
          nama_bahan: data[0].nama_bahan,
          no_buat: data[0].no_buat,
          staff: data[0].staff,
        };
        const response = await api.TambahJobOrder.addTambahJobOrderCheckOut(
          onSend
        );
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            sweetalert.default.Success(response.value.pesan);
            localStorage.removeItem("data_staff");
            localStorage.removeItem("data_detail_jo");
          } else {
            sweetalert.default.Failed(response.value.pesan);
          }
        } else {
          sweetalert.default.Failed(response.error.data.pesan);
        }
      }
    }
  };

const addDataStaff =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_STAFF) {
      const data = getState().form.FormDataStaff.values;
      const dataBahan = getState().masterbahan.feedback;
      const dataBahanFill = dataBahan.filter((item) => {
        return item.kode_bahan === data.nama_bahan;
      });
      data.nama_bahan = dataBahanFill[0].nama_bahan;
      data.pentolan = 0;
      let dataLocal = [];
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
            delete data.nama_barang;
            data.berat = parseFloat(data.berat);
            data.jumlah = parseFloat(data.jumlah);
            const response = await api.TambahJobOrder.addTambahJobOrderCart(
              data
            );
            if (response.value !== null) {
              if (response.value.status === "berhasil") {
                sweetalert.default.Success("Berhasil Menambahkan Data !");
                dispatch(setDataDetailJOSuccess({ feedback: data }));
                dataLocal.push(data);
                writeLocal("data_detail_jo", dataLocal);
              } else {
                sweetalert.default.Failed(response.value.pesan);
              }
            } else {
              sweetalert.default.Failed(response.error.data.pesan);
            }
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
            delete data.nama_barang;
            data.berat = parseFloat(data.berat);
            data.jumlah = parseFloat(data.jumlah);
            const response = await api.TambahJobOrder.addTambahJobOrderCart(
              data
            );
            if (response.value !== null) {
              if (response.value.status === "berhasil") {
                sweetalert.default.Success("Berhasil Menambahkan Data !");
                dispatch(setDataDetailJOSuccess({ feedback: data }));
                dataLocal.push(data);
                writeLocal("data_detail_jo", dataLocal);
              } else {
                sweetalert.default.Failed(response.value.pesan);
              }
            } else {
              sweetalert.default.Failed(response.error.data.pesan);
            }
          }
        }
      }
    }
  };

const data = [addDataStaff, addDataDetailJO, addCheckoutJobOrder];

export default data;
