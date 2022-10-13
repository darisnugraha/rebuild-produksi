import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterBatu from "../../../../application/selectors/masterbatu";
import MasterJenisBatu from "../../../../application/selectors/masterjenisbatu";
import MasterCuttingBatu from "../../../../application/selectors/mastercuttingbatu";
import {
  addMasterBatu,
  editMasterBatu,
} from "../../../../application/actions/masterbatu";

const { Option } = Select;

const maptostate = (state) => {
  if (state.masterbatu.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masterbatu.dataEdit?._id,
        kode_batu: state.masterbatu.dataEdit?.kode_batu,
        nama_batu: state.masterbatu.dataEdit?.nama_batu,
        ukuran: state.masterbatu.dataEdit?.ukuran,
        kode_jenis_batu: state.masterbatu.dataEdit?.kode_jenis_batu,
        kode_cutting_batu: state.masterbatu.dataEdit?.kode_cutting_batu,
        // berat_batu: state.masterbatu.dataEdit?.berat_batu,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_batu: "",
        nama_batu: "",
        ukuran: "",
        kode_jenis_batu: state.masterjenisbatu.feedback[0]?.kode_jenis_batu,
        kode_cutting_batu:
          state.mastercuttingbatu.feedback[0]?.kode_cutting_batu,
        // berat_batu: "",
      },
    };
  }
};

let FormTambahMasterBatu = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterBatu.getIsEditMasterBatu);
  const dataMasterJenisBatu = useSelector(
    MasterJenisBatu.getAllMasterJenisBatu
  );
  const dataMasterCuttingBatu = useSelector(
    MasterCuttingBatu.getAllMasterCuttingBatu
  );
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterBatu);
    } else {
      dispatch(addMasterBatu);
    }
  };

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Batu" : "Tambah Master Batu"}
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1} style={{ display: "none" }}>
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
          <Col offset={1}>
            <Field
              name="kode_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Batu"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="ukuran"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Ukuran</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Ukuran Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis batu</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Batu"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMasterJenisBatu.map((list) => {
                return (
                  <Option
                    value={list.kode_jenis_batu}
                    key={list.kode_jenis_batu}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {list.nama_jenis_batu}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="kode_cutting_batu"
              label={
                <span style={{ fontSize: "13px" }}>Kode Cutting Batu</span>
              }
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Cutting Batu"
              // defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMasterCuttingBatu.map((list) => {
                return (
                  <Option
                    value={list.kode_cutting_batu}
                    key={list.kode_cutting_batu}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {list.nama_cutting_batu}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1} style={{ display: "none" }}>
            <Field
              name="berat_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterBatu = reduxForm({
  form: "FormTambahMasterBatu",
  enableReinitialize: true,
})(FormTambahMasterBatu);
export default connect(maptostate, null)(FormTambahMasterBatu);
