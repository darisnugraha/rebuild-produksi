import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import KirimBahanAdmin from "../../../application/selectors/kirimbahanadmin";
// import Tukang from "../../../application/selectors/mastertukang";
import KirimJO from "../../../application/selectors/kirimjo";
import MasterBahan from "../../../application/selectors/masterbahan";
import {
  addLocalKirimJO,
  countBeratBalik,
  countBeratKirimJO,
  getDataByNoInduk,
  getDataDetailJO,
  getTukangByDivisi,
  saveEditJobOrder,
  setBahanKembaliKirim,
  setTukangTujuan,
  simpanBeratBatuTakTerpakai,
  simpanJumlahKirim,
} from "../../../application/actions/kirimjo";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimjo.dataEditJO !== undefined) {
    return {
      initialValues: {
        divisi_tujuan: state.kirimjo.dataEditJO.divisi_tujuan,
        tukang_tujuan:
          state.kirimjo.tukangTujuan !== undefined
            ? state.kirimjo.tukangTujuan
            : state.kirimjo.dataEditJO.tukang_tujuan,
        no_job_order: state.kirimjo.dataEditJO.no_job_order,
        tukang_asal: state.kirimjo.dataEditJO.tukang_asal,
        kode_barang: state.kirimjo.dataEditJO.kode_barang,
        nama_barang: state.kirimjo.dataEditJO.nama_barang,
        kode_jenis_bahan: state.kirimjo.dataEditJO.kode_jenis_bahan,
        jumlah_akhir: state.kirimjo.dataEditJO.jumlah_akhir,
        berat_akhir: state.kirimjo.dataEditJO.berat_akhir,
        berat_batu: state.kirimjo.dataEditJO.berat_batu,
        jumlah_berat_batu_tak_terpakai: state.kirimjo.beratBatuTakTerpakai,
        susut: state.kirimjo.beratSusut,
        jumlah_kirim: state.kirimjo.dataEditJO.jumlah_kirim,
        berat_kirim: state.kirimjo.beratKirim,
        berat_balik: state.kirimjo.beratBalik,
        no_induk_job_order: state.kirimjo.dataEditJO.no_induk_job_order,
        bahan_kembali:
          state.kirimjo.bahan_kembali === undefined
            ? state.masterbahan.feedback[0]?.nama_bahan
            : state.kirimjo.bahan_kembali,
      },
    };
  } else {
    if (state.kirimjo.NoIndukJO !== undefined) {
      if (state.kirimjo.detailJO.length !== 0) {
        if (state.kirimjo.dataDetailJO.length !== 0) {
          return {
            initialValues: {
              divisi_tujuan: state.kirimjo.divisiTujuan,
              tukang_tujuan:
                state.kirimjo.tukangTujuan !== undefined
                  ? state.kirimjo.tukangTujuan
                  : state.kirimjo.dataTukang[0]?.nama_tukang,
              no_job_order: state.kirimjo.dataDetailJO[0]?.no_job_order,
              tukang_asal: state.kirimjo.dataDetailJO[0]?.kode_tukang,
              kode_barang: state.kirimjo.dataDetailJO[0]?.kode_barang,
              nama_barang: state.kirimjo.dataDetailJO[0]?.nama_barang,
              kode_jenis_bahan: state.kirimjo.dataDetailJO[0]?.kode_jenis_bahan,
              jumlah_akhir: state.kirimjo.dataDetailJO[0]?.stock_akhir,
              berat_akhir: state.kirimjo.dataDetailJO[0]?.berat_akhir,
              berat_batu: state.kirimjo.dataDetailJO[0]?.berat_batu || 0,
              jumlah_berat_batu_tak_terpakai:
                state.kirimjo.beratBatuTakTerpakai,
              susut: state.kirimjo.beratSusut,
              jumlah_kirim: state.kirimjo.dataDetailJO[0]?.stock_akhir,
              berat_kirim: state.kirimjo.beratKirim,
              berat_balik: state.kirimjo.beratBalik,
              no_induk_job_order: state.kirimjo.NoIndukJO,
              bahan_kembali:
                state.kirimjo.bahan_kembali === undefined
                  ? state.masterbahan.feedback[0]?.nama_bahan
                  : state.kirimjo.bahan_kembali,
            },
          };
        } else {
          return {
            initialValues: {
              divisi_tujuan: state.kirimjo.divisiTujuan,
              tukang_tujuan:
                state.kirimjo.tukangTujuan !== undefined
                  ? state.kirimjo.tukangTujuan
                  : state.kirimjo.dataTukang[0]?.nama_tukang,
              no_job_order: state.kirimjo.detailJO[0]?.no_job_order,
              tukang_asal: state.kirimjo.dataDetailJO[0]?.kode_tukang,
              kode_barang: state.kirimjo.dataDetailJO[0]?.kode_barang,
              nama_barang: state.kirimjo.dataDetailJO[0]?.nama_barang,
              kode_jenis_bahan: state.kirimjo.dataDetailJO[0]?.kode_jenis_bahan,
              jumlah_akhir: state.kirimjo.dataDetailJO[0]?.stock_akhir,
              berat_akhir: state.kirimjo.dataDetailJO[0]?.berat_akhir,
              berat_batu: state.kirimjo.dataDetailJO[0]?.berat_batu || 0,
              jumlah_berat_batu_tak_terpakai:
                state.kirimjo.beratBatuTakTerpakai,
              susut: state.kirimjo.beratSusut,
              jumlah_kirim: state.kirimjo.dataDetailJO[0]?.stock_akhir,
              berat_kirim: state.kirimjo.beratKirim,
              berat_balik: state.kirimjo.beratBalik,
              no_induk_job_order: state.kirimjo.NoIndukJO,
              bahan_kembali:
                state.kirimjo.bahan_kembali === undefined
                  ? state.masterbahan.feedback[0]?.nama_bahan
                  : state.kirimjo.bahan_kembali,
            },
          };
        }
      } else {
        return {
          initialValues: {
            divisi_tujuan: state.kirimjo.divisiTujuan,
            tukang_tujuan:
              state.kirimjo.tukangTujuan !== undefined
                ? state.kirimjo.tukangTujuan
                : state.kirimjo.dataTukang[0]?.nama_tukang,
            no_job_order: "",
            tukang_asal: "",
            kode_barang: "",
            nama_barang: "",
            kode_jenis_bahan: "",
            jumlah_akhir: "",
            berat_akhir: "",
            berat_batu: "",
            jumlah_berat_batu_tak_terpakai: 0,
            susut: 0,
            jumlah_kirim: 0,
            berat_kirim: 0,
            berat_balik: 0,
            no_induk_job_order: state.kirimjo.NoIndukJO,
            bahan_kembali:
              state.kirimjo.bahan_kembali === undefined
                ? state.masterbahan.feedback[0]?.nama_bahan
                : state.kirimjo.bahan_kembali,
          },
        };
      }
    } else {
      if (state.kirimjo.dataDetailJO.length !== 0) {
        return {
          initialValues: {
            divisi_tujuan: state.kirimjo.divisiTujuan,
            tukang_tujuan:
              state.kirimjo.tukangTujuan !== undefined
                ? state.kirimjo.tukangTujuan
                : state.kirimjo.dataTukang[0]?.nama_tukang,
            no_job_order: state.kirimjo.dataDetailJO[0]?.no_job_order,
            tukang_asal: state.kirimjo.dataDetailJO[0]?.kode_tukang,
            kode_barang: state.kirimjo.dataDetailJO[0]?.kode_barang,
            nama_barang: state.kirimjo.dataDetailJO[0]?.nama_barang,
            kode_jenis_bahan: state.kirimjo.dataDetailJO[0]?.kode_jenis_bahan,
            jumlah_akhir: state.kirimjo.dataDetailJO[0]?.stock_akhir,
            berat_akhir: state.kirimjo.dataDetailJO[0]?.berat_akhir,
            berat_batu: state.kirimjo.dataDetailJO[0]?.berat_batu || 0,
            jumlah_berat_batu_tak_terpakai: state.kirimjo.beratBatuTakTerpakai,
            susut: state.kirimjo.beratSusut,
            jumlah_kirim: state.kirimjo.dataDetailJO[0]?.stock_akhir,
            berat_kirim: state.kirimjo.beratKirim,
            berat_balik: state.kirimjo.beratBalik,
            no_induk_job_order:
              state.kirimjo.dataDetailJO[0]?.no_induk_job_order,
            bahan_kembali:
              state.kirimjo.bahan_kembali === undefined
                ? state.masterbahan.feedback[0]?.nama_bahan
                : state.kirimjo.bahan_kembali,
          },
        };
      } else {
        return {
          initialValues: {
            divisi_tujuan: state.kirimjo.divisiTujuan,
            tukang_tujuan:
              state.kirimjo.tukangTujuan !== undefined
                ? state.kirimjo.tukangTujuan
                : state.kirimjo.dataTukang[0]?.nama_tukang,
            no_job_order: state.kirimjo.detailJO[0]?.no_job_order,
            tukang_asal: "",
            kode_barang: "",
            nama_barang: "",
            kode_jenis_bahan: "",
            jumlah_akhir: "",
            berat_akhir: "",
            berat_batu: "",
            jumlah_berat_batu_tak_terpakai: state.kirimjo.beratBatuTakTerpakai,
            susut: state.kirimjo.beratSusut,
            jumlah_kirim: state.kirimjo.dataDetailJO[0]?.stock_akhir,
            berat_kirim: state.kirimjo.beratKirim,
            berat_balik: state.kirimjo.beratBalik,
            no_induk_job_order: "",
            bahan_kembali:
              state.kirimjo.bahan_kembali === undefined
                ? state.masterbahan.feedback[0]?.nama_bahan
                : state.kirimjo.bahan_kembali,
          },
        };
      }
    }
  }
};

