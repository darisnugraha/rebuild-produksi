import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  addCloseJOLocal,
  countBeratAkhir,
  getAllDetailJO,
  getDataByNoInduk,
  saveEdit,
} from "../../../../application/actions/closejo";
import CloseJO from "../../../../application/selectors/closejo";

const { Option } = Select;
const maptostate = (state) => {
  if (state.closejo.dataEdit !== undefined) {
    return {
      initialValues: {
        no_job_order: state.closejo.dataEdit.no_job_order,
        lokasi_job_order: state.closejo.dataEdit.divisi,
        kode_barang: state.closejo.dataEdit.kode_barang,
        nama_barang: state.closejo.dataEdit.nama_barang,
        kode_jenis_bahan: state.closejo.dataEdit.kode_jenis_bahan,
        berat_asal: state.closejo.dataEdit.berat_out,
        keterangan: state.closejo.dataEdit.keterangan,
        berat_close: state.closejo.beratClose,
        berat_akhir: state.closejo.beratAkhir,
        no_induk_job_order: state.closejo.NoInduk,
      },
    };
  } else {
    if (state.closejo.feedback.length !== 0) {
      return {
        initialValues: {
          no_job_order: state.closejo.feedback.no_job_order,
          lokasi_job_order: state.closejo.feedback.divisi,
          kode_barang: state.closejo.feedback.kode_barang,
          nama_barang: state.closejo.feedback.nama_barang,
          kode_jenis_bahan: state.closejo.feedback.kode_jenis_bahan,
          berat_asal: state.closejo.feedback.berat_out,
          berat_close: state.closejo.beratClose,
          berat_akhir: state.closejo.beratAkhir,
          no_induk_job_order: state.closejo.NoInduk,
        },
      };
    } else {
      return {
        initialValues: {
          no_job_order: "",
          no_induk_job_order: state.closejo.dataNoInduk[1]?.no_induk_job_order,
        },
      };
    }
  }
};

let FormCloseJO = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataInduk = useSelector(CloseJO.getDataNoInduk);
  const dataJO = useSelector(CloseJO.getDataDetailJO);
  const isEdit = useSelector(CloseJO.getIsEditDataDetailJO);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        if (isEdit) {
          dispatch(saveEdit);
        } else {
          dispatch(addCloseJOLocal);
        }
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="no_induk_job_order"
              label={
                <span style={{ fontSize: "13px" }}>No Induk Job Order</span>
              }
              // style={{ width: 250 }}
              showSearch
              component={styleAntd.ASelect}
              placeholder="Pilih No Induk Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getDataByNoInduk(e))}
              disabled={isEdit}
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
              name="no_job_order"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              // style={{ width: 250 }}
              showSearch
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getAllDetailJO({ noJobOrder: e, datatype: "CHANGE" }))
              }
              disabled={isEdit}
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
                dispatch(getAllDetailJO({ noJobOrder: e.target.value }));
              }}
            />
          </Col> */}
          <Col span={12}>
            <Field
              name="lokasi_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Lokasi Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Lokasi Job Order"
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
              name="berat_asal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Asal"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_close"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Close</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Close"
              onChange={(e) => {
                dispatch(countBeratAkhir({ beratTerima: e.target.value }));
              }}
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
          <Col span={12}>
            <Field
              name="keterangan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Keterangan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Keterangan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormCloseJO = reduxForm({
  form: "FormCloseJO",
  enableReinitialize: true,
})(FormCloseJO);
export default connect(maptostate, null)(FormCloseJO);
