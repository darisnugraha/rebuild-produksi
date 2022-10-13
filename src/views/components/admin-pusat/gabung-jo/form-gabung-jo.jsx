import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  addGabungJO,
  getAllJobOrder,
  getAllJobOrderDua,
} from "../../../../application/actions/gabungjo";

const maptostate = (state) => {
  if (
    state.gabungjo.feedback.length !== 0 ||
    state.gabungjo.feedbackDua.length !== 0
  ) {
    return {
      initialValues: {
        no_job_order: state.gabungjo.jobOrder,
        kode_barang: state.gabungjo.feedback[0].kode_barang,
        asal_divisi: state.gabungjo.feedback[0].asal_divisi,
        kode_jenis_bahan: state.gabungjo.feedback[0].kode_jenis_bahan,
        berat_akhir: state.gabungjo.feedback[0].berat_akhir,
        no_job_order_dua: state.gabungjo.jobOrderDua,
        kode_barang_dua: state.gabungjo.feedbackDua[0]?.kode_barang,
        asal_divisi_dua: state.gabungjo.feedbackDua[0]?.asal_divisi,
        kode_jenis_bahan_dua: state.gabungjo.feedbackDua[0]?.kode_jenis_bahan,
        berat_akhir_dua: state.gabungjo.feedbackDua[0]?.berat_akhir,
        berat_gabung: state.gabungjo.beratGabung,
      },
    };
  } else {
    return {
      initialValues: {
        no_job_order: "",
      },
    };
  }
};

let FormGabungJO = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addGabungJO);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getAllJobOrder(e.target.value));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="asal_divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Asal Divisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Asal Divisi"
              disabled
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
              name="berat_akhir"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Akhir"
              disabled
            />
          </Col>
        </Row>
        <Divider plain>Data Job Order Dua</Divider>
        <Row>
          <Col offset={1}>
            <Field
              name="no_job_order_dua"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getAllJobOrderDua(e.target.value));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang_dua"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="asal_divisi_dua"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Asal Divisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Asal Divisi"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_bahan_dua"
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
              name="berat_akhir_dua"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Akhir"
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col offset={1}>
            <Field
              name="berat_gabung"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Gabung</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Gabung"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormGabungJO = reduxForm({
  form: "FormGabungJO",
  enableReinitialize: true,
})(FormGabungJO);
export default connect(maptostate, null)(FormGabungJO);
