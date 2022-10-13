import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
// import Tukang from "../../../../application/selectors/mastertukang";
import SaldoBahan from "../../../../application/selectors/pembuatanjenisbahan";
import KirimBahanAdmin from "../../../../application/selectors/kirimbahanadmin";
import { addKirimBahanAdminBahan } from "../../../../application/actions/kirimbahanadmin";

const { Option } = Select;

const maptostate = (state) => {
  if (state.mastertukang.feedback !== undefined) {
    return {
      initialValues: {
        // divisi_tujuan: state.kirimbahanadmin.feedback[0]?.kode_divisi,
        divisi_asal: "ADMIN BAHAN",
        divisi_tujuan: "ADMIN PUSAT",
        tukang_tujuan: state.kirimbahanadmin.feedbackTukang[0]?.nama_tukang,
        nama_bahan: state.pembuatanjenisbahan.feedback[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        // divisi_tujuan: state.kirimbahanadmin.feedback[0]?.kode_divisi,
        divisi_asal: "ADMIN BAHAN",
        divisi_tujuan: "ADMIN PUSAT",
        tukang_tujuan: state.kirimbahanadmin.feedbackTukang[0]?.nama_tukang,
        nama_bahan: state.pembuatanjenisbahan.feedback[0]?.nama_bahan,
      },
    };
  }
};

let FormKirimBahanAdmin = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  // const dataTukang = useSelector(Tukang.getAllMasterTukang);
  const dataTukang = useSelector(KirimBahanAdmin.getTukangDivisi);
  const dataSaldoBahanStock = useSelector(SaldoBahan.getAllSaldoBahanStock);
  // const dataDivisi = useSelector(KirimBahanAdmin.getAllDivisi);

  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addKirimBahanAdminBahan);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          {/* <Col offset={1}>
            <Field
              name="divisi_tujuan"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.kode_divisi} key={item.kode_divisi}>
                    <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col> */}
          <Col offset={1} style={{ display: "none" }}>
            <Field
              name="divisi_asal"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Asal"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="divisi_tujuan"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Tujuan"
              disabled
            />
          </Col>

          <Col offset={1}>
            <Field
              name="tukang_tujuan"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataTukang.map((item) => {
                return (
                  <Option value={item.nama_tukang} key={item.kode_tukang}>
                    <span style={{ fontSize: "13px" }}>
                      {item.kode_tukang === item.nama_tukang
                        ? item.nama_tukang
                        : item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col offset={1}>
            <Field
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataSaldoBahanStock.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.nama_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col offset={1}>
            <Field
              name="berat"
              type="text"
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormKirimBahanAdmin = reduxForm({
  form: "FormKirimBahanAdmin",
  enableReinitialize: true,
})(FormKirimBahanAdmin);
export default connect(maptostate, null)(FormKirimBahanAdmin);
