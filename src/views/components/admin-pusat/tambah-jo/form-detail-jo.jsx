import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import DataMarketing from "../../../../application/selectors/mastermarketing";
import DataCustomer from "../../../../application/selectors/mastercustomer";
import DataBarang from "../../../../application/selectors/masteroriginal";
import DataJenisBahan from "../../../../application/selectors/masterjenisbahan";
import DataStatus from "../../../../application/selectors/masterstatus";
import {
  countBeratBalik,
  setJumlahBarang,
  setKodeBarang,
  setKodeCustomer,
  setKodeJenisBahan,
  setKodeMarketing,
  setKodeStatusJO,
  setNamaBarang,
  setSPK,
} from "../../../../application/actions/tambahjoborder";
import getLocal from "../../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  const beratAwal = getLocal("berat_awal");
  const dataStaff = getLocal("data_staff");
  if (dataStaff !== null && dataStaff[0].pohon_manual) {
    return {
      initialValues: {
        marketing:
          state.tambahjoborder.kodeMarketing !== undefined
            ? state.tambahjoborder.kodeMarketing
            : state.mastermarketing.feedback[0]?.kode_marketing,
        customer:
          state.tambahjoborder.kodeCustomer !== undefined
            ? state.tambahjoborder.kodeCustomer
            : `${state.mastercustomer.feedback[0]?.kode_customer}|${state.mastercustomer.feedback[0]?.nama_customer}`,
        kode_barang:
          state.tambahjoborder.kodeBarang !== undefined
            ? state.tambahjoborder.kodeBarang
            : state.masteroriginal.feedback[0]?.kode_barang,
        kode_jenis_bahan:
          state.tambahjoborder.kodeJenisBahan !== undefined
            ? state.tambahjoborder.kodeJenisBahan
            : state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
        kode_status_job_order:
          state.tambahjoborder.kodeStatusJO !== undefined
            ? state.tambahjoborder.kodeStatusJO
            : state.masterstatus.feedback[0]?.kode_status_job_order,
        berat_potong: beratAwal,
        berat: state.tambahjoborder.beratBahan,
        berat_balik: state.tambahjoborder.beratBalik.toFixed(3),
        no_job_order:
          state.tambahjoborder.spk !== undefined
            ? state.tambahjoborder.spk
            : "",
        nama_barang:
          state.tambahjoborder.namaBarang !== undefined
            ? state.tambahjoborder.namaBarang
            : "",
        jumlah: state.tambahjoborder.jumlahBarang,
      },
    };
  } else {
    if (state.tambahjoborder.dataPohon !== undefined) {
      return {
        initialValues: {
          marketing:
            state.tambahjoborder.kodeMarketing !== undefined
              ? state.tambahjoborder.kodeMarketing
              : state.mastermarketing.feedback[0]?.kode_marketing,
          customer:
            state.tambahjoborder.kodeCustomer !== undefined
              ? state.tambahjoborder.kodeCustomer
              : `${state.mastercustomer.feedback[0]?.kode_customer}|${state.mastercustomer.feedback[0]?.nama_customer}`,
          kode_barang:
            state.tambahjoborder.kodeBarang !== undefined
              ? state.tambahjoborder.kodeBarang
              : state.masteroriginal.feedback[0]?.kode_barang,
          kode_jenis_bahan: state.tambahjoborder.dataPohon.kode_jenis_bahan,
          kode_status_job_order:
            state.tambahjoborder.kodeStatusJO !== undefined
              ? state.tambahjoborder.kodeStatusJO
              : state.masterstatus.feedback[0]?.kode_status_job_order,
          berat_potong: beratAwal,
          berat: state.tambahjoborder.beratBahan,
          berat_balik: state.tambahjoborder.beratBalik.toFixed(3),
          no_job_order:
            state.tambahjoborder.spk !== undefined
              ? state.tambahjoborder.spk
              : "",
          nama_barang:
            state.tambahjoborder.namaBarang !== undefined
              ? state.tambahjoborder.namaBarang
              : "",
          jumlah: state.tambahjoborder.jumlahBarang,
        },
      };
    } else {
      return {
        initialValues: {
          kode_marketing: state.mastermarketing.feedback[0]?.kode_marketing,
          kode_customer: `${state.mastercustomer.feedback[0]?.kode_customer}|${state.mastercustomer.feedback[0]?.nama_customer}`,
          kode_barang: state.masteroriginal.feedback[0]?.kode_barang,
          kode_jenis_bahan:
            state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
          kode_status_job_order:
            state.masterstatus.feedback[0]?.kode_status_job_order,
          berat_potong: 0,
          berat: state.tambahjoborder.beratBahan,
          berat_balik: state.tambahjoborder.beratBalik.toFixed(3),
        },
      };
    }
  }
};

