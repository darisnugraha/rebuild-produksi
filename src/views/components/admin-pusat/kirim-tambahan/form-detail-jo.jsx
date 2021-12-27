import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import Divisi from "../../../../application/selectors/kirimbahanadmin";
import { addKirimTambahanDivisi } from "../../../../application/actions/kirimtambahan";

const { Option } = Select;

const maptostate = (state) => {
  const data = JSON.parse(localStorage.getItem("divisi_detail_tambahan"));
  if (data !== null) {
    return {
      initialValues: {
        divisi: data[0]?.kode_divisi,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: state.kirimbahanadmin.feedback[0]?.kode_divisi,
      },
    };
  }
};

let FormDetailJOKirimTambahan = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataDivisi = useSelector(Divisi.getAllDivisi);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addKirimTambahanDivisi);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="divisi"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.kode_divisi} key={item.kode_divisi}>
                    <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailJOKirimTambahan = reduxForm({
  form: "FormDetailJOKirimTambahan",
  enableReinitialize: true,
})(FormDetailJOKirimTambahan);
export default connect(maptostate, null)(FormDetailJOKirimTambahan);
