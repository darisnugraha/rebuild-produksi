import {
  GET_ALL_MASTER_BILL_OF_MATERIALS,
  setDataMasterBillOfMaterialsFailed,
  GET_MASTER_BILL_OF_MATERIALS_ID,
  setEditFormMasterBillOfMaterials,
  setDataMasterBillOfMaterialsEdit,
  setDataMasterBillOfMaterialsSuccess,
  DELETE_MASTER_BILL_OF_MATERIALS,
  ADD_MASTER_BILL_OF_MATERIALS,
  EDIT_MASTER_BILL_OF_MATERIALS,
  ADD_DETAIL_BAHAN,
  setDetailBahan,
  DELETE_DETAIL_BAHAN,
  EDIT_DETAIL_BAHAN,
  seteditDetailBahan,
  SAVE_EDIT_DETAIL_BAHAN,
} from "../actions/masterbillofmaterials";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { v4 as uuidv4 } from "uuid";

const masterBillOfMaterialsGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_BILL_OF_MATERIALS) {
      api.MasterBillOfMaterials.getAllMasterBillOfMaterials().then((res) => {
        const newArr = [];
        let no = 0;
        if (res.value !== null) {
          res.value.forEach((val) => {
            newArr.push({
              key: no++,
              detail_bahan: val.detail_bahan,
              edit_by: val.edit_by,
              edit_date: val.edit_date,
              input_by: val.input_by,
              input_date: val.input_date,
              kode_kelompok: val.kode_kelompok,
              status: val.status,
              __v: val.__v,
              _id: val._id,
            });
          });
          dispatch(setDataMasterBillOfMaterialsSuccess({ feedback: newArr }));
        } else {
          dispatch(setDataMasterBillOfMaterialsFailed({ error: res.error }));
        }
      });
    }
  };

const masterBillOfMaterialsGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_BILL_OF_MATERIALS_ID) {
      dispatch(setEditFormMasterBillOfMaterials(true));
      const id = action.payload;
      api.MasterBillOfMaterials.getMasterBillOfMaterialsById(id).then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataMasterBillOfMaterialsEdit({
              dataEdit: res.value,
            })
          );
          const newArr = [];
          const data = res.value.detail_bahan;
          data.forEach((element) => {
            newArr.push({
              id: uuidv4(),
              kode_bahan: element.kode_bahan,
              persentase: element.persentase,
            });
          });
          dispatch(setDetailBahan(newArr));
          writeLocal("BahanDetail", newArr);
        } else {
          dispatch(
            setDataMasterBillOfMaterialsEdit({
              dataEdit: [],
            })
          );
        }
      });
    }
  };

const addDataMasterBillOfMaterials =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_BILL_OF_MATERIALS) {
      const data = getState().form.FormTambahBillOfMaterials.values;
      const dataDetail = getLocal("BahanDetail");
      const dataDetailKirim = [];
      dataDetail.forEach((element) => {
        dataDetailKirim.push({
          kode_bahan: element.kode_bahan,
          persentase: parseFloat(element.persentase),
        });
      });
      const dataKirim = {
        kode_kelompok: data.kode_kelompok,
        detail_bahan: dataDetailKirim,
      };
      api.MasterBillOfMaterials.addMasterBillOfMaterials(dataKirim).then(
        (res) => {
          if (res.value !== null) {
            localStorage.removeItem("BahanDetail");
            sweetalert.default.Success("Berhasil Menambahkan Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menambahkan Data !"
            );
          }
        }
      );
    }
  };

const deleteDataMasterBillOfMaterials =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_BILL_OF_MATERIALS) {
      const id = action.payload.data;
      api.MasterBillOfMaterials.deleteMasterBillOfMaterials("/" + id).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Menghapus Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menghapus Data"
            );
          }
        }
      );
    }
  };

const editDataMasterBillOfMaterials =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_BILL_OF_MATERIALS) {
      const data = getState().form.FormTambahBillOfMaterials.values;
      const id = data.id;
      const dataDetail = getLocal("BahanDetail");
      const dataDetailKirim = [];
      dataDetail.forEach((element) => {
        dataDetailKirim.push({
          kode_bahan: element.kode_bahan,
          persentase: parseFloat(element.persentase),
        });
      });
      const dataKirim = {
        kode_kelompok: data.kode_kelompok,
        detail_bahan: dataDetailKirim,
      };
      api.MasterBillOfMaterials.editMasterBillOfMaterials(
        "/" + id,
        dataKirim
      ).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("BahanDetail");
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
    }
  };

const detailBahanFlow =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DETAIL_BAHAN) {
      const dataArr = getLocal("BahanDetail") || [];
      const data = getState().form.FormTambahDetailBahan.values;
      data.id = uuidv4();
      if (dataArr.length === 0) {
        const dataSave = [];
        dataSave.push(data);
        writeLocal("BahanDetail", dataSave);
        dispatch(setDetailBahan(dataSave));
      } else {
        const dataSave = dataArr;
        dataSave.push(data);
        writeLocal("BahanDetail", dataSave);
        dispatch(setDetailBahan(dataSave));
      }
      sweetalert.default.SuccessNoReload("Berhasil Menambahkan Data !");
    }
    if (action.type === SAVE_EDIT_DETAIL_BAHAN) {
      const data = getState().form.FormTambahDetailBahan.values;
      const dataArr = getLocal("BahanDetail") || [];
      const dataArrFill = dataArr.filter((item) => item.id !== data.id);
      dataArrFill.push(data);
      writeLocal("BahanDetail", dataArrFill);
      dispatch(setDetailBahan(dataArrFill));
      sweetalert.default.SuccessNoReload("Berhasil Merubah Data !");
    }
    if (action.type === DELETE_DETAIL_BAHAN) {
      const kode_bahan = action.payload.data;
      const dataArr = getLocal("BahanDetail") || [];
      const dataArrFill = dataArr.filter((item) => item.id !== kode_bahan);
      writeLocal("BahanDetail", dataArrFill);
      dispatch(setDetailBahan(dataArrFill));
      sweetalert.default.SuccessNoReload("Berhasil Menghapus Data !");
    }
    if (action.type === EDIT_DETAIL_BAHAN) {
      const kode_bahan = action.payload.data;
      const dataArr = getLocal("BahanDetail") || [];
      const dataArrFill = dataArr.find((item) => item.id === kode_bahan);
      dispatch(seteditDetailBahan({ dataEdit: dataArrFill }));
    }
  };

const data = [
  masterBillOfMaterialsGetAllData,
  masterBillOfMaterialsGetDataID,
  addDataMasterBillOfMaterials,
  deleteDataMasterBillOfMaterials,
  editDataMasterBillOfMaterials,
  detailBahanFlow,
];

export default data;
