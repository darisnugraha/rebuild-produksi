export const GET_ALL_MASTER_BILL_OF_MATERIALS =
  "[masterbillofmaterials] get all master bill of materials";
export const SET_DATA_MASTER_BILL_OF_MATERIALS_SUCCESS =
  "[masterbillofmaterials] get all master bill of materials success";
export const SET_DATA_MASTER_BILL_OF_MATERIALS_FAILED =
  "[masterbillofmaterials] get all master bill of materials failed";

export const SET_EDIT_FORM_ON = "[masterbillofmaterials] edit form on";
export const SET_EDIT_FORM_OFF = "[masterbillofmaterials] edit form off";

export const SET_EDIT_FORM_DETAIL_BAHAN_ON =
  "[masterbillofmaterials] edit detail bahan form on";
export const SET_EDIT_FORM_DETAIL_BAHAN_OFF =
  "[masterbillofmaterials] edit detail bahan form off";

export const GET_MASTER_BILL_OF_MATERIALS_ID =
  "[masterbillofmaterials] get master bill of materials id";
export const SET_DATA_MASTER_BILL_OF_MATERIALS_EDIT =
  "[masterbillofmaterials] set master bill of materials edit";

export const ADD_MASTER_BILL_OF_MATERIALS =
  "[masterbillofmaterials] add master bill of materials";
export const DELETE_MASTER_BILL_OF_MATERIALS =
  "[masterbillofmaterials] delete master bill of materials";
export const EDIT_MASTER_BILL_OF_MATERIALS =
  "[masterbillofmaterials] edit master bill of materials";

export const SET_VISIBLE_DETAIL_BAHAN =
  "[masterbillofmaterials] set visible detail bahan";

export const ADD_DETAIL_BAHAN = "[masterbillofmaterials] add detail bahan";
export const SET_DETAIL_BAHAN_SAVE =
  "[masterbillofmaterials] set detail bahan save";

export const DELETE_DETAIL_BAHAN =
  "[masterbillofmaterials] delete detail bahan";

export const EDIT_DETAIL_BAHAN = "[masterbillofmaterials] edit detail bahan";
export const SET_EDIT_DETAIL_BAHAN =
  "[masterbillofmaterials] set edit detail bahan";

export const SET_IS_EDIT_DETAIL_BAHAN =
  "[masterbillofmaterials] set is edit detail bahan";

export const getAllMasterBillOfMaterials = {
  type: GET_ALL_MASTER_BILL_OF_MATERIALS,
};
export const setDataMasterBillOfMaterialsSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_BILL_OF_MATERIALS_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterBillOfMaterialsFailed = ({ error }) => ({
  type: SET_DATA_MASTER_BILL_OF_MATERIALS_FAILED,
  payload: { data: error },
});

export const setEditFormMasterBillOfMaterials = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const setEditFormDetailBahan = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_DETAIL_BAHAN_ON : SET_EDIT_FORM_DETAIL_BAHAN_OFF,
  payload: isEdit,
});

export const getMasterBillOfMaterialsByID = ({ dataID }) => ({
  type: GET_MASTER_BILL_OF_MATERIALS_ID,
  payload: dataID,
});
export const setDataMasterBillOfMaterialsEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_BILL_OF_MATERIALS_EDIT,
  payload: { data: dataEdit },
});

export const addMasterBillOfMaterials = {
  type: ADD_MASTER_BILL_OF_MATERIALS,
};
export const deleteMasterBillOfMaterials = ({ id }) => ({
  type: DELETE_MASTER_BILL_OF_MATERIALS,
  payload: { data: id },
});
export const editMasterBillOfMaterials = {
  type: EDIT_MASTER_BILL_OF_MATERIALS,
};

export const setVisibleDetailBahan = (visible) => ({
  type: SET_VISIBLE_DETAIL_BAHAN,
  payload: { data: visible },
});

export const addDetailBahan = {
  type: ADD_DETAIL_BAHAN,
};

export const setDetailBahan = (detail) => ({
  type: SET_DETAIL_BAHAN_SAVE,
  payload: { data: detail },
});

export const deleteDetailBahan = ({ id }) => ({
  type: DELETE_DETAIL_BAHAN,
  payload: { data: id },
});

export const editDetailBahan = ({ id }) => ({
  type: EDIT_DETAIL_BAHAN,
  payload: { data: id },
});

export const seteditDetailBahan = ({ dataEdit }) => ({
  type: SET_EDIT_DETAIL_BAHAN,
  payload: { data: dataEdit },
});

export const setIsEditDetailBahan = (isEdit) => ({
  type: SET_IS_EDIT_DETAIL_BAHAN,
  payload: { data: isEdit },
});
