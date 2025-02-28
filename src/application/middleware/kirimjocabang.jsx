import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_DETAIL_JO_POST_METHOD,
  COUNT_BERAT_KIRIM_JO,
  setCountBeratKirimJO,
  SAVE_JUMLAH_KIRIM_JO,
  setJumlahKirimJO,
  ADD_LOCAL_KIRIM_JO,
  ADD_LOCAL_TAMBAHAN,
  countBeratKirimJO,
  ADD_LOCAL_BATU,
  GET_NO_INDUK_JOB_ORDER,
  setNoIndukJobOrder,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  setDataByNoInduk,
  // getDataByNoInduk,
  getDataDetailJO,
  ADD_LOCAL_TAMBAHAN_BAHAN,
  DELETE_JOB_ORDER,
  DELETE_DETAIL_BATU,
  DELETE_DETAIL_TAMBAHAN,
  EDIT_JOB_ORDER,
  setDataEditJobOrder,
  SAVE_EDIT_JOB_ORDER,
  EDIT_BATU,
  setDataEditBatu,
  SAVE_EDIT_BATU,
  EDIT_TAMBAHAN,
  setDataEditTambahan,
  SAVE_EDIT_TAMBAHAN,
  GET_TUKANG_BY_DIVISI,
  setTukangByDivisi,
  GET_ALL_NO_JOB_ORDER,
  setAllNoJobOrder,
  SAVE_BERAT_BATU_TAK_TERPAKAI,
  simpanBeratBatuTakTerpakai,
  COUNT_BERAT_BALIK_JO,
  countBeratBalik,
  GET_ALL_CABANG,
  setAllCabang,
} from "../actions/kirimjocabang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { change } from "redux-form";
// import { change } from "redux-form";

