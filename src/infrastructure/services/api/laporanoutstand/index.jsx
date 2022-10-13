import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanOutstand = {
  getAllLaporanOutstand: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_OUTSTAND + `kode_tukang=${dataKirim.kode_staff}`,
    });
    return response;
  },
};

export default LaporanOutstand;
