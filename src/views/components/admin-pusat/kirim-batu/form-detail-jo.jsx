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
import getLocal from "../../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  const local = getLocal("data_jo_kirim_batu_head");
  if (local !== null) {
    return {
      initialValues: {
        divisi: local.divisi,
        no_job_order: local.no_job_order,
        kode_barang: local.kode_barang,
        nama_barang: local.nama_barang,
        kode_jenis_bahan: local.kode_jenis_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: state.kirimbahanadmin.feedback[0]?.divisi,
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
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              showSearch
              name="divisi"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
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
          <Col span={12}>
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
          <Col span={12}>
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
          <Col span={12}>
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
