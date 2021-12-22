import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector, connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterUkuran from "../../../../application/selectors/masterukuran";
import {
  addMasterUkuran,
  editMasterUkuran,
} from "../../../../application/actions/masterukuran";

const maptostate = (state) => {
  if (state.masterukuran.dataEdit.length !== 0) {
    return {
      initialValues: {
        kode_ukuran: state.masterukuran.dataEdit[0]?.kode_ukuran,
        nama_ukuran: state.masterukuran.dataEdit[0]?.nama_ukuran,
      },
    };
  } else {
    return {
      initialValues: {
        kode_ukuran: "",
        nama_ukuran: "",
      },
    };
  }
};

let FormTambahMasterUkuran = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterUkuran.getIsEditMasterUkuran);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterUkuran);
    } else {
      dispatch(addMasterUkuran);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Ukuran" : "Tambah Master Ukuran"}
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
              name="nama_ukuran"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Ukuran</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Ukuran"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterUkuran = reduxForm({
  form: "FormTambahMasterUkuran",
  enableReinitialize: true,
})(FormTambahMasterUkuran);
export default connect(maptostate, null)(FormTambahMasterUkuran);
