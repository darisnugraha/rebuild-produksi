import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import JenisBahan from "../../../../application/selectors/masterbahan";
import {
  addDataTerimaTukangPotong,
  countSusut,
  getTerimaTukangPotong,
} from "../../../../application/actions/terimatukangpotong";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimatukangpotong.feedback.length !== 0) {
    return {
      initialValues: {
        pohon: state.terimatukangpotong.noPohon,
        kode_jenis_bahan:
          state.terimatukangpotong.feedback[0]?.kode_jenis_bahan,
        berat: state.terimatukangpotong.feedback[0]?.berat_casting,
        berat_terima: state.terimatukangpotong.beratPentolan,
        berat_barang: state.terimatukangpotong.beratTerima,
        berat_susut: state.terimatukangpotong.susut,
        tanggal: state.terimatukangpotong.feedback[0]?.tgl_terima_casting,
      },
    };
  } else {
    return {
      initialValues: {
        pohon: "",
        kode_jenis_bahan: state.masterbahan.feedback[0]?.kode_bahan,
        berat: "",
        berat_terima: "",
        berat_barang: "",
        berat_susut: "",
        tanggal: "",
      },
    };
  }
};

let FormTerimaTukangPotong = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataJenisBahan = useSelector(JenisBahan.getAllMasterBahan);

  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addDataTerimaTukangPotong);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="pohon"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nomor Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nomor Pohon"
              onBlur={(e) => {
                dispatch(
                  getTerimaTukangPotong({ noTransaksi: e.target.value })
                );
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              style={{ width: 200 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option value={item.kode_bahan} key={item.kode_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Awal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Awal"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pentolan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pentolan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Barang"
              onBlur={(e) => {
                dispatch(countSusut({ beratTerima: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_susut"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Susut</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Susut"
              disabled
            />
          </Col>
          <Col offset={1} style={{ display: "none" }}>
            <Field
              name="tanggal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tanggal"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaTukangPotong = reduxForm({
  form: "FormTerimaTukangPotong",
  enableReinitialize: true,
})(FormTerimaTukangPotong);
export default connect(maptostate, null)(FormTerimaTukangPotong);