const getDataDetailJOMidd =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_CABANG) {
      api.KirimJOCabang.getAllCabang().then((res) => {
        if (res.value !== undefined) {
          const kodeToko = getLocal("tp_system").kode_toko;
          dispatch(
            setAllCabang(res.value.filter((val) => val.kode_toko !== kodeToko))
          );
        } else {
          dispatch(setAllCabang([]));
        }
      });
    }
    if (action.type === GET_ALL_NO_JOB_ORDER) {
      api.KirimJOCabang.getAllJO().then((res) => {
        if (res.value !== undefined) {
          dispatch(setAllNoJobOrder(res.value));
          dispatch(
            getDataDetailJO({
              noJO: res.value[0]?.no_job_order,
              type: "LOAD",
            })
          );
        } else {
          dispatch(setAllNoJobOrder([]));
        }
      });
    }
    if (action.type === GET_DETAIL_JO_POST_METHOD) {
      const noJO = action.payload.data;
      const type = action.payload.dataType;
      api.KirimJOCabang.getDetailJO(noJO, "ADMIN PUSAT").then((res) => {
        if (type === "CHANGE") {
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Yg Anda Cari Tidak Ada !");
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
              dispatch(setDataDetailJOFailed({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil !");
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "tukang_asal",
                  res.value[0].kode_tukang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "kode_barang",
                  res.value[0].kode_barang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "nama_barang",
                  res.value[0].nama_barang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "kode_jenis_bahan",
                  res.value[0].kode_jenis_bahan
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "jumlah_akhir",
                  res.value[0].stock_akhir
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "berat_batu",
                  res.value[0].berat_batu
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "berat_akhir",
                  res.value[0].berat_akhir
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "jumlah_kirim",
                  res.value[0].stock_akhir
                )
              );
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
              dispatch(
                setCountBeratKirimJO(
                  parseFloat(res.value[0].berat_akhir) +
                    parseFloat(res.value[0].berat_batu)
                )
              );
            }
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Mengambil Data !"
            );
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        } else {
          if (res.value !== null) {
            if (res.value.length === 0) {
              dispatch(setDataDetailJOFailed({ feedback: [] }));
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
            } else {
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "no_job_order",
                  res.value[0]?.no_job_order
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "tukang_asal",
                  res.value[0].kode_tukang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "kode_barang",
                  res.value[0].kode_barang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "nama_barang",
                  res.value[0].nama_barang
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "kode_jenis_bahan",
                  res.value[0].kode_jenis_bahan
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "jumlah_akhir",
                  res.value[0].stock_akhir
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "berat_batu",
                  res.value[0].berat_batu
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "berat_akhir",
                  res.value[0].berat_akhir
                )
              );
              dispatch(
                change(
                  "FormKirimJOCabang",
                  "jumlah_kirim",
                  res.value[0].stock_akhir
                )
              );
              dispatch(
                change("FormKirimJOCabang", "susut", res.value[0].berat_akhir)
              );
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
              dispatch(
                setCountBeratKirimJO(
                  parseFloat(res.value[0].berat_akhir) +
                    parseFloat(res.value[0].berat_batu)
                )
              );
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        }
      });
    }
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      api.KirimJOCabang.getNoIndulJO().then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            dispatch(setNoIndukJobOrder(res.value));
            // dispatch(getDataByNoInduk(res.value[1]?.no_induk_job_order));
          }
        } else {
          dispatch(setNoIndukJobOrder([]));
        }
      });
    }
    if (action.type === GET_DATA_BY_NO_INDUK_JOB_ORDER) {
      const id = action.payload.data;
      const divisi =
        getLocal("divisi") === "ADMIN" ? "ADMIN PUSAT" : getLocal("divisi");
      const dataKirim = {
        no_induk: id,
        divisi: divisi,
      };
      const dataLocal = getLocal("kirim_jo_head_cabang");
      api.KirimJOCabang.getJobOrderDetail(dataKirim).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            if (dataLocal !== null) {
              if (dataLocal.length !== 0) {
                const dataArr = res.value.filter((val) => {
                  return !dataLocal.some((item) => {
                    return val.no_job_order === item.no_job_order;
                  });
                });

                dispatch(setDataByNoInduk(dataArr));
                if (dataArr.length !== 0) {
                  dispatch(
                    getDataDetailJO({
                      noJO: dataArr[0]?.no_job_order,
                      type: "LOAD",
                    })
                  );
                }
              } else {
                dispatch(setDataByNoInduk(res.value));
                dispatch(
                  getDataDetailJO({
                    noJO: res.value[0]?.no_job_order,
                    type: "LOAD",
                  })
                );
              }
            } else {
              dispatch(setDataByNoInduk(res.value));
              dispatch(
                getDataDetailJO({
                  noJO: res.value[0]?.no_job_order,
                  type: "LOAD",
                })
              );
            }
          } else {
            dispatch(setDataDetailJOSuccess({ feedback: [] }));
            dispatch(setDataByNoInduk([]));
          }
        } else {
          dispatch(setDataByNoInduk([]));
        }
      });
    }
    if (action.type === GET_TUKANG_BY_DIVISI) {
      const divisi = action.payload.data;
      api.KirimJOCabang.getTukangByDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setTukangByDivisi(res.value));
        } else {
          dispatch(setTukangByDivisi([]));
        }
      });
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_KIRIM_JO) {
      let total = 0;
      const isEdit = getState().kirimjocabang.isEditJO;
      const berat_balik = parseFloat(getState().kirimjocabang.beratBalik);
      const berat_kirim = parseFloat(action.payload) || 0;
      if (isEdit) {
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_batu
        );
        const beratBatuTakTerpakai = parseFloat(
          getState().kirimjocabang.beratBatuTakTerpakai
        );
        // const totalAkhir = (
        //   berat_akhir +
        //   (berat_batu - beratBatuTakTerpakai)
        // ).toFixed(3);
        // if (berat_kirim > parseFloat(totalAkhir)) {
        //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
        //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
        // } else {
        // }
        total =
          berat_akhir +
          (berat_batu - beratBatuTakTerpakai) -
          berat_kirim -
          berat_balik;
        console.log(total);
        dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
        dispatch(setCountBeratKirimJO(total.toFixed(3)));
      } else {
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_batu
        );
        const beratBatuTakTerpakai = parseFloat(
          getState().kirimjocabang.beratBatuTakTerpakai
        );
        // const totalAkhir = (
        //   berat_akhir +
        //   (berat_batu - beratBatuTakTerpakai)
        // ).toFixed(3);
        // if (berat_kirim > parseFloat(totalAkhir)) {
        //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
        //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
        // } else {
        // }
        total =
          berat_akhir +
          (berat_batu - beratBatuTakTerpakai) -
          berat_kirim -
          berat_balik;
        dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
        dispatch(setCountBeratKirimJO(total.toFixed(3)));
      }
    }
    if (action.type === COUNT_BERAT_BALIK_JO) {
      let total = 0;
      const isEdit = getState().kirimjocabang.isEditJO;
      const berat_balik = parseFloat(action.payload) || 0;
      const berat_kirim = parseFloat(getState().kirimjocabang.beratKirim);
      // if (berat_balik > berat_kirim) {
      //   sweetalert.default.Failed(
      //     "Berat Balik Tidak Boleh Lebih Dari Berat Kirim !"
      //   );
      //   dispatch(change("FormKirimJO", "berat_balik", 0));
      // } else {
      //   if (isEdit) {
      //     const berat_akhir = parseFloat(
      //       getState().kirimjocabang.dataEditJO.berat_akhir
      //     );
      //     const berat_batu = parseFloat(
      //       getState().kirimjocabang.dataEditJO.berat_batu
      //     );
      //     const beratBatuTakTerpakai = parseFloat(
      //       getState().kirimjocabang.beratBatuTakTerpakai
      //     );
      //     // const totalAkhir = (
      //     //   berat_akhir +
      //     //   (berat_batu - beratBatuTakTerpakai)
      //     // ).toFixed(3);
      //     // if (berat_kirim > parseFloat(totalAkhir)) {
      //     //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
      //     //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
      //     // } else {
      //     // }
      //     total =
      //       berat_akhir +
      //       (berat_batu - beratBatuTakTerpakai) -
      //       berat_kirim -
      //       berat_balik;
      //     console.log(total);
      //     dispatch(setCountBeratKirimJO(total.toFixed(3)));
      //   } else {
      //     const berat_akhir = parseFloat(
      //       getState().kirimjocabang.dataDetailJO[0].berat_akhir
      //     );
      //     const berat_batu = parseFloat(
      //       getState().kirimjocabang.dataDetailJO[0].berat_batu
      //     );
      //     const beratBatuTakTerpakai = parseFloat(
      //       getState().kirimjocabang.beratBatuTakTerpakai
      //     );
      //     // const totalAkhir = (
      //     //   berat_akhir +
      //     //   (berat_batu - beratBatuTakTerpakai)
      //     // ).toFixed(3);
      //     // if (berat_kirim > parseFloat(totalAkhir)) {
      //     //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
      //     //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
      //     // } else {
      //     // }
      //     total =
      //       berat_akhir +
      //       (berat_batu - beratBatuTakTerpakai) -
      //       berat_kirim -
      //       berat_balik;
      //     console.log(total);
      //     dispatch(setCountBeratKirimJO(total.toFixed(3)));
      //   }
      // }
      if (isEdit) {
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_batu
        );
        const beratBatuTakTerpakai = parseFloat(
          getState().kirimjocabang.beratBatuTakTerpakai
        );
        // const totalAkhir = (
        //   berat_akhir +
        //   (berat_batu - beratBatuTakTerpakai)
        // ).toFixed(3);
        // if (berat_kirim > parseFloat(totalAkhir)) {
        //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
        //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
        // } else {
        // }
        total =
          berat_akhir +
          (berat_batu - beratBatuTakTerpakai) -
          berat_kirim -
          berat_balik;
        dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
        dispatch(setCountBeratKirimJO(total.toFixed(3)));
      } else {
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_batu
        );
        const beratBatuTakTerpakai = parseFloat(
          getState().kirimjocabang.beratBatuTakTerpakai
        );
        // const totalAkhir = (
        //   berat_akhir +
        //   (berat_batu - beratBatuTakTerpakai)
        // ).toFixed(3);
        // if (berat_kirim > parseFloat(totalAkhir)) {
        //   sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
        //   dispatch(countBeratKirimJO({ beratKirim: 0 }));
        // } else {
        // }
        total =
          berat_akhir +
          (berat_batu - beratBatuTakTerpakai) -
          berat_kirim -
          berat_balik;
        dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
        dispatch(setCountBeratKirimJO(total.toFixed(3)));
      }
    }
    if (action.type === SAVE_BERAT_BATU_TAK_TERPAKAI) {
      let total = 0;
      const isEdit = getState().kirimjocabang.isEditJO;
      if (isEdit) {
        const berat_batu_tak_terpakai = parseFloat(action.payload.data) || 0;
        const berat_kirim =
          parseFloat(getState().kirimjocabang.beratKirim) || 0;
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataEditJO.berat_batu
        );
        if (berat_batu_tak_terpakai > berat_batu) {
          sweetalert.default.Failed(
            "Berat Tak Terpakai Lebih Dari Berat Batu !"
          );
          dispatch("FormKirimJOCabang", "jumlah_berat_batu_tak_terpakai", 0);
          dispatch(countBeratKirimJO({ beratKirim: 0 }));
          dispatch(simpanBeratBatuTakTerpakai({ beratBatuTakTerpakai: 0 }));
        } else {
          total =
            berat_akhir + (berat_batu - berat_batu_tak_terpakai) - berat_kirim;
          dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
          dispatch(setCountBeratKirimJO(total.toFixed(3)));
        }
      } else {
        const berat_batu_tak_terpakai = parseFloat(action.payload.data) || 0;
        const berat_kirim =
          parseFloat(getState().kirimjocabang.beratKirim) || 0;
        const berat_akhir = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_akhir
        );
        const berat_batu = parseFloat(
          getState().kirimjocabang.dataDetailJO[0].berat_batu
        );
        if (berat_batu_tak_terpakai > berat_batu) {
          sweetalert.default.Failed(
            "Berat Tak Terpakai Lebih Dari Berat Batu !"
          );
          dispatch(countBeratKirimJO({ beratKirim: 0 }));
          dispatch(simpanBeratBatuTakTerpakai({ beratBatuTakTerpakai: 0 }));
        } else {
          total =
            berat_akhir + (berat_batu - berat_batu_tak_terpakai) - berat_kirim;
          dispatch(change("FormKirimJOCabang", "susut", total.toFixed(3)));
          dispatch(setCountBeratKirimJO(total.toFixed(3)));
        }
      }
    }
  };

