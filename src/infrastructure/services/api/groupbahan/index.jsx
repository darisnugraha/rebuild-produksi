import get from "../../../axios/get";
import word from "../../../shared/static";

const GroupBahan = {
  getAllGroupBahan: async () => {
    const response = await get({ url: word.URL_GET_GROUP_BAHAN });
    return response;
  },
};

export default GroupBahan;
