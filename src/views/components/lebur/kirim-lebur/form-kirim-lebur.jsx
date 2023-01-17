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
    if (state.kirimlebur.asalBahan === "INPUT MANUAL") {
      return {
        initialValues: {
          asal_bahan: "INPUT MANUAL",
          jenis_bahan: "",
          no_abu: "",
          berat: "",
          kadar: "",
          karat: state.kirimlebur.karat24,
          keterangan: "1",
          keterangan_lebur: "",
        },
      };
    } else {
      if (state.kirimlebur.feedback.length !== 0) {
        return {
          initialValues: {
            asal_bahan: state.form.FormTambahKirimLebur?.values.asal_bahan,
            jenis_bahan: state.kirimlebur.feedback[0]?.jenis_bahan,
            no_abu:
              state.kirimlebur.feedback[0]?.no_abu_cor ||
              state.kirimlebur.feedback[0]?.no_abu_potong ||
              state.kirimlebur.feedback[0]?.no_abu ||
              state.kirimlebur.feedback[0]?.no_abu_tukang,
            berat: state.kirimlebur.feedback[0]?.berat,
            kadar: state.kirimlebur.feedback[0]?.kadar,
            karat: state.kirimlebur.karat24,
            keterangan: state.kirimlebur.feedback[0]?.keterangan,
            keterangan_lebur: "",
          },
        };
      } else {
        return {
          initialValues: {
            asal_bahan: state.form.FormTambahKirimLebur?.values.asal_bahan,
            jenis_bahan: state.kirimlebur.feedbackSaldoBahan[0]?.jenis_bahan,
            no_abu: "",
            berat: 0,
            kadar: 0,
            karat: 0,
            keterangan: state.kirimlebur.feedbackSaldoBahan[0]?.keterangan,
            keterangan_lebur: "",
          },
        };
      }
    }
  } else {
    return {
      initialValues: {
        asal_bahan: "ABU SISA PRODUKSI",
        jenis_bahan: "",
        no_abu: "",
        berat: "",
        kadar: "",
        karat: state.kirimlebur.karat24,
        keterangan: "",
        keterangan_lebur: "",
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
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="asal_bahan"
              label={<span style={{ fontSize: "13px" }}>Asal Bahan</span>}
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
          <Col span={12}>
            <Field
              name="keterangan"
              label={<span style={{ fontSize: "13px" }}>Keterangan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Keterangan"
              onBlur={(e) => e.preventDefault()}
              onChange={(val) => {
                if (asalbahan !== "INPUT MANUAL") {
                  dispatch(getAllSaldoBahan({ idBahan: val }));
                }
              }}
            >
              {asalbahan === "INPUT MANUAL" ? (
                <Option value="1" key="1">
                  <span style={{ fontSize: "13px" }}>1~MANUAL</span>
                </Option>
              ) : (
                dataJenisBahan.map((item) => {
                  return (
                    <Option value={item.keterangan} key={item._id}>
                      <span style={{ fontSize: "13px" }}>
                        {item.keterangan}
                      </span>
                    </Option>
                  );
                })
              )}
            </Field>
          </Col>
          <Col
            span={12}
            style={{ display: asalbahan === "INPUT MANUAL" ? "none" : "" }}
          >
            <Field
              name="no_abu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Abu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Abu"
              disabled={asalbahan === "INPUT MANUAL" ? false : true}
            />
          </Col>
          <Col span={12}>
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
          <Col span={12}>
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
          <Col span={12}>
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

          <Col
            span={12}
            style={{ display: asalbahan === "INPUT MANUAL" ? "none" : "" }}
          >
            <Field
              name="jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jenis Bahan"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="keterangan_lebur"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Keterangan Lebur</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Keterangan Lebur"
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
