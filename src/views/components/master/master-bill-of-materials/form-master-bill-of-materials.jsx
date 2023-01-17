import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterBillOfMaterials from "../../../../application/selectors/masterbillofmaterials";
import MasterKelompokJenisBahan from "../../../../application/selectors/masterkelompokjenisbahan";
import {
  addMasterBillOfMaterials,
  editMasterBillOfMaterials,
} from "../../../../application/actions/masterbillofmaterials";
import TableDetailBahan from "./table-detail-bahan";

const maptostate = (state) => {
  if (state.masterbillofmaterials.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.masterbillofmaterials.dataEdit?._id,
        kode_kelompok: state.masterbillofmaterials.dataEdit?.kode_kelompok,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_kelompok:
          state.masterkelompokjenisbahan.feedback[0]?.kode_kelompok,
      },
    };
  }
};

const { Option } = Select;

let FormTambahBillOfMaterials = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(
    MasterBillOfMaterials.getIsEditMasterBillOfMaterials
  );
  const dataMasterKelompokJenisBahan = useSelector(
    MasterKelompokJenisBahan.getAllMasterKelompokJenisBahan
  );
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterBillOfMaterials);
    } else {
      dispatch(addMasterBillOfMaterials);
    }
  };

  return (
    <Modal
      visible={visible}
      title={
        isEdit
          ? "Edit Master Bill Of Materials"
          : "Tambah Master Bill Of Materials"
      }
      okText={isEdit ? "Simpan" : "Tambah"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
      width={"60%"}
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
              name="kode_kelompok"
              label={<span style={{ fontSize: "13px" }}>Kode Kelompok</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Kelompok"
              // defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              {dataMasterKelompokJenisBahan.map((list) => {
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
          <div className="col-lg-12">
            <div className="separator mt-3 mb-3 opacity-100"></div>
          </div>
          <div className="col-lg-12">
            <TableDetailBahan />
          </div>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahBillOfMaterials = reduxForm({
  form: "FormTambahBillOfMaterials",
  enableReinitialize: true,
})(FormTambahBillOfMaterials);
export default connect(maptostate, null)(FormTambahBillOfMaterials);
