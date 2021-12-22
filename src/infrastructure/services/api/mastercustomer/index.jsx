import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterCustomer = {
  getAllMasterCustomer: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_CUSTOMER });
    return response;
  },
  addMasterCustomer: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_CUSTOMER,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterCustomer: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_CUSTOMER, data);
    return response;
  },
  editMasterCustomer: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_CUSTOMER, data);
    return response;
  },
};

export default MasterCustomer;
