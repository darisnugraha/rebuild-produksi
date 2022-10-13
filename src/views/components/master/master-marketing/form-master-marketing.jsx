import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterMarketing from "../../../../application/selectors/mastermarketing";
import {
  addMasterMarketing,
  editMasterMarketing,
} from "../../../../application/actions/mastermarketing";

const maptostate = (state) => {
  if (state.mastermarketing.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.mastermarketing.dataEdit?._id,
        kode_marketing: state.mastermarketing.dataEdit?.kode_marketing,
        nama_marketing: state.mastermarketing.dataEdit?.nama_marketing,
        no_hp: state.mastermarketing.dataEdit?.no_hp,
        email: state.mastermarketing.dataEdit?.email,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_marketing: "",
        nama_marketing: "",
        no_hp: "",
        email: "",
      },
    };
  }
};

let FormTambahMasterMarketing = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterMarketing.getIsEditMasterMarketing);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterMarketing);
    } else {
      dispatch(addMasterMarketing);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Marketing" : "Tambah Master Marketing"}
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
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_marketing"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Marketing</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Marketing"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_marketing"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Marketing</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Marketing"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="no_hp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Hp</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Hp"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="email"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Email</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Email"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterMarketing = reduxForm({
  form: "FormTambahMasterMarketing",
  enableReinitialize: true,
})(FormTambahMasterMarketing);
export default connect(maptostate, null)(FormTambahMasterMarketing);
