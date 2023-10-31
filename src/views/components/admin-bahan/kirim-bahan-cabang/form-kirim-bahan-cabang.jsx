import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
// import Tukang from "../../../../application/selectors/mastertukang";
import SaldoBahan from "../../../../application/selectors/pembuatanjenisbahan";
import KirimBahanCabang from "../../../../application/selectors/kirimbahancabang";
import { addKirimBahanAdminBahan } from "../../../../application/actions/kirimbahancabang";

const { Option } = Select;

const maptostate = (state) => {
  if (state.mastertukang.feedback !== undefined) {
    return {
      initialValues: {
        // cabang_tujuan: state.kirimbahancabang.feedback[0]?.kode_divisi,
        divisi_asal: "ADMIN BAHAN",
        nama_bahan: state.pembuatanjenisbahan.feedback[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        // cabang_tujuan: state.kirimbahancabang.feedback[0]?.kode_divisi,
        divisi_asal: "ADMIN BAHAN",
        nama_bahan: state.pembuatanjenisbahan.feedback[0]?.nama_bahan,
      },
    };
  }
};

let FormKirimBahanCabang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataSaldoBahanStock = useSelector(SaldoBahan.getAllSaldoBahanStock);
  const dataCabang = useSelector(KirimBahanCabang.getAllCAbang);

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
        <Row gutter={[8, 8]}>
          <Col style={{ display: "none" }}>
            <Field
              name="divisi_asal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Asal"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="cabang_tujuan"
              label={<span style={{ fontSize: "13px" }}>Cabang Tujuan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Cabang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataCabang.map((item) => {
                return (
                  <Option
                    value={`${item.kode_toko}|${item.portal}`}
                    key={item._id}
                  >
                    <span style={{ fontSize: "13px" }}>{item.nama_toko}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col span={12}>
            <Field
              showSearch
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
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

          <Col span={12}>
            <Field
              name="berat"
              type="text"
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

FormKirimBahanCabang = reduxForm({
  form: "FormKirimBahanCabang",
  enableReinitialize: true,
})(FormKirimBahanCabang);
export default connect(maptostate, null)(FormKirimBahanCabang);
