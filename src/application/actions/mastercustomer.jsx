export const GET_ALL_MASTER_CUSTOMER =
  "[mastercustomer] get all master customer";
export const SET_DATA_MASTER_CUSTOMER_SUCCESS =
  "[mastercustomer] get all master customer success";
export const SET_DATA_MASTER_CUSTOMER_FAILED =
  "[mastercustomer] get all master customer failed";

export const SET_EDIT_FORM_ON = "[mastercustomer] edit form on";
export const SET_EDIT_FORM_OFF = "[mastercustomer] edit form off";

export const GET_MASTER_CUSTOMER_ID = "[mastercustomer] get master customer id";
export const SET_DATA_MASTER_CUSTOMER_EDIT =
  "[mastercustomer] set master customer edit";

export const ADD_MASTER_CUSTOMER = "[mastercustomer] add master customer";
export const DELETE_MASTER_CUSTOMER = "[mastercustomer] delete master customer";
export const EDIT_MASTER_CUSTOMER = "[mastercustomer] edit master customer";

export const getAllMasterCustomer = {
  type: GET_ALL_MASTER_CUSTOMER,
};
export const setDataMasterCustomerSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_CUSTOMER_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterCustomerFailed = ({ error }) => ({
  type: SET_DATA_MASTER_CUSTOMER_FAILED,
  payload: { data: error },
});

export const setEditFormMasterCustomer = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterCustomerByID = ({ dataID }) => ({
  type: GET_MASTER_CUSTOMER_ID,
  payload: dataID,
});
export const setDataMasterCustomerEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_CUSTOMER_EDIT,
  payload: { data: dataEdit },
});

export const addMasterCustomer = {
  type: ADD_MASTER_CUSTOMER,
};
export const deleteMasterCustomer = ({ id }) => ({
  type: DELETE_MASTER_CUSTOMER,
  payload: { data: id },
});
export const editMasterCustomer = {
  type: EDIT_MASTER_CUSTOMER,
};
