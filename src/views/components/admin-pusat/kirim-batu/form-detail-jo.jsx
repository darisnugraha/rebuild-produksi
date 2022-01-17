import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import Divisi from "../../../../application/selectors/kirimbahanadmin";
import {
  getAllJOKirimBatuPusat,
  simpanDetailJOLokal,
} from "../../../../application/actions/kirimbatupusat";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimbatupusat.feedback.length !== 0) {
    return {
      initialValues: {
        divisi: state.kirimbahanadmin.feedback[0]?.kode_divisi,
        no_job_order: state.kirimbatupusat.no_job_order,
        kode_barang: state.kirimbatupusat.feedback[0]?.kode_barang,
        nama_barang: state.kirimbatupusat.feedback[0]?.nama_barang,
        kode_jenis_bahan: state.kirimbatupusat.feedback[0]?.kode_jenis_bahan,
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

let FormDetailJOKirimBatu = ({ visible, onCreate, onCancel }, prop) => {
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
        dispatch(simpanDetailJOLokal);
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
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getAllJOKirimBatuPusat({ noJO: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailJOKirimBatu = reduxForm({
  form: "FormDetailJOKirimBatu",
  enableReinitialize: true,
})(FormDetailJOKirimBatu);
export default connect(maptostate, null)(FormDetailJOKirimBatu);