let FormKirimJO = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataDivisi = useSelector(KirimBahanAdmin.getAllDivisi);
  const dataTukang = useSelector(KirimJO.getDataTukang);
  const dataInduk = useSelector(KirimJO.getDataNoInduk);
  const dataJO = useSelector(KirimJO.getDataNoJO);
  const isEdit = useSelector(KirimJO.getIsEditJO);
  const dataJenisBahan = useSelector(MasterBahan.getAllMasterBahan);

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      // Prevent the default tab behavior to allow selection
      event.preventDefault();
      dispatch(getDataByNoInduk(event.target.value));
    }
  };

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        if (isEdit) {
          dispatch(saveEditJobOrder);
        } else {
          dispatch(addLocalKirimJO);
        }
      }}
      width={650}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              showSearch
              name="divisi_tujuan"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Tujuan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getTukangByDivisi(e))}
            >
              {dataDivisi.map((item) => {
                if (item.divisi !== "ADMIN BAHAN") {
                  return (
                    <Option value={item.divisi} key={item.divisi}>
                      <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                    </Option>
                  );
                } else {
                  return false;
                }
              })}
            </Field>
          </Col>

          <Col span={12}>
            <Field
              showSearch
              name="tukang_tujuan"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setTukangTujuan(e))}
            >
              {dataTukang.map((item) => {
                return (
                  <Option
                    value={`${item.nama_tukang}|${item.kode_tukang}`}
                    key={item._id}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.kode_tukang === item.nama_tukang
                        ? item.nama_tukang
                        : item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col span={12}>
            <Field
              showSearch
              name="no_induk_job_order"
              label={
                <span style={{ fontSize: "13px" }}>No Induk Job Order</span>
              }
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih No Induk Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getDataByNoInduk(e))}
              disabled={isEdit}
              onKeyDown={handleKeyDown}
            >
              {dataInduk.map((item) => {
                return (
                  <Option value={item.no_induk_job_order} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_induk_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="no_job_order"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getDataDetailJO({ noJO: e, type: "CHANGE" }))
              }
              disabled={isEdit}
            >
              {dataJO.map((item) => {
                return (
                  <Option value={item.no_job_order} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          {/* <Col span={12}>
            <Field
              name="no_job_order"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getDataDetailJO({ noJO: e.target.value }));
              }}
            />
          </Col> */}
          <Col span={12}>
            <Field
              name="tukang_asal"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tukang Asal"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="kode_barang"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_barang"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="kode_jenis_bahan"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="jumlah_akhir"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Jumlah Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Akhir"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_batu"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="jumlah_berat_batu_tak_terpakai"
              type="text"
              style={{ width: 250 }}
              label={
                <span style={{ fontSize: "13px" }}>
                  Berat Batu Tak Terpakai
                </span>
              }
              onChange={(e) => {
                dispatch(
                  simpanBeratBatuTakTerpakai({
                    beratBatuTakTerpakai: e.target.value,
                  })
                );
              }}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu"
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_akhir"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Akhir"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="jumlah_kirim"
              type="number"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Jumlah Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Kirim"
              disabled
              onChange={(e) => {
                dispatch(simpanJumlahKirim({ jumlahKirim: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_kirim"
              type="number"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
              onChange={(e) => {
                dispatch(countBeratKirimJO({ beratKirim: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_balik"
              type="number"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Balik</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Balik"
              onChange={(e) => {
                dispatch(countBeratBalik({ beratBalik: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="bahan_kembali"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Bahan Kembali</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan Kembali"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setBahanKembaliKirim(e))}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.nama_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="susut"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Susut</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Susut"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormKirimJO = reduxForm({
  form: "FormKirimJO",
  enableReinitialize: true,
})(FormKirimJO);
export default connect(maptostate, null)(FormKirimJO);
