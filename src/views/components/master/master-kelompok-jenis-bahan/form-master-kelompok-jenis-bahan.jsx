import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterKelompokJenisBahan from "../../../../application/selectors/masterkelompokjenisbahan";
import {
  addMasterKelompokJenisBahan,
  editMasterKelompokJenisBahan,
} from "../../../../application/actions/masterkelompokjenisbahan";

const maptostate = (state) => {
  if (state.masterkelompokjenisbahan.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masterkelompokjenisbahan.dataEdit?._id,
        kode_kelompok: state.masterkelompokjenisbahan.dataEdit?.kode_kelompok,
        nama_kelompok: state.masterkelompokjenisbahan.dataEdit?.nama_kelompok,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_kelompok: "",
        nama_kelompok: "",
      },
    };
  }
};

let FormTambahMasterKelompokJenisBahan = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(
    MasterKelompokJenisBahan.getIsEditMasterKelompokJenisBahan
  );
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterKelompokJenisBahan);
    } else {
      dispatch(addMasterKelompokJenisBahan);
    }
  };

  return (
    <Modal
      visible={visible}
      title={
        isEdit
          ? "Edit Master Kelompok Jenis Bahan"
          : "Tambah Master Kelompok Jenis Bahan"
      }
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12} style={{ display: "none" }}>
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
          <Col span={12}>
            <Field
              name="kode_kelompok"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>
                  Kode Kelompok Jenis Bahan
                </span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Kelompok Jenis Bahan"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_kelompok"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>
                  Nama Kelompok Jenis Bahan
                </span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Kelompok Jenis Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterKelompokJenisBahan = reduxForm({
  form: "FormTambahMasterKelompokJenisBahan",
  enableReinitialize: true,
})(FormTambahMasterKelompokJenisBahan);
export default connect(maptostate, null)(FormTambahMasterKelompokJenisBahan);
