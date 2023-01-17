import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import divisimaster from "../../../../../application/selectors/kirimbahanadmin";
import mastertukang from "../../../../../application/selectors/mastertukang";
import "antd/dist/antd.css";
import { getAllOutstandProduksi } from "../../../../../application/actions/laporanproduksi";

const { Option } = Select;

const maptostate = (state) => {
  return {
    initialValues: {
      divisi: state.kirimbahanadmin.feedback[0]?.divisi,
      tukang: state.mastertukang.feedback[0]?.nama_tukang,
    },
  };
};

let FormLaporanOutstandProduksi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataDivisi = useSelector(divisimaster.getAllDivisi);
  const dataTukang = useSelector(mastertukang.getAllMasterTukang);
  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1} span={6}>
          <Field
            showSearch
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            {dataDivisi.map((item) => {
              if (
                item.divisi === "GUDANG QC JC" ||
                item.divisi === "GUDANG QC VV"
              ) {
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
        <Col offset={1} span={6}>
          <Field
            showSearch
            name="tukang"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Tukang"
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllOutstandProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanOutstandProduksi = reduxForm({
  form: "FormLaporanOutstandProduksi",
  enableReinitialize: true,
})(FormLaporanOutstandProduksi);
export default connect(maptostate, null)(FormLaporanOutstandProduksi);
