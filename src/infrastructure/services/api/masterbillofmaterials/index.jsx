import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterBillOfMaterials = {
  getAllMasterBillOfMaterials: async () => {
    const response = await get({
      url: word.URL_GET_ALL_MASTER_BILL_OF_MATERIALS,
    });
    return response;
  },
  getMasterBillOfMaterialsById: async (id) => {
    const response = await get({
      url: word.URL_GET_MASTER_BILL_OF_MATERIALS_BY_ID + id,
    });
    return response;
  },
  addMasterBillOfMaterials: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_BILL_OF_MATERIALS,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterBillOfMaterials: async (data) => {
    const response = await deleteAxios(
      word.URL_DELETE_MASTER_BILL_OF_MATERIALS + data
    );
    return response;
  },
  editMasterBillOfMaterials: async (id, data) => {
    const response = await put(
      word.URL_UPDATE_MASTER_BILL_OF_MATERIALS + id,
      data
    );
    return response;
  },
};

export default MasterBillOfMaterials;
