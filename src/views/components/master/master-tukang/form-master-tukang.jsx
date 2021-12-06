import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterTukang from "../../../../application/selectors/mastertukang";

const maptostate = (state) => {
  if (state.mastertukang.dataEdit !== undefined) {
    return {
      initialValues: {
        kode_tukang: state.mastertukang.dataEdit[0]?.kode_staff,
        nama_tukang: state.mastertukang.dataEdit[0]?.nama_staff,
        no_hp: state.mastertukang.dataEdit[0]?.no_hp,
        email: state.mastertukang.dataEdit[0]?.email,
      },
    };
  } else {
    return {
      initialValues: {
        kode_tukang: "",
        nama_tukang: "",
        no_hp: "",
        email: "",
      },
    };
  }
};

let FormTambahMasterTukang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterTukang.getIsEditMasterTukang);

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Tukang" : "Tambah Master Tukang"}
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
              name="kode_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Tukang"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Tukang"
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

FormTambahMasterTukang = reduxForm({
  form: "FormTambahMasterTukang",
  enableReinitialize: true,
})(FormTambahMasterTukang);
export default connect(maptostate, null)(FormTambahMasterTukang);
