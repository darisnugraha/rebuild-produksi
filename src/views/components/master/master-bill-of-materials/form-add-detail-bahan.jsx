import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterBahan from "../../../../application/selectors/masterbahan";
import MasterBillOfMaterials from "../../../../application/selectors/masterbillofmaterials";
import { useDispatch } from "react-redux";
import {
  addDetailBahan,
  saveEditDetailBahan,
} from "../../../../application/actions/masterbillofmaterials";

const maptostate = (state) => {
  if (state.masterbillofmaterials.isEditDetailBahan) {
    return {
      initialValues: {
        id: state.masterbillofmaterials.dataEditBahan.id,
        kode_bahan: state.masterbillofmaterials.dataEditBahan.kode_bahan,
        persentase: state.masterbillofmaterials.dataEditBahan.persentase,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_bahan: state.masterbahan.feedback[0]?.nama_bahan,
        persentase: 0,
      },
    };
  }
};
const { Option } = Select;

let FormTambahDetailBahan = ({ visible, onCancel }, prop) => {
  const dispatch = useDispatch();
  const dataBahan = useSelector(MasterBahan.getAllMasterBahan);
  const isEdit = useSelector(MasterBillOfMaterials.getIsEditDetailBahan);
  const btnLoading = useSelector(ui.getBtnLoading);
  const [form] = Form.useForm();
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(saveEditDetailBahan);
    } else {
      dispatch(addDetailBahan);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Detail Bahan" : "Tambah Detail Bahan"}
      okText={isEdit ? "Edit" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col style={{ display: "none" }}>
            <Field
              name="id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan ID"
            />
          </Col>
          <Col span={12}>
            <Field
              name="kode_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Bahan</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Bahan"
              // defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              {dataBahan.map((list) => {
                return (
                  <Option value={list.nama_bahan} key={list.kode_bahan}>
                    <span style={{ fontSize: "13px" }}>{list.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="persentase"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Persentase</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Persentase"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahDetailBahan = reduxForm({
  form: "FormTambahDetailBahan",
  enableReinitialize: true,
})(FormTambahDetailBahan);
export default connect(maptostate, null)(FormTambahDetailBahan);
