import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import getLocal from "../../../infrastructure/services/local/get-local";
import ui from "../../../application/selectors/ui";
import Batu from "../../../application/selectors/masterbatu";
import KirimJO from "../../../application/selectors/kirimjo";
import {
  addLocalBatu,
  saveEditBatu,
} from "../../../application/actions/kirimjo";

const { Option } = Select;

const maptostate = (state) => {
  const dataJO = getLocal("kirim_jo_head");
  if (state.kirimjo.dataEditBatu !== undefined) {
    if (dataJO !== null) {
      return {
        initialValues: {
          no_job_order: state.kirimjo.dataEditBatu.no_job_order,
          kode_batu: state.kirimjo.dataEditBatu.kode_batu,
          jumlah_tak_terpakai: state.kirimjo.dataEditBatu.jumlah_tak_terpakai,
          berat_tak_terpakai: state.kirimjo.dataEditBatu.berat_tak_terpakai,
        },
      };
    }
  } else {
    if (dataJO !== null) {
      return {
        initialValues: {
          no_job_order: dataJO[0]?.no_job_order,
          kode_batu: "TIDAK ADA",
          jumlah_tak_terpakai: 0,
          berat_tak_terpakai: 0,
        },
      };
    }
  }
};

let FormDetailBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBatu = useSelector(Batu.getAllMasterBatu);
  const dataJO = getLocal("kirim_jo_head") || [];
  const isEdit = useSelector(KirimJO.getIsEditBatu);

  return (
    <Modal
      visible={visible}
      title="Detail Batu"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        if (isEdit) {
          dispatch(saveEditBatu);
        } else {
          dispatch(addLocalBatu);
        }
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1} span={8}>
            <Field
              name="no_job_order"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
              disabled={isEdit}
            >
              {dataJO.map((item) => {
                return (
                  <Option value={item.no_job_order} key={item.no_job_order}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1} span={8}>
            <Field
              name="kode_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Batu"
              onBlur={(e) => e.preventDefault()}
              disabled={isEdit}
            >
              <Option value="TIDAK ADA" key="TIDAK ADA">
                <span style={{ fontSize: "13px" }}>Tidak Ada</span>
              </Option>
              {dataBatu.map((item) => {
                return (
                  <Option value={item.kode_batu} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.kode_batu}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1} span={8}>
            <Field
              name="jumlah_tak_terpakai"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Jumlah Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Batu"
            />
          </Col>
          <Col offset={1} span={8}>
            <Field
              name="berat_tak_terpakai"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu"
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
