import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterCuttingBatu from "../../../../application/selectors/mastercuttingbatu";

const maptostate = (state) => {
  if (state.mastercuttingbatu.dataEdit !== undefined) {
    return {
      initialValues: {
        kode_cutting_batu:
          state.mastercuttingbatu.dataEdit[0]?.kode_cutting_batu,
        nama_cutting_batu:
          state.mastercuttingbatu.dataEdit[0]?.nama_cutting_batu,
      },
    };
  } else {
    return {
      initialValues: {
        kode_cutting_batu: "",
        nama_cutting_batu: "",
      },
    };
  }
};

let FormTambahMasterCuttingBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterCuttingBatu.getIsEditMasterCuttingBatu);

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Cutting Batu" : "Tambah Master Cutting Batu"}
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
              name="kode_cutting_batu"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>Kode Cutting Batu</span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Cutting Batu"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_cutting_batu"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>Nama Cutting Batu</span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Cutting Batu"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterCuttingBatu = reduxForm({
  form: "FormTambahMasterCuttingBatu",
  enableReinitialize: true,
})(FormTambahMasterCuttingBatu);
export default connect(maptostate, null)(FormTambahMasterCuttingBatu);
