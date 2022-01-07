import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN SETOR ABU TUKANG"
          sheet="LAPORAN SETOR ABU TUKANG"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="5"
              >
                LAPORAN SETOR ABU TUKANG
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="5"
              >
                TANGGAL{" "}
                {this.props.dataHead?.tgl_awal +
                  " s/d " +
                  this.props.dataHead?.tgl_akhir}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NO SPK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                DIVISI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TUKANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BAHAN KEMBALI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT KEMBALI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SUSUT BRUTO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KADAR KEMBALI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                24K KEMBALI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SUSUT 24K
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                POHON
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              return (
                <>
                  <tr>
                    <td>{element.tanggal}</td>
                    <td>{element.no_job_order}</td>
                    <td>{element.nama_divisi}</td>
                    <td>{element.kode_staff}</td>
                    <td>{element.bahan_kembali}</td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.berat_kembali)
                        ? element.berat_kembali
                        : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.susut_bruto)
                        ? element.susut_bruto
                        : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.kadar_kembali)
                        ? element.kadar_kembali
                        : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.kembali_24) ? element.kembali_24 : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.susut_24) ? element.susut_24 : 0}
                    </td>
                    <td style={{ textAlign: "left" }}>{element.pohon}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} style={{ textAlign: "right" }}>
                Grand Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.berat_kembali) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.susut_bruto) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.kadar_kembali) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.kembali_24) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.susut_24) || 0), 0)
                  .toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
