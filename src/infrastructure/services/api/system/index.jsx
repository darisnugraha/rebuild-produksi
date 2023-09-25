import get from "../../../axios/get";
import word from "../../../shared/static";

const System = {
  getSystem: async () => {
    const response = await get({ url: word.URL_GET_TP_SYSTEM });
    return response;
  },
};

export default System;
