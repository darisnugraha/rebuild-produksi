import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanPembuatanJenisBahan = {
  getAllLaporanPembuatanJenisBahan: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_PEMBUATAN_JENIS_BAHAN +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanPembuatanJenisBahan;
