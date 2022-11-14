import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TerimaBahanTukang from "../../../../application/selectors/terimabahantukang";
import {
  addTerimaBahanTukang,
  getAllBahanAsalTukang,
  // getAllTukangAsalDivisi,
  getBeratBahanByStaff,
} from "../../../../application/actions/terimabahantukang";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimabahantukang.feedbackTukang.length !== 0) {
    return {
      initialValues: {
        divisi_asal: "ADMIN PUSAT",
        tukang_asal: state.terimabahantukang.tukang_asal,
        bahan: state.terimabahantukang.bahan,
        berat_bahan: state.terimabahantukang.beratBahan,
      },
    };
  } else {
    return {
      initialValues: {
        divisi_asal: "ADMIN PUSAT",
        tukang_asal: "",
        bahan: "",
        berat_bahan: "",
      },
    };
  }
};

let FormTerimaBahanTukang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  // const [form] = Form.useForm();
  const dataTukangAsal = useSelector(TerimaBahanTukang.getAllTukangAsal);
  const dataBahanAsal = useSelector(TerimaBahanTukang.getAllBahanAsal);

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaBahanTukang);
      }}
    >
      <Form layout="vertical">
        <Row>
          {/* <Col offset={1}>
            <Field
              name="divisi_asal"
              label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Asal"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getAllTukangAsalDivisi({ divisi: e }))}
            >
              {dataDivisiAsal.map((item) => {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col> */}
          <Col offset={1}>
            <Field
              name="divisi_asal"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Asal"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="tukang_asal"
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Asal"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getAllBahanAsalTukang({ staff: e }))}
            >
              {dataTukangAsal.map((item) => {
                return (
                  <Option value={item.nama_tukang} key={item.kode_tukang}>
                    <span style={{ fontSize: "13px" }}>{item.nama_tukang}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getBeratBahanByStaff({ bahan: e }))}
            >
              {dataBahanAsal.map((item) => {
                return (
                  <Option value={item._id} key={item._id}>
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
              style={{ width: 250 }}
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

FormTerimaBahanTukang = reduxForm({
  form: "FormTerimaBahanTukang",
  enableReinitialize: true,
})(FormTerimaBahanTukang);
export default connect(maptostate, null)(FormTerimaBahanTukang);
