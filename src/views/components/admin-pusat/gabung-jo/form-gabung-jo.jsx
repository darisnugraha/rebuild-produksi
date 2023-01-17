import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import GabungJO from "../../../../application/selectors/gabungjo";
import {
  addGabungJOLocal,
  getAllJobOrder,
  getDataByNoInduk,
} from "../../../../application/actions/gabungjo";

const { Option } = Select;

const maptostate = (state) => {
  if (state.gabungjo.feedback.length !== 0) {
    return {
      initialValues: {
        no_job_order: state.gabungjo.jobOrder,
        no_induk_job_order: state.gabungjo.noInduk,
        kode_barang: state.gabungjo.feedback[0].kode_barang,
        asal_divisi: state.gabungjo.feedback[0].asal_divisi,
        kode_jenis_bahan: state.gabungjo.feedback[0].kode_jenis_bahan,
        berat_akhir: state.gabungjo.feedback[0].berat_akhir,
      },
    };
  } else {
    return {
      initialValues: {
        no_job_order: "",
      },
    };
  }
};

let FormGabungJO = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataInduk = useSelector(GabungJO.getDataNoInduk);
  const dataJO = useSelector(GabungJO.getDataNoJO);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addGabungJOLocal);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              showSearch
              name="no_induk_job_order"
              label={
                <span style={{ fontSize: "13px" }}>No Induk Job Order</span>
              }
              component={styleAntd.ASelect}
              placeholder="Pilih No Induk Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getDataByNoInduk(e))}
              // disabled={isEdit}
            >
              {dataInduk.map((item) => {
                return (
                  <Option value={item.no_induk_job_order} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_induk_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="no_job_order"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getAllJobOrder(e))}
              // disabled={isEdit}
            >
              {dataJO.map((item) => {
                return (
                  <Option value={item.no_job_order} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          {/* <Col span={12}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getAllJobOrder(e.target.value));
              }}
            />
          </Col> */}
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
              name="asal_divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Asal Divisi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Asal Divisi"
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
          <Col span={12}>
            <Field
              name="berat_akhir"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Akhir"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormGabungJO = reduxForm({
  form: "FormGabungJO",
  enableReinitialize: true,
})(FormGabungJO);
export default connect(maptostate, null)(FormGabungJO);
