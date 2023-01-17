import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimTambahan from "../../../../application/selectors/kirimtambahan";
import { getStockBahanAdminByStaff } from "../../../../application/actions/kirimtambahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimtambahan.feedback !== undefined) {
    return {
      initialValues: {
        saldo_asal: state.kirimtambahan.feedback[0]?.tukang,
        nama_bahan: state.kirimtambahan.dataStock[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        saldo_asal: "",
        nama_bahan: "",
      },
    };
  }
};

let FormDetailTambahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataAsalStockBahan = useSelector(KirimTambahan.getAllAsalStockBahan);
  const dataStockBahan = useSelector(KirimTambahan.getStockBahanAdmin);

  return (
    <Modal
      visible={visible}
      title="Detail Tambahan"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              showSearch
              name="saldo_asal"
              label={<span style={{ fontSize: "13px" }}>Saldo Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Saldo Asal"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getStockBahanAdminByStaff({ namaStaff: e }))
              }
            >
              {dataAsalStockBahan.map((item) => {
                return (
                  <Option value={item.tukang} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.tukang}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              showSearch
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Nama Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Nama Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStockBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.nama_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailTambahan = reduxForm({
  form: "FormDetailTambahan",
  enableReinitialize: true,
})(FormDetailTambahan);
export default connect(maptostate, null)(FormDetailTambahan);
