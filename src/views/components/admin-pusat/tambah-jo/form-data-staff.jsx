import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import DataStaff from "../../../../application/selectors/mastertukang";
import DataBahan from "../../../../application/selectors/masterjenisbahan";
import TambahJobOrder from "../../../../application/selectors/tambahjoborder";
import { getDataByPohon } from "../../../../application/actions/tambahjoborder";

const { Option } = Select;

const maptostate = (state) => {
  if (state.tambahjoborder.dataPohon !== undefined) {
    return {
      initialValues: {
        staff: state.mastertukang.feedback[0]?.kode_tukang,
        nama_bahan: state.tambahjoborder.dataPohon.kode_jenis_bahan,
        no_buat: state.tambahjoborder.noPohon,
      },
    };
  } else {
    return {
      initialValues: {
        staff: state.mastertukang.feedback[0]?.kode_tukang,
        nama_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
        no_buat: state.tambahjoborder.noPohon,
      },
    };
  }
};

let FormDataStaff = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaff = useSelector(DataStaff.getAllMasterTukang);
  const dataBahan = useSelector(DataBahan.getAllMasterJenisBahan);
  const dataPohon = useSelector(TambahJobOrder.getDataPohon);

  return (
    <Modal
      visible={visible}
      title="Data Staff"
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
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Kode Staff</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Staff"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStaff.map((item) => {
                return (
                  <Option value={item.kode_tukang} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="no_buat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Pohon"
              onChange={(e) => {
                dispatch(getDataByPohon({ pohon: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan Kembali</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan Kembali"
              onBlur={(e) => e.preventDefault()}
              disabled={dataPohon !== undefined ? true : false}
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item.kode_jenis_bahan} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan + ` (${item.kode_jenis_bahan})`}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDataStaff = reduxForm({
  form: "FormDataStaff",
  enableReinitialize: true,
})(FormDataStaff);
export default connect(maptostate, null)(FormDataStaff);
