import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterUser from "../../../../application/selectors/masteruser";
import {
  addMasterUser,
  editMasterUser,
} from "../../../../application/actions/masteruser";

const maptostate = (state) => {
  if (state.masteruser.dataEdit.length !== 0) {
    return {
      initialValues: {
        user_id: state.masteruser.dataEdit[0]?.user_id,
        nama_lkp: state.masteruser.dataEdit[0]?.nama_lkp,
        password: state.masteruser.dataEdit[0]?.password,
        retype_password: state.masteruser.dataEdit[0]?.password,
        type: state.masteruser.dataEdit[0]?.type,
      },
    };
  } else {
    return {
      initialValues: {
        user_id: "",
        nama_lkp: "",
        password: "",
        retype_password: "",
        type: "",
      },
    };
  }
};

let FormTambahMasterUser = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const { Option } = Select;
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterUser.getIsEditMasterUser);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterUser);
    } else {
      dispatch(addMasterUser);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master User" : "Tambah Master User"}
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
          <Col offset={1}>
            <Field
              name="user_id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>User ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan User ID"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_lkp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Lengkap</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Lengkap"
            />
          </Col>
          <Col offset={1} style={{ display: isEdit ? "none" : "" }}>
            <Field
              name="password"
              type="password"
              label={<span style={{ fontSize: "13px" }}>Password</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Password"
            />
          </Col>
          <Col offset={1} style={{ display: isEdit ? "none" : "" }}>
            <Field
              name="retype_password"
              type="password"
              label={<span style={{ fontSize: "13px" }}>RE-Password</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan RE-Password"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="type"
              label={<span style={{ fontSize: "13px" }}>Type</span>}
              style={{ width: 190 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Type"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="OWN" key="OWN">
                <span style={{ fontSize: "13px" }}>OWN</span>
              </Option>
              <Option value="ADM" key="ADM">
                <span style={{ fontSize: "13px" }}>ADM</span>
              </Option>
            </Field>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterUser = reduxForm({
  form: "FormTambahMasterUser",
  enableReinitialize: true,
})(FormTambahMasterUser);
export default connect(maptostate, null)(FormTambahMasterUser);
