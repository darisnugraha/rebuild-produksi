import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterJenisBahan from "../../../../application/selectors/masterjenisbahan";
import MasterWarna from "../../../../application/selectors/masterwarna";
import MasterKelompokJenisBahan from "../../../../application/selectors/masterkelompokjenisbahan";
import {
  addMasterJenisBahan,
  editMasterJenisBahan,
} from "../../../../application/actions/masterjenisbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.masterjenisbahan.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masterjenisbahan.dataEdit?._id,
        kode_jenis_bahan: state.masterjenisbahan.dataEdit?.kode_jenis_bahan,
        kode_kelompok: state.masterjenisbahan.dataEdit?.kode_kelompok,
        nama_jenis_bahan: state.masterjenisbahan.dataEdit?.nama_jenis_bahan,
        kode_warna: state.masterjenisbahan.dataEdit?.kode_warna,
        kadar: state.masterjenisbahan.dataEdit?.kadar,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_jenis_bahan: "",
        nama_jenis_bahan: "",
        kode_warna: state.masterwarna.feedback[0]?.kode_warna,
        kode_kelompok:
          state.masterkelompokjenisbahan.feedback[0]?.kode_kelompok,
        kadar: "",
      },
    };
  }
};

let FormTambahMasterJenisBahan = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataMasterWarna = useSelector(MasterWarna.getAllMasterWarna);
  const dataMasterKelompok = useSelector(
    MasterKelompokJenisBahan.getAllMasterKelompokJenisBahan
  );
  const isEdit = useSelector(MasterJenisBahan.getIsEditMasterJenisBahan);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterJenisBahan);
    } else {
      dispatch(addMasterJenisBahan);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Jenis Bahan" : "Tambah Master Jenis Bahan"}
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
          <Col style={{ display: "none" }}>
            <Field
              name="id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan ID"
              disabled={isEdit ? true : false}
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
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Jenis Bahan"
            />
          </Col>
          <Col span={12}>
            <Field
              name="kode_kelompok"
              label={<span style={{ fontSize: "13px" }}>Kode Kelompok</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kelompok"
              // defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMasterKelompok.map((list) => {
                return (
                  <Option value={list.kode_kelompok} key={list.kode_kelompok}>
                    <span style={{ fontSize: "13px" }}>
                      {list.nama_kelompok}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="kode_warna"
              label={<span style={{ fontSize: "13px" }}>Warna</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Warna"
              // defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMasterWarna.map((list) => {
                return (
                  <Option value={list.kode_warna} key={list.kode_warna}>
                    <span style={{ fontSize: "13px" }}>{list.nama_warna}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="kadar"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kadar</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kadar Jenis Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterJenisBahan = reduxForm({
  form: "FormTambahMasterJenisBahan",
  enableReinitialize: true,
})(FormTambahMasterJenisBahan);
export default connect(maptostate, null)(FormTambahMasterJenisBahan);
