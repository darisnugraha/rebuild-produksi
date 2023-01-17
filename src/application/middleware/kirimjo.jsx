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
} from "../actions/kirimjo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJOMidd =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_NO_JOB_ORDER) {
      api.KirimJO.getAllJO().then((res) => {
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
      const asalDivisi = localStorage.getItem("divisi");
      api.KirimJO.getDetailJO(
        noJO.toUpperCase(),
        asalDivisi.toUpperCase()
      ).then((res) => {
        if (type === "CHANGE") {
          if (res.value !== null) {
            if (res.value.length === 0) {
              sweetalert.default.Failed("Data Yg Anda Cari Tidak Ada !");
              dispatch(setDataDetailJOSuccess({ feedback: [] }));
              dispatch(setDataDetailJOFailed({ feedback: [] }));
            } else {
              sweetalert.default.SuccessNoReload("Berhasil !");
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
              dispatch(setCountBeratKirimJO(res.value[0].berat_akhir));
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
              dispatch(setDataDetailJOSuccess({ feedback: res.value }));
              dispatch(setCountBeratKirimJO(res.value[0].berat_akhir));
            }
          } else {
            dispatch(setDataDetailJOFailed({ error: res.error }));
          }
        }
      });
    }
    if (action.type === GET_NO_INDUK_JOB_ORDER) {
      api.KirimJO.getNoIndulJO().then((res) => {
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
      const divisi = getLocal("divisi");
      const dataKirim = {
        no_induk: id,
        divisi: divisi,
      };
      const dataLocal = getLocal("kirim_jo_head");
      api.KirimJO.getJobOrderDetail(dataKirim).then((res) => {
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
      api.KirimJO.getTukangByDivisi(divisi).then((res) => {
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
      const isEdit = getState().kirimjo.isEditJO;
      if (isEdit) {
        const berat_kirim = parseFloat(action.payload);
        const berat_akhir = parseFloat(
          getState().kirimjo.dataEditJO.berat_akhir
        );

        if (berat_kirim > berat_akhir) {
          sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
          dispatch(countBeratKirimJO({ beratKirim: 0 }));
        } else {
          total = berat_akhir - berat_kirim;
          dispatch(setCountBeratKirimJO(total.toFixed(3)));
        }
      } else {
        const berat_kirim = parseFloat(action.payload);
        const berat_akhir = parseFloat(
          getState().kirimjo.dataDetailJO[0].berat_akhir
        );

        if (berat_kirim > berat_akhir) {
          sweetalert.default.Failed("Berat Lebih Dari Berat Akhir !");
          dispatch(countBeratKirimJO({ beratKirim: 0 }));
        } else {
          total = berat_akhir - berat_kirim;
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
      const dataHead = getLocal("kirim_jo_head");
      const dataHeadFill = dataHead.find(
        (val) => val.no_job_order === noJobOrder
      );
      dispatch(setDataEditJobOrder(dataHeadFill));
      dispatch(setCountBeratKirimJO(dataHeadFill.susut));
      dispatch(countBeratKirimJO({ beratKirim: dataHeadFill.berat_kirim }));
    }
    if (action.type === SAVE_EDIT_JOB_ORDER) {
      const data = getState().form.FormKirimJO.values;
      const divisi_asal = getLocal("divisi");
      const dataHead = getLocal("kirim_jo_head");
      const dataHeadFill = dataHead.filter(
        (val) => val.no_job_order !== data.no_job_order
      );
      const dataArr = dataHeadFill;
      const dataSave = {
        no_job_order: data.no_job_order,
        divisi_asal: divisi_asal.toUpperCase(),
        divisi_tujuan: data.divisi_tujuan,
        tukang_asal: data.tukang_asal,
        tukang_tujuan: data.tukang_tujuan,
        kode_barang: data.kode_barang,
        nama_barang: data.nama_barang,
        kode_jenis_bahan: data.kode_jenis_bahan,
        jumlah_kirim: parseInt(data.jumlah_kirim || 0),
        berat_kirim: parseFloat(data.berat_kirim || 0),
        susut: parseFloat(data.susut || 0),
        jumlah_berat_batu_tak_terpakai: parseFloat(
          data.jumlah_berat_batu_tak_terpakai
        ),
        nama_bahan_tambahan: "",
        jumlah_tambahan: 0,
        berat_tambahan: 0,
        no_induk_job_order: data.no_induk_job_order,
        jumlah_akhir: parseInt(data.jumlah_akhir),
        berat_akhir: parseFloat(data.berat_akhir),
      };
      dataArr.push(dataSave);
      writeLocal("kirim_jo_head", dataArr);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
    if (action.type === EDIT_BATU) {
      const noJobOrder = action.payload.data;
      const batu = action.payload.batu;
      const dataBatu = getLocal("detail_batu");
      const dataBatuFill = dataBatu.find(
        (val) => val.no_job_order === noJobOrder && val.kode_batu === batu
      );
      dispatch(setDataEditBatu(dataBatuFill));
    }
    if (action.type === SAVE_EDIT_BATU) {
      const data = getState().form.FormDetailBatu.values;
      const dataBatu = getLocal("detail_batu");
      const dataBatuFill = dataBatu.filter(
        (val) =>
          val.no_job_order === data.no_job_order &&
          val.kode_batu !== data.kode_batu
      );
      const dataArr = dataBatuFill;
      data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
      data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
      dataArr.push(data);
      writeLocal("detail_batu", dataArr);
      sweetalert.default.Success("Berhasil Merubah Data !");
    }
    if (action.type === EDIT_TAMBAHAN) {
      const noJobOrder = action.payload.data;
      const tambahan = action.payload.tambahan;
      const dataTambahan = getLocal("detail_tambahan");
      const dataTambahanFill = dataTambahan.find(
        (val) =>
          val.no_job_order === noJobOrder &&
          val.nama_bahan_tambahan === tambahan
      );
      dispatch(setDataEditTambahan(dataTambahanFill));
    }
    if (action.type === SAVE_EDIT_TAMBAHAN) {
      const data = getState().form.FormDetailTambahan.values;
      const dataTambahan = getLocal("kirim_jo_head");
      dataTambahan.forEach((element) => {
        if (
          element.no_job_order === data.no_job_order &&
          element.nama_bahan_tambahan === data.nama_bahan
        ) {
          element.jumlah_tambahan = parseInt(data.jumlah_bahan);
          element.berat_tambahan = parseFloat(data.berat_bahan);
        }
      });
      writeLocal("kirim_jo_head", dataTambahan);
      writeLocal("detail_tambahan", dataTambahan);
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
        getState().kirimjo.dataDetailJO[0].stock_akhir
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
      const data = getState().form.FormKirimJO.values;
      if (data.berat_kirim === 0 || data.jumlah_kirim === 0) {
        sweetalert.default.Failed("Isi Berat dan Jumlah Terlebih Dahulu !");
      } else {
        const dataLocal = getLocal("kirim_jo_head");
        if (dataLocal === null) {
          const divisi_asal = getLocal("divisi");
          const dataArr = [];
          const dataSave = {
            no_job_order: data.no_job_order,
            divisi_asal: divisi_asal.toUpperCase(),
            divisi_tujuan: data.divisi_tujuan,
            tukang_asal: data.tukang_asal,
            tukang_tujuan: data.tukang_tujuan,
            kode_barang: data.kode_barang,
            nama_barang: data.nama_barang,
            kode_jenis_bahan: data.kode_jenis_bahan,
            jumlah_kirim: parseInt(data.jumlah_kirim || 0),
            berat_kirim: parseFloat(data.berat_kirim || 0),
            susut: parseFloat(data.susut || 0),
            jumlah_berat_batu_tak_terpakai: parseFloat(
              data.jumlah_berat_batu_tak_terpakai || 0
            ),
            nama_bahan_tambahan: "",
            jumlah_tambahan: 0,
            berat_tambahan: 0,
            no_induk_job_order: data.no_induk_job_order,
            jumlah_akhir: parseInt(data.jumlah_akhir),
            berat_akhir: parseFloat(data.berat_akhir),
          };
          dataArr.push(dataSave);
          sweetalert.default.Success("Berhasil Menyimpan Data !");
          writeLocal("kirim_jo_head", dataArr);
        } else {
          if (dataLocal.length !== 0) {
            const divisi_asal = getLocal("divisi");
            const dataArr = dataLocal;
            const dataSave = {
              no_job_order: data.no_job_order,
              divisi_asal: divisi_asal.toUpperCase(),
              divisi_tujuan: data.divisi_tujuan,
              tukang_asal: data.tukang_asal,
              tukang_tujuan: data.tukang_tujuan,
              kode_barang: data.kode_barang,
              nama_barang: data.nama_barang,
              kode_jenis_bahan: data.kode_jenis_bahan,
              jumlah_kirim: parseInt(data.jumlah_kirim || 0),
              berat_kirim: parseFloat(data.berat_kirim || 0),
              susut: parseFloat(data.susut || 0),
              jumlah_berat_batu_tak_terpakai: parseFloat(
                data.jumlah_berat_batu_tak_terpakai || 0
              ),
              nama_bahan_tambahan: "",
              jumlah_tambahan: 0,
              berat_tambahan: 0,
              no_induk_job_order: data.no_induk_job_order,
              jumlah_akhir: parseInt(data.jumlah_akhir),
              berat_akhir: parseFloat(data.berat_akhir),
            };
            dataArr.push(dataSave);
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            writeLocal("kirim_jo_head", dataArr);
          } else {
            const divisi_asal = getLocal("divisi") || [];
            const dataArr = [];
            const dataSave = {
              no_job_order: data.no_job_order,
              divisi_asal: divisi_asal.toUpperCase(),
              divisi_tujuan: data.divisi_tujuan,
              tukang_asal: data.tukang_asal,
              tukang_tujuan: data.tukang_tujuan,
              kode_barang: data.kode_barang,
              nama_barang: data.nama_barang,
              kode_jenis_bahan: data.kode_jenis_bahan,
              jumlah_kirim: parseInt(data.jumlah_kirim || 0),
              berat_kirim: parseFloat(data.berat_kirim || 0),
              susut: parseFloat(data.susut || 0),
              jumlah_berat_batu_tak_terpakai: parseFloat(
                data.jumlah_berat_batu_tak_terpakai || 0
              ),
              nama_bahan_tambahan: "",
              jumlah_tambahan: 0,
              berat_tambahan: 0,
              no_induk_job_order: data.no_induk_job_order,
              jumlah_akhir: parseInt(data.jumlah_akhir),
              berat_akhir: parseFloat(data.berat_akhir),
            };
            dataArr.push(dataSave);
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            writeLocal("kirim_jo_head", dataArr);
          }
        }
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
      const dataHead = getLocal("kirim_jo_head") || [];
      const dataDetailBatu = getLocal("detail_batu") || [];
      if (dataHead === undefined || dataHead === null) {
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
        const dataKirim = { detail_job_order: dataHead };
        api.KirimJO.addKirimJOCart(dataKirim).then((res) => {
          if (res.value !== null) {
            localStorage.removeItem("kirim_jo_head");
            localStorage.removeItem("detail_batu");
            localStorage.removeItem("detail_tambahan");
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
      const dataHead = getLocal("kirim_jo_head") || [];
      const data = getState().form.FormDetailTambahan.values;
      if (dataHead === undefined || dataHead === null) {
        sweetalert.default.Failed("Isi Detail Kirim Jo Terlebih Dahulu !");
      } else {
        dataHead.forEach((element) => {
          if (element.no_job_order === data.no_job_order) {
            element.nama_bahan_tambahan = data.nama_bahan;
            element.jumlah_tambahan = parseInt(data.jumlah_bahan);
            element.berat_tambahan = parseFloat(data.berat_bahan);
          }
        });
        const arrTambahan = [];
        dataHead.forEach((element) => {
          if (element.nama_bahan_tambahan !== "") {
            arrTambahan.push(element);
          }
        });
        writeLocal("kirim_jo_head", dataHead);
        writeLocal("detail_tambahan", arrTambahan);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
    }
    if (action.type === ADD_LOCAL_BATU) {
      const detailBatu = getLocal("detail_batu") || [];
      if (detailBatu === null || detailBatu === undefined) {
        const arr = [];
        const data = getState().form.FormDetailBatu.values;
        data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
        data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
        arr.push(data);
        writeLocal("detail_batu", arr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      } else {
        const arr = detailBatu;
        const data = getState().form.FormDetailBatu.values;
        data.jumlah_tak_terpakai = parseInt(data.jumlah_tak_terpakai);
        data.berat_tak_terpakai = parseFloat(data.berat_tak_terpakai);
        arr.push(data);
        writeLocal("detail_batu", arr);
        sweetalert.default.Success("Berhasil Menyimpan Data !");
      }
    }
    if (action.type === DELETE_JOB_ORDER) {
      const noJobOrder = action.payload.data;
      const dataHead = getLocal("kirim_jo_head") || [];
      const dataDetailBatu = getLocal("detail_batu") || [];
      const dataDetailTambahan = getLocal("detail_tambahan") || [];
      const dataHeadFill = dataHead.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      const dataDetailBatuFill = dataDetailBatu.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      const dataDetailTambahanFill = dataDetailTambahan.filter(
        (val) => val.no_job_order !== noJobOrder
      );
      writeLocal("kirim_jo_head", dataHeadFill);
      writeLocal("detail_batu", dataDetailBatuFill);
      writeLocal("detail_tambahan", dataDetailTambahanFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === DELETE_DETAIL_BATU) {
      const noJobOrder = action.payload.data;
      const kodeBatu = action.payload.batu;
      const dataDetailBatu = getLocal("detail_batu") || [];
      const dataDetailBatuFill = dataDetailBatu.filter(
        (val) => val.no_job_order !== noJobOrder && val.kode_batu !== kodeBatu
      );
      writeLocal("detail_batu", dataDetailBatuFill);
      sweetalert.default.Success("Berhasil Menghapus Data !");
    }
    if (action.type === DELETE_DETAIL_TAMBAHAN) {
      const noJobOrder = action.payload.data;
      const namaBahan = action.payload.tambahan;
      const dataHead = getLocal("kirim_jo_head") || [];
      const dataDetailTambahan = getLocal("detail_tambahan");
      dataHead.forEach((element) => {
        if (element.no_job_order === noJobOrder) {
          element.nama_bahan_tambahan = "";
          element.jumlah_tambahan = 0;
          element.berat_tambahan = 0;
        }
      });
      writeLocal("kirim_jo_head", dataHead);
      const dataDetailTambahanFill = dataDetailTambahan.filter(
        (val) =>
          val.no_job_order !== noJobOrder &&
          val.nama_bahan_tambahan === namaBahan
      );
      writeLocal("detail_tambahan", dataDetailTambahanFill);
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
