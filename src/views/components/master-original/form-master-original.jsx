import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import MasterOriginal from "../../../application/selectors/masteroriginal";
import {
  addMasterOriginal,
  editMasterOriginal,
} from "../../../application/actions/masteroriginal";
import DataJenisBahan from "../../../application/selectors/masterjenisbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.masteroriginal.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masteroriginal.dataEdit?._id,
        kode_barang: state.masteroriginal.dataEdit?.kode_barang,
        nama_barang: state.masteroriginal.dataEdit?.nama_barang,
        kode_jenis: state.masteroriginal.dataEdit?.kode_jenis,
        kode_design: state.masteroriginal.dataEdit?.kode_design || "-",
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_barang: "",
        nama_barang: "",
        kode_jenis: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
        kode_design: "-",
      },
    };
  }
};

let FormTambahMasterOriginal = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterOriginal.getIsEditMasterOriginal);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterOriginal);
    } else {
      dispatch(addMasterOriginal);
    }
  };

  const dataJenisBahan = useSelector(DataJenisBahan.getAllMasterJenisBahan);

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Original" : "Tambah Master Original"}
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col offset={12} style={{ display: "none" }}>
            <Field
              name="id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan ID"
            />
          </Col>
          <Col offset={12}>
            <Field
              name="kode_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={12}>
            <Field
              name="nama_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
            />
          </Col>
          <Col offset={12}>
            <Field
              name="kode_jenis"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis"
              onBlur={(e) => e.preventDefault()}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan +
                        " (" +
                        item.kode_jenis_bahan +
                        ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={12} style={{ display: "none" }}>
            <Field
              name="kode_design"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Design</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Design"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterOriginal = reduxForm({
  form: "FormTambahMasterOriginal",
  enableReinitialize: true,
})(FormTambahMasterOriginal);
export default connect(maptostate, null)(FormTambahMasterOriginal);
