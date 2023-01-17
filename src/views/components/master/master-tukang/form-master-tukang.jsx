import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal, Select } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterTukang from "../../../../application/selectors/mastertukang";
import {
  addMasterTukang,
  editMasterTukang,
} from "../../../../application/actions/mastertukang";
import divisimaster from "../../../../application/selectors/masterdivisi";

const maptostate = (state) => {
  if (state.mastertukang.dataEdit.length !== 0) {
    return {
      initialValues: {
        id: state.mastertukang.dataEdit?._id,
        kode_tukang: state.mastertukang.dataEdit?.kode_tukang,
        nama_tukang: state.mastertukang.dataEdit?.nama_tukang,
        no_hp: state.mastertukang.dataEdit?.no_hp,
        email: state.mastertukang.dataEdit?.email,
        divisi: state.mastertukang.dataEdit?.divisi,
      },
    };
  } else {
    return {
      initialValues: {
        id: "",
        kode_tukang: "",
        nama_tukang: "",
        no_hp: "",
        email: "",
        divisi: state.masterdivisi.feedback[0]?.divisi,
      },
    };
  }
};

const { Option } = Select;

let FormTambahMasterTukang = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEdit = useSelector(MasterTukang.getIsEditMasterTukang);
  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editMasterTukang);
    } else {
      dispatch(addMasterTukang);
    }
  };

  const dataDivisi = useSelector(divisimaster.getAllMasterDivisi);

  return (
    <Modal
      visible={visible}
      title={isEdit ? "Edit Master Tukang" : "Tambah Master Tukang"}
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
          <Col span={12} style={{ display: "none" }}>
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
              name="kode_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Tukang"
              disabled={isEdit ? true : false}
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Tukang"
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="divisi"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="no_hp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Hp</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Hp"
            />
          </Col>
          <Col span={12}>
            <Field
              name="email"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Email</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Email"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahMasterTukang = reduxForm({
  form: "FormTambahMasterTukang",
  enableReinitialize: true,
})(FormTambahMasterTukang);
export default connect(maptostate, null)(FormTambahMasterTukang);
