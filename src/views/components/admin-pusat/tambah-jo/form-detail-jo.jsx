import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import DataMarketing from "../../../../application/selectors/mastermarketing";
import DataCustomer from "../../../../application/selectors/mastercustomer";
import DataBarang from "../../../../application/selectors/masteroriginal";
import DataJenisBahan from "../../../../application/selectors/masterjenisbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.mastermarketing.feedback !== undefined) {
    return {
      initialValues: {
        marketing: state.mastermarketing.feedback[0]?.kode_marketing,
        customer: state.mastercustomer.feedback[0]?.kode_customer,
        kode_barang: state.masteroriginal.feedback[0]?.kode_barang,
        kode_jenis_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        kode_marketing: state.mastermarketing.feedback[0]?.kode_marketing,
        kode_customer: state.mastercustomer.feedback[0]?.kode_customer,
        kode_barang: state.masteroriginal.feedback[0]?.kode_barang,
        kode_jenis_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
      },
    };
  }
};

let FormDetailJobOrder = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataMarketing = useSelector(DataMarketing.getAllMasterMarketing);
  const dataCustomer = useSelector(DataCustomer.getAllMasterCustomer);
  const dataBarang = useSelector(DataBarang.getAllMasterOriginal);
  const dataJenisBahan = useSelector(DataJenisBahan.getAllMasterJenisBahan);

  return (
    <Modal
      visible={visible}
      title="Detail Bahan"
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
              name="marketing"
              label={<span style={{ fontSize: "13px" }}>Kode Marketing</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Marketing"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMarketing.map((item) => {
                return (
                  <Option value={item.kode_marketing} key={item.kode_marketing}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_marketing}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="customer"
              label={<span style={{ fontSize: "13px" }}>Kode Customer</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Customer"
              onBlur={(e) => e.preventDefault()}
            >
              {dataCustomer.map((item) => {
                return (
                  <Option value={item.kode_customer} key={item.kode_customer}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_customer}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No SPK</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No SPK"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Barang"
              onBlur={(e) => e.preventDefault()}
            >
              {dataBarang.map((item) => {
                return (
                  <Option value={item.kode_barang} key={item.kode_barang}>
                    <span style={{ fontSize: "13px" }}>{item.nama_barang}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="nama_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan +
                        " (" +
                        item.kode_jenis_bahan +
                        ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Jumlah</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="catatan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Catatan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Tulis Catatan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailJobOrder = reduxForm({
  form: "FormDetailJobOrder",
  enableReinitialize: true,
})(FormDetailJobOrder);
export default connect(maptostate, null)(FormDetailJobOrder);
