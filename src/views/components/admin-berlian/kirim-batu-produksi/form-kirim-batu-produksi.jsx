import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import MasterBatu from "../../../../application/selectors/masterbatu";
import {
  countBeratKirimBatuProduksi,
  getBeratBatuByID,
  getJOKirimBatuByID,
} from "../../../../application/actions/kirimbatuproduksi";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimbatuproduksi.feedback !== undefined) {
    if (state.kirimbatuproduksi.dataBatu !== undefined) {
      return {
        initialValues: {
          no_job_order: state.kirimbatuproduksi.feedback[0]?.no_job_order,
          kode_barang: state.kirimbatuproduksi.feedback[0]?.kode_barang,
          kode_jenis_bahan: state.kirimbatuproduksi.feedback[0]?.kode_barang,
          kode_batu: state.kirimbatuproduksi.dataBatu[0]?.kode_batu,
          berat_pcs: state.kirimbatuproduksi.dataBatu[0]?.berat_batu,
          jumlah_kirim: state.kirimbatuproduksi.jumlahKirim,
          berat_kirim: state.kirimbatuproduksi.beratKirim,
        },
      };
    } else {
      return {
        initialValues: {
          no_job_order: state.kirimbatuproduksi.feedback[0]?.no_job_order,
          kode_barang: state.kirimbatuproduksi.feedback[0]?.kode_barang,
          kode_jenis_bahan: state.kirimbatuproduksi.feedback[0]?.kode_barang,
          kode_batu: state.masterbatu.feedback[0]?.kode_batu,
          berat_pcs: state.masterbatu.feedback[0]?.berat_batu,
          jumlah_kirim: state.kirimbatuproduksi.jumlahKirim,
          berat_kirim: state.kirimbatuproduksi.beratKirim,
        },
      };
    }
  } else {
    return {
      initialValues: {
        no_job_order: "",
        kode_barang: "",
        kode_jenis_bahan: "",
        kode_batu: state.masterbatu.feedback[0]?.kode_batu,
        berat_pcs: state.masterbatu.feedback[0]?.berat_batu,
        jumlah_kirim: state.kirimbatuproduksi.jumlahKirim,
        berat_kirim: state.kirimbatuproduksi.beratKirim,
      },
    };
  }
};

let FormTambahKirimBatuProduksi = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBatu = useSelector(MasterBatu.getAllMasterBatu);

  return (
    <Modal
      visible={visible}
      title="Tambah Kirim Batu Produksi"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              onBlur={(e) => {
                dispatch(getJOKirimBatuByID({ noJO: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jenis Bahan"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Batu"
              onBlur={(e) => e.preventDefault()}
              onChange={(kode_batu) => {
                dispatch(getBeratBatuByID({ kodeBatu: kode_batu }));
              }}
            >
              {dataBatu.map((item) => {
                return (
                  <Option value={item.kode_batu} key={item.kode_batu}>
                    <span style={{ fontSize: "13px" }}>{item.nama_batu}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_pcs"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pcs</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pcs"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jumlah Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Kirim"
              onBlur={(e) => {
                dispatch(
                  countBeratKirimBatuProduksi({ jumlah: e.target.value })
                );
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahKirimBatuProduksi = reduxForm({
  form: "FormTambahKirimBatuProduksi",
  enableReinitialize: true,
})(FormTambahKirimBatuProduksi);
export default connect(maptostate, null)(FormTambahKirimBatuProduksi);
