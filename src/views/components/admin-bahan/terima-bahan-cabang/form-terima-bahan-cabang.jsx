import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TerimaBahanCabang from "../../../../application/selectors/terimabahancabang";
import {
  getDetailKirimBahanCabang,
  getSaldoKirimBahanCabang,
  sendTerimaBahanCabang,
} from "../../../../application/actions/terimabahancabang";

const { Option } = Select;

const maptostate = (state) => {};

let FormTerimaBahanCabang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  // const [form] = Form.useForm();
  const dataKirim = useSelector(TerimaBahanCabang.getSaldoKirimBahanCabang);
  const dataCabang = useSelector(TerimaBahanCabang.getAllCAbang);

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(sendTerimaBahanCabang);
      }}
    >
      <Form layout="vertical">
        <Row gutter={[8, 8]}>
          <Col span={12} className="d-none">
            <Field
              name="id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan ID"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="cabang_asal"
              label={<span style={{ fontSize: "13px" }}>Cabang Asal</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Cabang Asal"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getSaldoKirimBahanCabang(e))}
            >
              {dataCabang.map((item) => {
                return (
                  <Option
                    value={`${item.kode_toko}|${item.portal}`}
                    // value={`${item.kode_toko}|https://7274-125-164-16-56.ngrok-free.app/`}
                    key={item._id}
                  >
                    <span style={{ fontSize: "13px" }}>{item.nama_toko}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="no_kirim"
              label={<span style={{ fontSize: "13px" }}>No Kirim</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih No Kirim"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getDetailKirimBahanCabang(e))}
            >
              {dataKirim.map((item) => {
                return (
                  <Option value={item.no_mutasi} key={item.no_mutasi}>
                    <span style={{ fontSize: "13px" }}>{item.no_mutasi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="nama_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Bahan"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaBahanCabang = reduxForm({
  form: "FormTerimaBahanCabang",
  enableReinitialize: true,
})(FormTerimaBahanCabang);
export default connect(maptostate, null)(FormTerimaBahanCabang);
