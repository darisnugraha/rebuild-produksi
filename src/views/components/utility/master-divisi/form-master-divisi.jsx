import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterDivisi from "../../../../application/selectors/masterdivisi";
import {
  addMasterDivisi,
  editMasterDivisi,
} from "../../../../application/actions/masterdivisi";

const maptostate = (state) => {
  if (state.masterdivisi.dataEdit !== undefined) {
    return {
      initialValues: {
        kode_divisi: state.masterdivisi.dataEdit?._id,
        nama_divisi: state.masterdivisi.dataEdit?.divisi,
      },
    };
  } else {
    return {
      initialValues: {
        kode_divisi: "",
        nama_divisi: "",
      },
    };
  }
};

let FormTambahMasterDivisi = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterDivisi.getIsEditMasterDivisi);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterDivisi);
    } else {
      dispatch(addMasterDivisi);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Divisi" : "Tambah Master Divisi"}
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
              name="kode_divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterDivisi = reduxForm({
  form: "FormTambahMasterDivisi",
  enableReinitialize: true,
})(FormTambahMasterDivisi);
export default connect(maptostate, null)(FormTambahMasterDivisi);
