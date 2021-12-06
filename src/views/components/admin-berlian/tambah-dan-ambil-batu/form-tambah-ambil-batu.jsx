import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TambahAmbilBatu from "../../../../application/selectors/tambahambilbatu";
import { countBeratTambahAmbilBatu } from "../../../../application/actions/tambahambilbatu";

const maptostate = (state) => {
  if (state.tambahambilbatu.dataBatu !== undefined) {
    return {
      initialValues: {
        kode_batu: state.tambahambilbatu.dataBatu[0]?.kode_batu,
        nama_batu: state.tambahambilbatu.dataBatu[0]?.nama_batu,
        berat_batu: state.tambahambilbatu.dataBatu[0]?.berat_batu,
        jumlah_tambah_ambil: state.tambahambilbatu.jumlah,
        berat_tambah_ambil: state.tambahambilbatu.beratTambahAmbilBatu,
        keterangan: "",
      },
    };
  } else {
    return {
      initialValues: {
        kode_batu: "",
        nama_batu: "",
        berat_batu: "",
        jumlah_tambah_ambil: state.tambahambilbatu.jumlah,
        berat_tambah_ambil: state.tambahambilbatu.beratTambahAmbilBatu,
        keterangan: "",
      },
    };
  }
};

let FormTambahAmbilBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isAdd = useSelector(TambahAmbilBatu.getIsAddTambahAmbilBatu);

  return (
    <Modal
      visible={visible}
      title={isAdd ? "Tambah Saldo Batu" : "Ambil Saldo Batu"}
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="kode_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Batu"
              disabled
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
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Batu"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah_tambah_ambil"
              type="number"
              label={
                <span style={{ fontSize: "13px" }}>
                  Jumlah {isAdd ? "Tambah" : "Ambil"}
                </span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder={
                isAdd ? "Masukkan Jumlah Tambah" : "Masukkan Jumlah Ambil"
              }
              onBlur={(e) => {
                e.preventDefault();
                dispatch(countBeratTambahAmbilBatu({ jumlah: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_tambah_ambil"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat"
              disabled
            />
          </Col>
          <Col offset={1}>
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

FormTambahAmbilBatu = reduxForm({
  form: "FormTambahAmbilBatu",
  enableReinitialize: true,
})(FormTambahAmbilBatu);
export default connect(maptostate, null)(FormTambahAmbilBatu);
