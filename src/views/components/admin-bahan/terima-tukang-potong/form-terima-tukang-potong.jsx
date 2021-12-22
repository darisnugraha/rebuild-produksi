import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import JenisBahan from "../../../../application/selectors/masterjenisbahan";
import { getTerimaTukangPotong } from "../../../../application/actions/terimatukangpotong";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimatukangpotong.feedback.length !== 0) {
    return {
      initialValues: {
        no_pohon: state.terimatukangpotong.noPohon,
        kode_jenis_bahan:
          state.terimatukangpotong.feedback[0]?.kode_jenis_bahan,
        berat_awal: state.terimatukangpotong.feedback[0]?.berat_casting,
      },
    };
  } else {
    return {
      initialValues: {
        no_pohon: "",
        kode_jenis_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
        berat_awal: "",
      },
    };
  }
};

let FormTerimaTukangPotong = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataJenisBahan = useSelector(JenisBahan.getAllMasterJenisBahan);

  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
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
              name="no_pohon"
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
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_awal"
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
              name="berat_pentolan"
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
