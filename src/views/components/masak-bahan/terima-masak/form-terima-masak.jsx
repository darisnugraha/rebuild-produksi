import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import DataBahan from "../../../../application/selectors/masterbahan";
import {
  getTerimaMasak,
  countSusut,
  addTerimaMasak,
} from "../../../../application/actions/terimamasak";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimamasak.feedback.length !== 0) {
    return {
      initialValues: {
        no_kirim: state.terimamasak.feedback[0]?.no_kirim_masak,
        // berat_tot_kirim: state.terimamasak.feedback[0]?.total_berat_murni,
        berat_tot_kirim: state.terimamasak.feedback[0]?.total_24k,
        berat_jadi: state.terimamasak.beratTerima,
        kode_bahan: state.masterbahan.feedback[0]?.kode_bahan,
        berat_susut: state.terimamasak.susut,
      },
    };
  } else {
    return {
      initialValues: {
        no_kirim: "",
        berat_tot_kirim: "",
        kode_bahan: state.masterbahan.feedback[0]?.kode_bahan,
        berat_jadi: "",
        berat_susut: "",
      },
    };
  }
};

let FormTerimaMasak = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBahan = useSelector(DataBahan.getAllMasterBahan);

  return (
    <Modal
      visible={visible}
      title="Terima Masak"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaMasak);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="no_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Kirim Masak</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Kirim Masak"
              onBlur={(e) => {
                dispatch(getTerimaMasak({ noKirim: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_tot_kirim"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>Berat Total Kirim</span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Total Kirim"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="kode_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan Jadi</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan Jadi"
              onBlur={(e) => e.preventDefault()}
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item.kode_bahan} key={item.kode_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="berat_jadi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan Jadi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan Jadi"
              onBlur={(e) => {
                dispatch(countSusut({ beratTerima: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_susut"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Susut</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Susut"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaMasak = reduxForm({
  form: "FormTerimaMasak",
  enableReinitialize: true,
})(FormTerimaMasak);
export default connect(maptostate, null)(FormTerimaMasak);
