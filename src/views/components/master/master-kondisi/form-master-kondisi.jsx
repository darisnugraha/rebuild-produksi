import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterKondisi from "../../../../application/selectors/masterkondisi";

const maptostate = (state) => {
  if (state.masterjenisbatu.dataEdit !== undefined) {
    return {
      initialValues: {
        kondisi: state.masterkondisi.dataEdit[0]?.kondisi,
      },
    };
  } else {
    return {
      initialValues: {
        kondisi: "",
      },
    };
  }
};

let FormTambahMasterKondisi = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterKondisi.getIsEditMasterKondisi);

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Kondisi" : "Tambah Master Kondisi"}
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="kondisi"
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
