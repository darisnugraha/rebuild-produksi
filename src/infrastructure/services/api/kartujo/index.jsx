import get from "../../../axios/get";
import word from "../../../shared/static";

const KartuJobOrder = {
  getAllKartuJobOrder: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_KARTU_JO + `no_job_order=${dataKirim.no_job_order}`,
    });
    return response;
  },
};

export default KartuJobOrder;
