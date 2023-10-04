import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimJOCabang from "../../../../application/selectors/kirimjocabang";
import MasterBahan from "../../../../application/selectors/masterbahan";
import {
  addLocalKirimJO,
  countBeratBalik,
  countBeratKirimJO,
  getDataByNoInduk,
  getDataDetailJO,
  saveEditJobOrder,
  setBahanKembaliKirim,
  simpanBeratBatuTakTerpakai,
  simpanJumlahKirim,
} from "../../../../application/actions/kirimjocabang";

const { Option } = Select;

const maptostate = (state) => {};

let FormKirimJOCabang = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataCabang = useSelector(KirimJOCabang.getAllCAbang);
  const dataInduk = useSelector(KirimJOCabang.getDataNoInduk);
  const dataJO = useSelector(KirimJOCabang.getDataNoJO);
  const isEdit = useSelector(KirimJOCabang.getIsEditJO);
  const dataJenisBahan = useSelector(MasterBahan.getAllMasterBahan);

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
              name="cabang_tujuan"
              label={<span style={{ fontSize: "13px" }}>Cabang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Cabang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataCabang.map((item) => {
                return (
                  <Option
                    value={`${item.kode_toko}|${item.portal}`}
                    key={item._id}
                  >
                    <span style={{ fontSize: "13px" }}>{item.nama_toko}</span>
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

FormKirimJOCabang = reduxForm({
  form: "FormKirimJOCabang",
  enableReinitialize: true,
})(FormKirimJOCabang);
export default connect(maptostate, null)(FormKirimJOCabang);
