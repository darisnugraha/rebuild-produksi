import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimLebur from "../../../../application/selectors/kirimlebur";
import {
  getAllSaldoBahan,
  getAllSaldoBahanOpen,
} from "../../../../application/actions/kirimlebur";
// import {
//   countBeratKirimBatuProduksi,
//   getBeratBatuByID,
//   getJOKirimBatuByID,
// } from "../../../../application/actions/kirimbatuproduksi";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormTambahKirimLebur?.values !== undefined) {
    if (state.kirimlebur.feedback[0] !== undefined) {
      return {
        initialValues: {
          asal_bahan: state.form.FormTambahKirimLebur?.values.asal_bahan,
          id: state.kirimlebur.feedback[0]?.id,
          berat: state.kirimlebur.feedback[0]?.berat,
          kadar: state.kirimlebur.feedback[0]?.kadar,
          karat: state.kirimlebur.karat24,
          keterangan: "",
        },
      };
    }
    if (state.kirimlebur.asalBahan === "INPUT MANUAL") {
      return {
        initialValues: {
          asal_bahan: "INPUT MANUAL",
          id: "1",
          berat: "",
          kadar: "",
          karat: state.kirimlebur.karat24,
          keterangan: "",
        },
      };
    }
    return {
      initialValues: {
        asal_bahan: state.form.FormTambahKirimLebur?.values.asal_bahan,
        id: state.kirimlebur.feedbackSaldoBahan[0]?.id,
        berat: state.kirimlebur.feedbackSaldoBahan[0]?.berat,
        kadar: state.kirimlebur.feedbackSaldoBahan[0]?.kadar,
        karat: state.kirimlebur.karat24,
        keterangan: "",
      },
    };
  } else {
    return {
      initialValues: {
        asal_bahan: "ABU SISA PRODUKSI",
        id: "",
        berat: "",
        kadar: "",
        karat: state.kirimlebur.karat24,
        keterangan: "",
      },
    };
  }
};

let FormTambahKirimLebur = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataJenisBahan = useSelector(KirimLebur.getAllSaldoBahanOpen);
  const asalbahan = useSelector(KirimLebur.getAsalBahanKirimLebur);

  return (
    <Modal
      visible={visible}
      title="Tambah Kirim Lebur"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="asal_bahan"
              label={<span style={{ fontSize: "13px" }}>Asal Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Asal Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(val) => {
                dispatch(getAllSaldoBahanOpen({ asalBahan: val }));
              }}
            >
              <Option value="ABU SISA PRODUKSI" key="ABU SISA PRODUKSI">
                <span style={{ fontSize: "13px" }}>ABU SISA PRODUKSI</span>
              </Option>
              <Option value="ABU SISA COR" key="ABU SISA COR">
                <span style={{ fontSize: "13px" }}>ABU SISA COR</span>
              </Option>
              <Option value="ABU SISA POTONG" key="ABU SISA POTONG">
                <span style={{ fontSize: "13px" }}>ABU SISA POTONG</span>
              </Option>
              <Option value="INPUT MANUAL" key="INPUT MANUAL">
                <span style={{ fontSize: "13px" }}>INPUT MANUAL</span>
              </Option>
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="id"
              label={<span style={{ fontSize: "13px" }}>Jenis Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Jenis Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(val) => {
                dispatch(getAllSaldoBahan({ idBahan: val }));
              }}
            >
              {asalbahan === "INPUT MANUAL" ? (
                <Option value="1" key="1">
                  <span style={{ fontSize: "13px" }}>1~MANUAL</span>
                </Option>
              ) : (
                dataJenisBahan.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      <span style={{ fontSize: "13px" }}>
                        {item.id + "~" + item.jenis_bahan}
                      </span>
                    </Option>
                  );
                })
              )}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
              disabled={asalbahan === "INPUT MANUAL" ? false : true}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kadar"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kadar</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kadar"
              disabled={asalbahan === "INPUT MANUAL" ? false : true}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="karat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>24K</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan 24K"
              disabled={asalbahan === "INPUT MANUAL" ? false : true}
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

FormTambahKirimLebur = reduxForm({
  form: "FormTambahKirimLebur",
  enableReinitialize: true,
})(FormTambahKirimLebur);
export default connect(maptostate, null)(FormTambahKirimLebur);
