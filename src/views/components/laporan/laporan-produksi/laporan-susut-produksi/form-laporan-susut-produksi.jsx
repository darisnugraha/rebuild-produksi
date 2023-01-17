import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import laporanproduksi from "../../../../../application/selectors/laporanproduksi";
import "antd/dist/antd.css";
import {
  getDataSusut,
  getPeriodeByTukang,
  getTanggal,
  getTukangByDivisi,
} from "../../../../../application/actions/laporanproduksi";
import { useDispatch } from "react-redux";

const { Option } = Select;

const maptostate = (state) => {
  return {
    initialValues: {
      // date: [moment(today, dateFormat), moment(today, dateFormat)],
      date: state.laporanproduksi.tanggal,
      divisi:
        state.laporanproduksi.divisi !== null
          ? state.laporanproduksi.divisi
          : state.laporanproduksi.dataDivisi[0]?.divisi,
      tukang: state.laporanproduksi.dataTukangByDivisi[0]?.nama_tukang,
      periode:
        state.laporanproduksi.periode !== null
          ? state.laporanproduksi.periode
          : state.laporanproduksi.dataPeriode[0]?._id,
    },
  };
};

let FormLaporanSusutProduksi = (prop) => {
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataDivisi = useSelector(laporanproduksi.getDivisiAll);
  const dataTukang = useSelector(laporanproduksi.getDataTukangByDivisi);
  const dataPeriode = useSelector(laporanproduksi.getDataPeriode);
  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1} span={4}>
          <Field
            showSearch
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(getTukangByDivisi(e))}
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
        <Col offset={1} span={4}>
          <Field
            showSearch
            name="tukang"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Tukang"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(getPeriodeByTukang(e))}
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
        <Col offset={1} span={4}>
          <Field
            showSearch
            name="periode"
            label={<span style={{ fontSize: "13px" }}>Periode</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Periode"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(getTanggal(e))}
          >
            {dataPeriode.map((item) => {
              return (
                <Option value={item._id} key={item._id}>
                  <span style={{ fontSize: "13px" }}>
                    {item.tanggal_awal_periode +
                      " s/d " +
                      item.tanggal_akhir_periode}
                  </span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1} style={{ display: "none" }}>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getDataSusut)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSusutProduksi = reduxForm({
  form: "FormLaporanSusutProduksi",
  enableReinitialize: true,
})(FormLaporanSusutProduksi);
export default connect(maptostate, null)(FormLaporanSusutProduksi);
