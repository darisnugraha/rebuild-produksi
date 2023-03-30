import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import mastertukang from "../../../../../application/selectors/mastertukang";
import kelompokbahan from "../../../../../application/selectors/groupbahan";
import divisi from "../../../../../application/selectors/kirimbahanadmin";
import "antd/dist/antd.css";
import {
  getAllLaporanSaldoBahanPusat,
  setDivisiByTukang,
} from "../../../../../application/actions/laporansaldobahanpusat";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  return {
    initialValues: {
      date: [moment(today, dateFormat), moment(today, dateFormat)],
      tukang: state.mastertukang.feedback[0]?.kode_tukang,
      namaTukang: state.mastertukang.feedback[0]?.nama_tukang,
      bahan: state.groupbahan.feedback[0]?.nama_bahan,
      // divisi:
      //   state.kirimbahanadmin.feedback[0]?.divisi === "ADMIN BAHAN"
      //     ? state.kirimbahanadmin.feedback[1]?.divisi
      //     : state.kirimbahanadmin.feedback[0]?.divisi,
    },
  };
};

let FormLaporanSaldoBahanPusat = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMasterTukang = useSelector(mastertukang.getAllMasterTukang);
  const dataKelompokBahan = useSelector(kelompokbahan.getAllGroupBahan);
  const dataDivisi = useSelector(divisi.getAllDivisi);
  useEffect(() => {
    dispatch(setDivisiByTukang({ tukang: dataMasterTukang[0]?.kode_tukang }));
  }, [dispatch, dataMasterTukang]);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
          />
        </Col>
        <Col offset={1} span={6}>
          <Field
            showSearch
            name="tukang"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Tukang"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(setDivisiByTukang({ tukang: e }))}
          >
            {dataMasterTukang.map((item) => {
              if (item.nama_tukang !== "ADMIN BAHAN") {
                return (
                  <Option value={item.kode_tukang} key={item.kode_tukang}>
                    <span style={{ fontSize: "13px" }}>
                      {item.kode_tukang === item.nama_tukang
                        ? item.nama_tukang
                        : item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              } else {
                return false;
              }
            })}
          </Field>
        </Col>
        <Col style={{ display: "none" }}>
          <Field
            name="namaTukang"
            type="text"
            label={<span style={{ fontSize: "13px" }}>Nama Tukang</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Nama Tukang"
          />
        </Col>
        <Col offset={1} span={6}>
          <Field
            showSearch
            name="bahan"
            label={<span style={{ fontSize: "13px" }}>Kelompok Bahan</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Kelompok Bahan"
            onBlur={(e) => e.preventDefault()}
          >
            {dataKelompokBahan.map((item) => {
              return (
                <Option value={item.nama_bahan} key={item.nama_bahan}>
                  <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col span={6}>
          <Field
            showSearch
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            {dataDivisi.map((item) => {
              if (item.divisi === "ADMIN BAHAN") {
                return false;
              } else {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              }
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanSaldoBahanPusat)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoBahanPusat = reduxForm({
  form: "FormLaporanSaldoBahanPusat",
  enableReinitialize: true,
})(FormLaporanSaldoBahanPusat);
export default connect(maptostate, null)(FormLaporanSaldoBahanPusat);