let FormDetailJobOrder = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataMarketing = useSelector(DataMarketing.getAllMasterMarketing);
  const dataCustomer = useSelector(DataCustomer.getAllMasterCustomer);
  const dataBarang = useSelector(DataBarang.getAllMasterOriginal);
  const dataJenisBahan = useSelector(DataJenisBahan.getAllMasterJenisBahan);
  const dataStatus = useSelector(DataStatus.getAllMasterStatus);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Tab") {
  //     // Prevent the default tab behavior to allow selection
  //     event.preventDefault();
  //     const customerfind = dataCustomer.find(
  //       (elemant) => elemant.nama_customer === event.target.value?.toUpperCase()
  //     );

  //     dispatch(
  //       setKodeCustomer(
  //         `${customerfind?.nama_customer}|${customerfind?.kode_customer}`
  //       )
  //     );
  //   }
  // };

  return (
    <Modal
      visible={visible}
      title="Detail Bahan"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
      width={1000}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              showSearch
              name="marketing"
              label={<span style={{ fontSize: "13px" }}>Kode Marketing</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Marketing"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setKodeMarketing(e))}
            >
              {dataMarketing.map((item) => {
                return (
                  <Option
                    value={`${item.nama_marketing}|${item.kode_marketing}`}
                    key={item.kode_marketing}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_marketing}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="customer"
              label={<span style={{ fontSize: "13px" }}>Kode Customer</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Customer"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setKodeCustomer(e))}
              // onKeyDown={handleKeyDown}
            >
              {dataCustomer.map((item) => {
                return (
                  <Option
                    value={`${item.nama_customer}|${item.kode_customer}`}
                    key={item.kode_customer}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_customer}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No SPK</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No SPK"
              onChange={(e) => dispatch(setSPK(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="kode_barang"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Barang"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setKodeBarang(e))}
            >
              {dataBarang.map((item) => {
                return (
                  <Option value={item.kode_barang} key={item.kode_barang}>
                    <span style={{ fontSize: "13px" }}>{item.nama_barang}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="nama_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
              onChange={(e) => dispatch(setNamaBarang(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="kode_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setKodeJenisBahan(e))}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan +
                        " (" +
                        item.kode_jenis_bahan +
                        ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="kode_status_job_order"
              label={
                <span style={{ fontSize: "13px" }}>Kode Status Job Order</span>
              }
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Status Job Order"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setKodeStatusJO(e))}
            >
              {dataStatus.map((item) => {
                return (
                  <Option
                    value={item.kode_status_job_order}
                    key={item.kode_status_job_order}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_status_job_order +
                        " (" +
                        item.kode_status_job_order +
                        ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="jumlah"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Jumlah</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Bahan"
              onChange={(e) => dispatch(setJumlahBarang(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_potong"
              type="text"
              label={
                <span style={{ fontSize: "13px" }}>Berat Terima Potong</span>
              }
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Terima Potong"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
              onChange={(e) => dispatch(countBeratBalik(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_balik"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Balik</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Balik"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="catatan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Catatan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Tulis Catatan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailJobOrder = reduxForm({
  form: "FormDetailJobOrder",
  enableReinitialize: true,
})(FormDetailJobOrder);
export default connect(maptostate, null)(FormDetailJobOrder);
