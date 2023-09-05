import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import TerimaBahan from "../../../application/selectors/terimabahan";
import {
  getSaldoKirimBahanOpenChange,
  addTerimaBahan,
  // getBahanbyDivisiAndStaff,
  getTukangAsalByDivisi,
  getBahanByTukangTujuan,
  getBahanByTukangAsal,
} from "../../../application/actions/terimabahan";
import TerimaBahanValidate from "../../../infrastructure/validate/TerimaBahanValidate";
import getLocal from "../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = () => {};

let FormTerimaBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaffDivisi = useSelector(TerimaBahan.getTukangByDivisi);
  const dataStaffAsal = useSelector(TerimaBahan.getTukangAsal);
  const dataStaff = useSelector(TerimaBahan.getTukangDivisi);
  const dataStaffTujuan = useSelector(TerimaBahan.getTukangByDivisi);
  const dataBahan = useSelector(TerimaBahan.getBahan);
  const dataDivisi = useSelector(TerimaBahan.getAllDivisi);
  const divisi = getLocal("divisi");

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaBahan);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          {divisi === "Admin" ? (
            <Col span={12}>
              <Field
                showSearch
                name="divisi_asal"
                label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Divisi Asal"
                onBlur={(e) => e.preventDefault()}
                onChange={(e) => dispatch(getTukangAsalByDivisi(e))}
              >
                {dataDivisi.map((item) => {
                  if (item.divisi === "ADMIN PUSAT") {
                    return false;
                  } else {
                    return (
                      <Option value={item.divisi} key={item._id}>
                        <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                      </Option>
                    );
                  }
                })}
              </Field>
            </Col>
          ) : (
            <Col span={12}>
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
          )}
          <Col span={12}>
            <Field
              name="divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Tujuan"
              disabled
            />
          </Col>
          {divisi === "Admin" ? (
            <Col span={12}>
              <Field
                showSearch
                name="staff"
                label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Asal"
                onBlur={(e) => e.preventDefault()}
                // onChange={(val) => {
                //   dispatch(getBahanbyDivisiAndStaff({ staff: val }));
                // }}
              >
                {dataStaffAsal.map((item) => {
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
          ) : (
            <Col span={12}>
              <Field
                showSearch
                name="staff"
                label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Asal"
                onBlur={(e) => e.preventDefault()}
                onChange={(val) => {
                  dispatch(getBahanByTukangAsal({ staff: val }));
                }}
              >
                {dataStaffDivisi.map((item) => {
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
          )}
          {divisi === "Admin" ? (
            <Col span={12}>
              <Field
                showSearch
                name="staff_tujuan"
                label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Tujuan"
                onBlur={(e) => e.preventDefault()}
                onChange={(val) => {
                  dispatch(getBahanByTukangTujuan({ staff: val }));
                }}
              >
                {dataStaffTujuan.map((item) => {
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
          ) : (
            <Col span={12}>
              <Field
                showSearch
                name="staff_tujuan"
                label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Tujuan"
                onBlur={(e) => e.preventDefault()}
                onChange={(val) => {
                  dispatch(getBahanByTukangTujuan({ staff: val }));
                }}
              >
                {dataStaff.map((item) => {
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
          )}
          <Col span={12}>
            <Field
              showSearch
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getSaldoKirimBahanOpenChange({ namaBahan: e }))
              }
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col span={12}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaBahan = reduxForm({
  form: "FormTerimaBahan",
  enableReinitialize: true,
  validate: TerimaBahanValidate,
})(FormTerimaBahan);
export default connect(maptostate, null)(FormTerimaBahan);
