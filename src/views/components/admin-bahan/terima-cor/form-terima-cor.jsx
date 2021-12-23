import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  addDataTerimaCor,
  countSusut,
  getAllDetailPohon,
} from "../../../../application/actions/terimacor";

const maptostate = (state) => {
  if (state.terimacor.feedback.length !== 0) {
    return {
      initialValues: {
        pohon: state.terimacor.noPohon,
        kode_jenis_bahan: state.terimacor.feedback[0]?.kode_jenis_bahan,
        berat: state.terimacor.feedback[0]?.berat,
        berat_terima: state.terimacor.beratTerima,
        berat_susut: state.terimacor.susut,
      },
    };
  } else {
    return {
      initialValues: {
        pohon: "",
        kode_jenis_bahan: "",
        berat: "",
        berat_terima: "",
        berat_susut: "",
      },
    };
  }
};

let FormTerimaCOR = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addDataTerimaCor);
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
                dispatch(getAllDetailPohon({ noPohon: e.target.value }));
              }}
            />
          </Col>

          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
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
              label={<span style={{ fontSize: "13px" }}>Berat Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Terima"
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
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaCOR = reduxForm({
  form: "FormTerimaCOR",
  enableReinitialize: true,
})(FormTerimaCOR);
export default connect(maptostate, null)(FormTerimaCOR);
