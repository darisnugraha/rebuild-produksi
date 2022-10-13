import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  addCloseJO,
  countBeratAkhir,
  getAllDetailJO,
} from "../../../../application/actions/closejo";

const maptostate = (state) => {
  if (state.closejo.feedback.length !== 0) {
    return {
      initialValues: {
        no_job_order: state.closejo.feedback.no_job_order,
        lokasi_job_order: state.closejo.feedback.divisi,
        kode_barang: state.closejo.feedback.kode_barang,
        nama_barang: state.closejo.feedback.nama_barang,
        kode_jenis_bahan: state.closejo.feedback.kode_jenis_bahan,
        berat_asal: state.closejo.feedback.berat_out,
        berat_close: state.closejo.beratClose,
        berat_akhir: state.closejo.beratAkhir,
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

let FormCloseJO = ({ visible, onCreate, onCancel }, prop) => {
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
        dispatch(addCloseJO);
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
                dispatch(getAllDetailJO({ noJobOrder: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="lokasi_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Lokasi Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Lokasi Job Order"
              disabled
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
              name="nama_barang"
              type="text"
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
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_asal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Asal"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_close"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Close</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Close"
              onChange={(e) => {
                dispatch(countBeratAkhir({ beratTerima: e.target.value }));
              }}
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
          <Col offset={1}>
            <Field
              name="keterangan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Keterangan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Keterangan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormCloseJO = reduxForm({
  form: "FormCloseJO",
  enableReinitialize: true,
})(FormCloseJO);
export default connect(maptostate, null)(FormCloseJO);
