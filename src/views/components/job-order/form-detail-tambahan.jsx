import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import Bahan from "../../../application/selectors/masterbahan";
import KirimJO from "../../../application/selectors/kirimjo";
import {
  addLocalTambahanBahan,
  saveEditTambahan,
} from "../../../application/actions/kirimjo";
import getLocal from "../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  const dataJO = getLocal("kirim_jo_head");
  if (state.kirimjo.dataEditTambahan !== undefined) {
    return {
      initialValues: {
        no_job_order: state.kirimjo.dataEditTambahan.no_job_order,
        nama_bahan: state.kirimjo.dataEditTambahan.nama_bahan_tambahan,
        jumlah_bahan: state.kirimjo.dataEditTambahan.jumlah_tambahan,
        berat_bahan: state.kirimjo.dataEditTambahan.berat_tambahan,
      },
    };
  } else {
    if (dataJO !== null) {
      return {
        initialValues: {
          no_job_order: dataJO[0]?.no_job_order,
          nama_bahan: "TIDAK ADA",
          jumlah_bahan: 0,
          berat_bahan: 0,
        },
      };
    }
  }
};

let FormDetailTambahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBahan = useSelector(Bahan.getAllMasterBahan);
  const isEdit = useSelector(KirimJO.getIsEditTambahan);
  const dataJO = getLocal("kirim_jo_head") || [];

  return (
    <Modal
      visible={visible}
      title="Detail Tambahan"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        if (isEdit) {
          dispatch(saveEditTambahan);
        } else {
          dispatch(addLocalTambahanBahan);
        }
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1} span={8}>
            <Field
              showSearch
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
              showSearch
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Nama Bahan</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Nama Bahan"
              onBlur={(e) => e.preventDefault()}
              disabled={isEdit}
            >
              <Option value="TIDAK ADA" key="TIDAK ADA">
                <span style={{ fontSize: "13px" }}>Tidak Ada</span>
              </Option>
              {dataBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.kode_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1} span={8}>
            <Field
              name="jumlah_bahan"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Jumlah Tambahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Tambahan"
            />
          </Col>
          <Col offset={1} span={8}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pakai</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pakai"
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
