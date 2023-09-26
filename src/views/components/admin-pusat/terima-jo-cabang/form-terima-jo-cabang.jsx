import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  addTerimaJOLocal,
  getAllDetailJO,
  getDataByNoInduk,
} from "../../../../application/actions/terimajocabang";
import TerimaJOCabang from "../../../../application/selectors/terimajocabang";

const { Option } = Select;
const maptostate = (state) => {
  if (state.terimajocabang.feedback.length !== 0) {
    return {
      initialValues: {
        divisi_terima: localStorage.getItem("divisi") || "",
        no_job_order: state.terimajocabang.feedback[0]?.no_job_order,
        tukang_terima: state.terimajocabang.feedback[0]?.kode_tukang,
        kode_barang: state.terimajocabang.feedback[0]?.kode_barang,
        nama_barang: state.terimajocabang.feedback[0]?.nama_barang,
        kode_jenis_bahan: state.terimajocabang.feedback[0]?.kode_jenis_bahan,
        jumlah_akhir: state.terimajocabang.feedback[0]?.stock_akhir,
        berat_akhir: state.terimajocabang.feedback[0]?.berat_akhir,
        no_induk_job_order: state.terimajocabang.NoIndukJO,
      },
    };
  } else {
    return {
      initialValues: {
        divisi_terima: localStorage.getItem("divisi") || "",
        tukang_terima: "",
        kode_barang: "",
        nama_barang: "",
        kode_jenis_bahan: "",
        jumlah_akhir: "",
        berat_akhir: "",
        no_induk_job_order:
          state.terimajocabang.dataNoInduk[1]?.no_induk_job_order,
        no_job_order: state.terimajocabang.detailJO[0]?.no_job_order,
      },
    };
  }
};

let FormTerimaJOCabang = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataInduk = useSelector(TerimaJOCabang.getDataNoInduk);
  const dataJO = useSelector(TerimaJOCabang.getDataDetailJO);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaJOLocal);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="divisi_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Terima"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="no_induk_job_order"
              label={
                <span style={{ fontSize: "13px" }}>No Induk Job Order</span>
              }
              // style={{ width: 250 }}
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
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getAllDetailJO({ noJobOrder: e, type: "CHANGE" }))
              }
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
                dispatch(
                  getAllDetailJO({ noJobOrder: e.target.value, type: "CHANGE" })
                );
              }}
            />
          </Col> */}
          <Col span={12}>
            <Field
              name="tukang_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Tukang Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tukang Terima"
              disabled
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
          <Col span={12}>
            <Field
              name="jumlah_akhir"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jumlah Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Akhir"
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

FormTerimaJOCabang = reduxForm({
  form: "FormTerimaJOCabang",
  enableReinitialize: true,
})(FormTerimaJOCabang);
export default connect(maptostate, null)(FormTerimaJOCabang);
