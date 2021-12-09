import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import KirimBahanAdmin from "../../../application/selectors/kirimbahanadmin";
import Tukang from "../../../application/selectors/mastertukang";
import {
  countBeratKirimJO,
  getDataDetailJO,
  simpanJumlahKirim,
} from "../../../application/actions/kirimjo";

const { Option } = Select;

const maptostate = (state) => {
  return {
    initialValues: {
      divisi_tujuan: state.kirimbahanadmin.feedback[0]?.kode_divisi,
      tukang_tujuan: state.mastertukang.feedback[0]?.kode_staff,
      no_job_order: state.kirimjo.dataDetailJO[0]?.no_job_order,
      tukang_asal: state.kirimjo.dataDetailJO[0]?.kode_staff,
      kode_barang: state.kirimjo.dataDetailJO[0]?.kode_barang,
      nama_barang: state.kirimjo.dataDetailJO[0]?.nama_barang,
      kode_jenis_bahan: state.kirimjo.dataDetailJO[0]?.kode_jenis_bahan,
      jumlah_akhir: state.kirimjo.dataDetailJO[0]?.stock_akhir,
      berat_akhir: state.kirimjo.dataDetailJO[0]?.berat_akhir,
      berat_batu: state.kirimjo.dataDetailJO[0]?.berat_batu || 0,
      susut: state.kirimjo.beratSusut,
      jumlah_kirim: state.kirimjo.jumlahKirim,
      berat_kirim: state.kirimjo.beratKirim,
    },
  };
};

let FormKirimJO = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataDivisi = useSelector(KirimBahanAdmin.getAllDivisi);
  const dataTukang = useSelector(Tukang.getAllMasterTukang);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="divisi_tujuan"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.kode_divisi} key={item.kode_divisi}>
                    <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col offset={1}>
            <Field
              name="tukang_tujuan"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataTukang.map((item) => {
                return (
                  <Option value={item.kode_staff} key={item.kode_staff}>
                    <span style={{ fontSize: "13px" }}>{item.nama_staff}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
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
          </Col>
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
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
          <Col offset={1}>
            <Field
              name="jumlah_kirim"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Jumlah Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Kirim"
              onBlur={(e) => {
                dispatch(simpanJumlahKirim({ jumlahKirim: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_kirim"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
              onBlur={(e) => {
                dispatch(countBeratKirimJO({ beratKirim: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
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
