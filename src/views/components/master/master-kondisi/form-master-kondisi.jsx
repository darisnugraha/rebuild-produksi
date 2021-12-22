import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterKondisi from "../../../../application/selectors/masterkondisi";
import {
  addMasterKondisi,
  editMasterKondisi,
} from "../../../../application/actions/masterkondisi";

const maptostate = (state) => {
  if (state.masterkondisi.dataEdit.length !== 0) {
    return {
      initialValues: {
        nama_kondisi: state.masterkondisi.dataEdit[0]?.nama_kondisi,
        kode_kondisi: state.masterkondisi.dataEdit[0]?.kode_kondisi,
      },
    };
  } else {
    return {
      initialValues: {
        nama_kondisi: "",
        kode_kondisi: "",
      },
    };
  }
};

let FormTambahMasterKondisi = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterKondisi.getIsEditMasterKondisi);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterKondisi);
    } else {
      dispatch(addMasterKondisi);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Kondisi" : "Tambah Master Kondisi"}
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
              name="kode_kondisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Kondisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Kondisi"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_kondisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kondisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kondisi"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterKondisi = reduxForm({
  form: "FormTambahMasterKondisi",
  enableReinitialize: true,
})(FormTambahMasterKondisi);
export default connect(maptostate, null)(FormTambahMasterKondisi);
