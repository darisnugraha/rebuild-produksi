import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterKelompokJenisBahan = {
  getAllMasterKelompokJenisBahan: async () => {
    const response = await get({
      url: word.URL_GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN,
    });
    return response;
  },
  getMasterKelompokJenisBahanById: async (id) => {
    const response = await get({
      url: word.URL_GET_MASTER_KELOMPOK_JENIS_BAHAN_BY_ID + id,
    });
    return response;
  },
  addMasterKelompokJenisBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_KELOMPOK_JENIS_BAHAN,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterKelompokJenisBahan: async (data) => {
    const response = await deleteAxios(
      word.URL_DELETE_MASTER_KELOMPOK_JENIS_BAHAN + data
    );
    return response;
  },
  editMasterKelompokJenisBahan: async (id, data) => {
    const response = await put(
      word.URL_UPDATE_MASTER_KELOMPOK_JENIS_BAHAN + id,
      data
    );
    return response;
  },
};

export default MasterKelompokJenisBahan;
