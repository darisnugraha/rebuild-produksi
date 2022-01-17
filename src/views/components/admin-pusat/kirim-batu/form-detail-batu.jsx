import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimBatuPusat from "../../../../application/selectors/kirimbatupusat";
import {
  // countBeratBatuKirim,
  getAllDetailBatu,
  simpanBatuLokal,
} from "../../../../application/actions/kirimbatupusat";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimbatupusat.detailBatu.length !== 0) {
    return {
      initialValues: {
        kode_batu: state.form.FormDetailBatu.values.kode_batu,
        jumlah_batu: state.kirimbatupusat.detailBatu[0]?.stock_batu,
        berat_batu: state.kirimbatupusat.detailBatu[0]?.berat_batu,
      },
    };
  } else {
    return {
      initialValues: {
        kode_batu: state.kirimbatupusat.feedback[0]?.kode_batu,
      },
    };
  }
};

let FormDetailBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBatu = useSelector(KirimBatuPusat.getAllKirimBatuPusat);

  return (
    <Modal
      visible={visible}
      title="Detail Batu"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(simpanBatuLokal);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="kode_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Batu"
              onBlur={(e) => e.preventDefault()}
              onChange={(val) => dispatch(getAllDetailBatu({ noJO: val }))}
            >
              {dataBatu.map((item) => {
                return (
                  <Option value={item.kode_batu} key={item.kode_batu}>
                    <span style={{ fontSize: "13px" }}>{item.kode_batu}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jumlah Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Batu"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah_kirim"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>Jumlah Batu Kirim</span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Batu Kirim"
              // onBlur={(e) => {
              //   dispatch(countBeratBatuKirim({ jumlah: e.target.value }));
              // }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Batu Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu Kirim"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailBatu = reduxForm({
  form: "FormDetailBatu",
  enableReinitialize: true,
})(FormDetailBatu);
export default connect(maptostate, null)(FormDetailBatu);
