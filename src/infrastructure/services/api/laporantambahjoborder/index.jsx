import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTambahJobOrder = {
  getAllLaporanTambahJobOrder: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TAMBAH_JOB_ORDER +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanTambahJobOrder;