const editFlow =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_JOB_ORDER) {
      const noJobOrder = action.payload.data;
      const dataHead = getLocal("kirim_jo_head_cabang");
      const dataHeadFill = dataHead.find(
        (val) => val.no_job_order === noJobOrder
      );
      dispatch(
        change(
          "FormKirimJOCabang",
          "cabang_tujuan",
          dataHeadFill?.cabang_tujuan
        )
      );
      dispatch(
        change(
          "FormKirimJOCabang",
          "no_induk_job_order",
          dataHeadFill?.no_induk_job_order
        )
      );
      dispatch(
        change("FormKirimJOCabang", "no_job_order", dataHeadFill?.no_job_order)
      );
      dispatch(
        change("FormKirimJOCabang", "tukang_asal", dataHeadFill?.kode_tukang)
      );
      dispatch(
        change("FormKirimJOCabang", "kode_barang", dataHeadFill?.kode_barang)
      );
      dispatch(
        change("FormKirimJOCabang", "nama_barang", dataHeadFill?.nama_barang)
      );
      dispatch(
        change(
          "FormKirimJOCabang",
          "kode_jenis_bahan",
          dataHeadFill?.kode_jenis_bahan
        )
      );
      dispatch(
        change("FormKirimJOCabang", "jumlah_akhir", dataHeadFill?.jumlah_akhir)
      );
      dispatch(
        change("FormKirimJOCabang", "berat_batu", dataHeadFill?.berat_batu)
      );
      dispatch(
        change("FormKirimJOCabang", "berat_akhir", dataHeadFill?.berat_akhir)
      );
      dispatch(
        change("FormKirimJOCabang", "jumlah_kirim", dataHeadFill?.jumlah_kirim)
      );
      dispatch(change("FormKirimJOCabang", "susut", dataHeadFill?.susut));
      dispatch(
        change("FormKirimJOCabang", "berat_kirim", dataHeadFill?.berat_kirim)
      );
      dispatch(
        change("FormKirimJOCabang", "berat_balik", dataHeadFill?.berat_balik)
      );
      dispatch(
        change(
          "FormKirimJOCabang",
          "jumlah_berat_batu_tak_terpakai",
          dataHeadFill?.jumlah_berat_batu_tak_terpakai
        )
      );
      dispatch(
        change(
          "FormKirimJOCabang",
          "bahan_kembali",
          dataHeadFill?.nama_bahan_balik
        )
      );
      dispatch(
        change("FormKirimJOCabang", "tukang_asal", dataHeadFill?.tukang_asal)
      );
      dispatch(setDataEditJobOrder(dataHeadFill));
      dispatch(countBeratKirimJO({ beratKirim: dataHeadFill.berat_kirim }));
      dispatch(countBeratBalik({ beratBalik: dataHeadFill.berat_balik }));
      dispatch(
        simpanBeratBatuTakTerpakai({
          beratBatuTakTerpakai: dataHeadFill.jumlah_berat_batu_tak_terpakai,
        })
      );
    }
    if (action.type === SAVE_EDIT_JOB_ORDER) {
      const data = getState().form.FormKirimJOCabang.values;
      const divisi_asal =
        getLocal("divisi") === "ADMIN" ? "ADMIN PUSAT" : getLocal("divisi");
      const dataHead = getLocal("kirim_jo_head_cabang");
      const dataHeadFill = dataHead.filter(
        (val) => val.no_job_order !== data.no_job_order
      );
      const dataHeadFillFind = dataHead.find(
        (val) => val.no_job_order === data.no_job_order
      );
      const dataArr = dataHeadFill;
      const dataSave = {
        cabang_tujuan: data.cabang_tujuan,
        no_job_order: data.no_job_order,
        divisi_asal: divisi_asal.toUpperCase(),
        divisi_tujuan: "ADMIN PUSAT",
        tukang_asal: data.tukang_asal,
        tukang_tujuan: "-",
        kode_barang: data.kode_barang,
        nama_barang: data.nama_barang,
        kode_jenis_bahan: data.kode_jenis_bahan,
        jumlah_kirim: parseInt(data.jumlah_kirim || 0),
        berat_kirim: parseFloat(data.berat_kirim || 0),
        susut: parseFloat(data.susut || 0),
        jumlah_berat_batu_tak_terpakai: parseFloat(
          data.jumlah_berat_batu_tak_terpakai || 0
        ),
        nama_bahan_tambahan: dataHeadFillFind.nama_bahan_tambahan,
        jumlah_tambahan: dataHeadFillFind.jumlah_tambahan,
        berat_tambahan: dataHeadFillFind.berat_tambahan,
        no_induk_job_order: data.no_induk_job_order,
        jumlah_akhir: parseInt(data.jumlah_akhir),
        berat_akhir: parseFloat(data.berat_akhir),
        berat_batu: parseFloat(data.berat_batu),
        berat_balik: parseFloat(data.berat_balik),
        nama_bahan_balik: data.bahan_kembali,
      };
      dataArr.push(dataSave);
      writeLocal("kirim_jo_head_cabang", dataArr);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
    if (action.type === EDIT_BATU) {
      const noJobOrder = action.payload.data;
      const batu = action.payload.batu;
      const dataBatu = getLocal("detail_batu_cabang");
      const dataBatuFill = dataBatu.find(
        (val) => val.no_job_order === noJobOrder && val.kode_batu === batu
      );
      dispatch(setDataEditBatu(dataBatuFill));
    }
    if (action.type === SAVE_EDIT_BATU) {
      const data = getState().form.FormDetailBatuCabang.values;
      const dataBatu = getLocal("detail_batu_cabang");
      const dataBatuFill = dataBatu.filter(
        (val) =>
          val.no_job_order === data.no_job_order &&
          val.kode_batu !== data.kode_batu
      );
      const dataArr = dataBatuFill;
      data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
      data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
      dataArr.push(data);
      writeLocal("detail_batu_cabang", dataArr);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
    if (action.type === EDIT_TAMBAHAN) {
      const noJobOrder = action.payload.data;
      const tambahan = action.payload.tambahan;
      const dataTambahan = getLocal("detail_tambahan_cabang");
      const dataTambahanFill = dataTambahan.find(
        (val) =>
          val.no_job_order === noJobOrder &&
          val.nama_bahan_tambahan === tambahan
      );
      dispatch(setDataEditTambahan(dataTambahanFill));
    }
    if (action.type === SAVE_EDIT_TAMBAHAN) {
      const data = getState().form.FormDetailTambahanCabang.values;
      const dataTambahan = getLocal("kirim_jo_head_cabang");
      dataTambahan.forEach((element) => {
        if (
          element.no_job_order === data.no_job_order &&
          element.nama_bahan_tambahan === data.nama_bahan
        ) {
          element.jumlah_tambahan = parseInt(data.jumlah_bahan);
          element.berat_tambahan = parseFloat(data.berat_bahan);
        }
      });
      writeLocal("kirim_jo_head_cabang", dataTambahan);
      writeLocal("detail_tambahan_cabang", dataTambahan);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
  };

const savejumlahkirim =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SAVE_JUMLAH_KIRIM_JO) {
      const jumlahKirim = parseInt(action.payload);
      const jumlahAkhir = parseInt(
        getState().kirimjocabang.dataDetailJO[0].stock_akhir
      );
      if (jumlahKirim > jumlahAkhir) {
        sweetalert.default.Failed("Jumlah Lebih Dari Jumlah Akhir !");
        dispatch(setJumlahKirimJO(0));
      } else {
        dispatch(setJumlahKirimJO(jumlahKirim));
      }
    }
  };

const addDataLocalKirimJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_LOCAL_KIRIM_JO) {
      const data = getState().form.FormKirimJOCabang.values;
      if (data.berat_kirim === 0 || data.jumlah_kirim === 0) {
        sweetalert.default.Failed("Isi Berat dan Jumlah Terlebih Dahulu !");
      } else {
        const divisi_asal =
          getLocal("divisi") === "ADMIN" ? "ADMIN PUSAT" : getLocal("divisi");
        const dataArr = [];
        const dataSave = {
          cabang_tujuan: data.cabang_tujuan,
          no_job_order: data.no_job_order,
          divisi_asal: divisi_asal.toUpperCase(),
          divisi_tujuan: "ADMIN PUSAT",
          tukang_asal: data.tukang_asal,
          tukang_tujuan: "-",
          kode_barang: data.kode_barang,
          nama_barang: data.nama_barang,
          kode_jenis_bahan: data.kode_jenis_bahan,
          jumlah_kirim: parseInt(data.jumlah_kirim || 0),
          berat_kirim: parseFloat(data.berat_kirim || 0),
          susut: parseFloat(data.susut || 0),
          jumlah_berat_batu_tak_terpakai: parseFloat(
            data.jumlah_berat_batu_tak_terpakai || 0
          ),
          nama_bahan_tambahan: "TIDAK ADA",
          jumlah_tambahan: 0,
          berat_tambahan: 0,
          no_induk_job_order: data.no_induk_job_order,
          jumlah_akhir: parseInt(data.jumlah_akhir),
          berat_akhir: parseFloat(data.berat_akhir),
          berat_batu: parseFloat(data.berat_batu),
          berat_balik: parseFloat(data.berat_balik),
          nama_bahan_balik: data.bahan_kembali,
        };
        dataArr.push(dataSave);
        if (dataSave.jumlah_berat_batu_tak_terpakai === 0) {
          const arrBatu = [
            {
              no_job_order: data.no_job_order,
              kode_batu: "TIDAK ADA",
              jumlah_tak_terpakai: 0,
              berat_tak_terpakai: 0,
            },
          ];
          writeLocal("detail_batu_cabang", arrBatu);
        }
        writeLocal("kode_toko_tujuan", data.cabang_tujuan.split("|")[0]);
        writeLocal("kirim_jo_head_cabang", dataArr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
    }
  };

const addLocalDataTambahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_LOCAL_TAMBAHAN) {
      const dataHead = getLocal("kirim_jo_head_cabang") || [];
      const dataDetailBatu = getLocal("detail_batu_cabang") || [];
      if (
        dataHead.length === 0 ||
        dataHead === undefined ||
        dataHead === null
      ) {
        sweetalert.default.Failed("Isi Detail Kirim Jo Terlebih Dahulu !");
      } else if (
        dataDetailBatu.length === 0 ||
        dataDetailBatu === undefined ||
        dataDetailBatu === null
      ) {
        sweetalert.default.Failed("Detail Batu Harus Di isi !");
      } else {
        dataHead.forEach((element) => {
          const batuData = [];
          delete element.cabang_tujuan;
          delete element.no_induk_job_order;
          dataDetailBatu.forEach((item) => {
            if (element.no_job_order === item.no_job_order) {
              batuData.push(item);
              delete item.no_job_order;
              element.detail_batu = batuData;
            }
          });
        });
        dataHead.forEach((element) => {
          delete element.jumlah_akhir;
          delete element.berat_akhir;
        });
        const kodeToko = getLocal("kode_toko_tujuan");
        const dataKirim = {
          kode_toko_tujuan: kodeToko,
          detail_job_order: dataHead,
        };
        api.KirimJOCabang.addKirimJOCart(dataKirim).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("kirim_jo_head_cabang");
            localStorage.removeItem("detail_batu_cabang");
            localStorage.removeItem("detail_tambahan_cabang");
            sweetalert.default.Success(
              res.value.message || "Berhasil Mengirim Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Mengirim Data !"
            );
          }
        });
      }
    }
    if (action.type === ADD_LOCAL_TAMBAHAN_BAHAN) {
      const dataHead = getLocal("kirim_jo_head_cabang") || [];
      const data = getState().form.FormDetailTambahanCabang.values;
      if (dataHead === undefined || dataHead === null) {
        sweetalert.default.Failed("Isi Detail Kirim Jo Terlebih Dahulu !");
      } else {
        dataHead.forEach((element) => {
          if (element.no_job_order === data.no_job_order) {
            element.nama_bahan_tambahan = data.nama_bahan;
            element.jumlah_tambahan = parseInt(data.jumlah_bahan || 0);
            element.berat_tambahan = parseFloat(data.berat_bahan || 0);
          }
        });
        const arrTambahan = [];
        dataHead.forEach((element) => {
          if (element.nama_bahan_tambahan !== "") {
            arrTambahan.push(element);
          }
        });
        writeLocal("kirim_jo_head_cabang", dataHead);
        writeLocal("detail_tambahan_cabang", arrTambahan);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
    }
    if (action.type === ADD_LOCAL_BATU) {
      const detailBatu = getLocal("detail_batu_cabang") || [];
      const dataHead = getLocal("kirim_jo_head_cabang") || [];
      const totalBeratBatuTakTerpakai = dataHead.reduce(
        (a, b) => a + b.jumlah_berat_batu_tak_terpakai,
        0
      );
      const data = getState().form.FormDetailBatuCabang.values;
      if (detailBatu === null || detailBatu === undefined) {
        if (totalBeratBatuTakTerpakai < data.berat_tak_terpakai) {
          sweetalert.default.Failed(
            "Berat Tidak Boleh Melebihi Berat Batu Tak Terpakai !"
          );
        } else {
          const arr = [];
          data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
          data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
          arr.push(data);
          writeLocal("detail_batu_cabang", arr);
          sweetalert.default.Success("Berhasil Menyimpan Data !");
        }
      } else {
        if (totalBeratBatuTakTerpakai < data.berat_tak_terpakai) {
          sweetalert.default.Failed(
            "Berat Tidak Boleh Melebihi Berat Batu Tak Terpakai !"
          );
        } else {
          const beratBatu = detailBatu.reduce(
            (a, b) => a + b.berat_tak_terpakai,
            0
          );
          const totalBeratBatu =
            parseFloat(beratBatu) + parseFloat(data.berat_tak_terpakai);
          console.log(totalBeratBatu);
          if (totalBeratBatuTakTerpakai < totalBeratBatu) {
            sweetalert.default.Failed(
              "Berat Tidak Boleh Melebihi Berat Batu Tak Terpakai !"
            );
          } else {
            const arr = detailBatu;
            data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
            data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
            arr.push(data);
            writeLocal("detail_batu_cabang", arr);
            sweetalert.default.Success("Berhasil Menyimpan Data !");
          }
        }
      }
    }
    if (action.type === DELETE_JOB_ORDER) {
      const noJobOrder = action.payload.data;
      const dataHead = getLocal("kirim_jo_head_cabang") || [];
      const dataDetailBatu = getLocal("detail_batu_cabang") || [];
      const dataDetailTambahan = getLocal("detail_tambahan_cabang") || [];
      const dataHeadFill = dataHead.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      const dataDetailBatuFill = dataDetailBatu.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      const dataDetailTambahanFill = dataDetailTambahan.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      writeLocal("kirim_jo_head_cabang", dataHeadFill);
      writeLocal("detail_batu_cabang", dataDetailBatuFill);
      writeLocal("detail_tambahan_cabang", dataDetailTambahanFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === DELETE_DETAIL_BATU) {
      const noJobOrder = action.payload.data;
      const kodeBatu = action.payload.batu;
      const dataDetailBatu = getLocal("detail_batu_cabang") || [];
      const dataDetailBatuFill = dataDetailBatu.filter(
        (val) => val.no_job_order !== noJobOrder && val.kode_batu !== kodeBatu
      );
      writeLocal("detail_batu_cabang", dataDetailBatuFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === DELETE_DETAIL_TAMBAHAN) {
      const noJobOrder = action.payload.data;
      const namaBahan = action.payload.tambahan;
      const dataHead = getLocal("kirim_jo_head_cabang") || [];
      const dataDetailTambahan = getLocal("detail_tambahan_cabang");
      dataHead.forEach((element) => {
        if (element.no_job_order === noJobOrder) {
          element.nama_bahan_tambahan = "";
          element.jumlah_tambahan = 0;
          element.berat_tambahan = 0;
        }
      });
      writeLocal("kirim_jo_head_cabang", dataHead);
      const dataDetailTambahanFill = dataDetailTambahan.filter(
        (val) =>
          val.no_job_order !== noJobOrder &&
          val.nama_bahan_tambahan === namaBahan
      );
      writeLocal("detail_tambahan_cabang", dataDetailTambahanFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
  };

const data = [
  getDataDetailJOMidd,
  countberatbatu,
  savejumlahkirim,
  addDataLocalKirimJo,
  addLocalDataTambahan,
  editFlow,
];

export default data;
