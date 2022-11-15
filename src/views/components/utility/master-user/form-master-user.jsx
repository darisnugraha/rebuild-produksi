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
        nama_lkp: state.masteruser.dataEdit[0]?.user_name,
        password: state.masteruser.dataEdit[0]?.password,
        retype_password: state.masteruser.dataEdit[0]?.password,
        type: state.masteruser.dataEdit[0]?.level,
      },
    };
  } else {
    return {
      initialValues: {
        user_id: "",
        nama_lkp: "",
        password: "",
        retype_password: "",
        type: "OWNER",
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
              disabled={isEdit}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_lkp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>User Name</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan User Name"
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
          <Col offset={1} span={8}>
            <Field
              name="type"
              label={<span style={{ fontSize: "13px" }}>Type</span>}
              style={{ width: 190 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Type"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="OWNER" key="OWN">
                <span style={{ fontSize: "13px" }}>OWNER</span>
              </Option>
              <Option value="SPV" key="SPV">
                <span style={{ fontSize: "13px" }}>SUPERVISOR</span>
              </Option>
              <Option value="MANAGER" key="MANAGER">
                <span style={{ fontSize: "13px" }}>MANAGER</span>
              </Option>
              <Option value="ADMIN" key="ADM">
                <span style={{ fontSize: "13px" }}>ADMIN</span>
              </Option>
              <Option value="ADMIN BERLIAN" key="ADMBRL">
                <span style={{ fontSize: "13px" }}>ADMIN BERLIAN</span>
              </Option>
              <Option value="ADMIN BAHAN" key="ADMBHN">
                <span style={{ fontSize: "13px" }}>ADMIN BAHAN</span>
              </Option>
              <Option value="ADMIN PUSAT" key="ADMPST">
                <span style={{ fontSize: "13px" }}>ADMIN PUSAT</span>
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
