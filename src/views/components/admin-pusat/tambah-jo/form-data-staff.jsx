import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import DataStaff from "../../../../application/selectors/mastertukang";
import DataBahan from "../../../../application/selectors/masterbahan";
import TambahJobOrder from "../../../../application/selectors/tambahjoborder";
import {
  getDataByPohon,
  setTukang,
  setTypePohonManual,
} from "../../../../application/actions/tambahjoborder";
import getLocal from "../../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  const beratAwal = getLocal("berat_awal");
  const dataStaff = getLocal("data_staff");
  if (dataStaff !== null) {
    return {
      initialValues: {
        staff: dataStaff[0].staff,
        nama_bahan: dataStaff[0].nama_bahan,
        berat_awal: parseFloat(dataStaff[0].berat_awal),
        no_buat: dataStaff[0].no_buat,
        pohon_manual: dataStaff[0].pohon_manual,
      },
    };
  } else {
    if (state.tambahjoborder.dataPohon !== undefined) {
      if (state.tambahjoborder.tukang !== undefined) {
        return {
          initialValues: {
            staff: state.tambahjoborder.tukang,
            nama_bahan: state.tambahjoborder.dataPohon?.nama_bahan,
            berat_awal:
              beratAwal !== null
                ? beratAwal
                : state.tambahjoborder.dataPohon?.berat_sisa,
            pohon_manual: state.tambahjoborder.pohonManual,
            no_buat: state.tambahjoborder.noPohon,
          },
        };
      } else {
        return {
          initialValues: {
            staff: state.mastertukang.feedback[0]?.nama_tukang,
            nama_bahan: state.tambahjoborder.dataPohon?.nama_bahan,
            berat_awal:
              beratAwal !== null
                ? beratAwal
                : state.tambahjoborder.dataPohon?.berat_sisa,
            pohon_manual: state.tambahjoborder.pohonManual,
            no_buat: state.tambahjoborder.noPohon,
          },
        };
      }
    } else {
      if (state.tambahjoborder.tukang !== undefined) {
        return {
          initialValues: {
            staff: state.tambahjoborder.tukang,
            nama_bahan: state.masterbahan.feedback[0]?.nama_bahan,
            berat_awal: 0,
            pohon_manual: state.tambahjoborder.pohonManual,
            no_buat: state.tambahjoborder.noPohon,
          },
        };
      } else {
        return {
          initialValues: {
            staff: state.mastertukang.feedback[0]?.nama_tukang,
            nama_bahan: state.masterbahan.feedback[0]?.nama_bahan,
            berat_awal: 0,
            pohon_manual: state.tambahjoborder.pohonManual,
            no_buat: state.tambahjoborder.noPohon,
          },
        };
      }
    }
  }
};

let FormDataStaff = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaff = useSelector(DataStaff.getAllMasterTukang);
  const dataBahan = useSelector(DataBahan.getAllMasterBahan);
  // const data = useSelector(TambahJobOrder.getDataPohon);
  // const dataBahanPohon = data?.detail_bahan;
  const typePohon = useSelector(TambahJobOrder.getTypePohonManual);

  return (
    <Modal
      visible={visible}
      title="Data Staff"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Field
              label="Pohon Manual"
              name="pohon_manual"
              id="pohon_manual"
              component={styleAntd.ACheckBox}
              type="checkbox"
              onChange={(e) => {
                dispatch(setTypePohonManual(e.target.checked));
              }}
            />
          </Col>
          <Col span={18}>
            <Field
              showSearch
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Kode Staff</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Staff"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(setTukang(e))}
            >
              {dataStaff.map((item) => {
                return (
                  <Option value={item.nama_tukang} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="no_buat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Pohon"
              disabled={
                typePohon
                  ? true
                  : localStorage.getItem("berat_awal")
                  ? true
                  : false
              }
              onChange={(e) => {
                dispatch(getDataByPohon({ pohon: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan Kembali</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan Kembali"
              onBlur={(e) => e.preventDefault()}
              // disabled={data !== undefined ? true : false}
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
              {/* {data !== undefined
                ? dataBahanPohon.map((item) => {
                    return (
                      <Option value={item.nama_bahan} key={item._id}>
                        <span style={{ fontSize: "13px" }}>
                          {item.nama_bahan}
                        </span>
                      </Option>
                    );
                  })
                : dataBahan.map((item) => {
                    return (
                      <Option value={item.nama_bahan} key={item._id}>
                        <span style={{ fontSize: "13px" }}>
                          {item.nama_bahan}
                        </span>
                      </Option>
                    );
                  })} */}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="berat_awal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Awal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Awal"
              disabled={!typePohon}
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDataStaff = reduxForm({
  form: "FormDataStaff",
  enableReinitialize: true,
})(FormDataStaff);
export default connect(maptostate, null)(FormDataStaff);
