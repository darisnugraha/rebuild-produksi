import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector, connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterStatus from "../../../../application/selectors/masterstatus";
import {
  addMasterStatus,
  editMasterStatus,
} from "../../../../application/actions/masterstatus";

const maptostate = (state) => {
  if (state.masterstatus.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masterstatus.dataEdit?._id,
        kode_status_job_order:
          state.masterstatus.dataEdit?.kode_status_job_order,
        nama_status_job_order:
          state.masterstatus.dataEdit?.nama_status_job_order,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_status_job_order: "",
        nama_status_job_order: "",
      },
    };
  }
};

let FormTambahMasterStatus = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterStatus.getIsEditMasterStatus);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterStatus);
    } else {
      dispatch(addMasterStatus);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Status" : "Tambah Master Status"}
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1} style={{ display: "none" }}>
            <Field
              name="id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan ID"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_status_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Status</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Status"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_status_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Status</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Status"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterStatus = reduxForm({
  form: "FormTambahMasterStatus",
  enableReinitialize: true,
})(FormTambahMasterStatus);
export default connect(maptostate, null)(FormTambahMasterStatus);
