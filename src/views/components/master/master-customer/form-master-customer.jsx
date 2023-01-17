import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterCustomer from "../../../../application/selectors/mastercustomer";
import {
  addMasterCustomer,
  editMasterCustomer,
} from "../../../../application/actions/mastercustomer";

const { Option } = Select;

const maptostate = (state) => {
  if (state.mastercustomer.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.mastercustomer.dataEdit?._id,
        kode_customer: state.mastercustomer.dataEdit?.kode_customer,
        nama_customer: state.mastercustomer.dataEdit?.nama_customer,
        nama_toko: state.mastercustomer.dataEdit?.nama_toko,
        alamat: state.mastercustomer.dataEdit?.alamat,
        negara: state.mastercustomer.dataEdit?.negara,
        lokasi: state.mastercustomer.dataEdit?.lokasi,
        no_hp: state.mastercustomer.dataEdit?.no_hp,
        email: state.mastercustomer.dataEdit?.email,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_customer: "",
        nama_customer: "",
        nama_toko: "",
        alamat: "",
        negara: "",
        lokasi: "",
        no_hp: "",
        email: "",
      },
    };
  }
};

let FormTambahMasterCustomer = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterCustomer.getIsEditMasterCustomer);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterCustomer);
    } else {
      dispatch(addMasterCustomer);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Customer" : "Tambah Master Customer"}
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
          <Col span={12}>
            <Field
              name="kode_customer"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Customer</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Customer"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_customer"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Customer</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Customer"
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_toko"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Toko</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Toko"
            />
          </Col>
          <Col span={12}>
            <Field
              name="alamat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Alamat</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Alamat"
            />
          </Col>
          <Col span={12}>
            <Field
              name="no_hp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Hp</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Hp"
            />
          </Col>
          <Col span={12}>
            <Field
              name="email"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Email</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Email"
            />
          </Col>
          <Col span={12}>
            <Field
              name="negara"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Negara</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Negara"
            />
          </Col>
          <Col span={12}>
            <Field
              name="lokasi"
              label={<span style={{ fontSize: "13px" }}>Lokasi</span>}
              style={{ width: "100px" }}
              component={styleAntd.ASelect}
              placeholder="Pilih Lokasi"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="lokal" key="lokal">
                <span style={{ fontSize: "13px" }}>Lokal</span>
              </Option>
              <Option value="export" key="export">
                <span style={{ fontSize: "13px" }}>Export</span>
              </Option>
            </Field>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterCustomer = reduxForm({
  form: "FormTambahMasterCustomer",
  enableReinitialize: true,
})(FormTambahMasterCustomer);
export default connect(maptostate, null)(FormTambahMasterCustomer);
