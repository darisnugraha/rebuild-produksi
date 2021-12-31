import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanSaldoBatu = {
  getAllLaporanSaldoBatu: async () => {
    const response = await get({ url: word.URL_GET_LAPORAN_SALDO_BATU });
    return response;
  },
};

export default LaporanSaldoBatu;
