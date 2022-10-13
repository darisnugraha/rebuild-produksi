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
          filename={`LAPORAN OUTSTAND PRODUKSI (${this.props.dataHead?.divisi})`}
          sheet={`LAPORAN OUTSTAND PRODUKSI (${this.props.dataHead?.divisi})`}
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
                LAPORAN OUTSTAND PRODUKSI ({this.props.dataHead?.divisi})
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
                KODE STAFF : {this.props.dataHead?.kode_staff}
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
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA CUSTOMER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JUMLAH
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KADAR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                24K
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TANGGAL OUTSTAND
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA TUKANG
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              return (
                <>
                  <tr>
                    <td>{element.no_job_order}</td>
                    <td>{element.nama_customer}</td>
                    <td>{element.kode_barang}</td>
                    <td>{element.kode_jenis_bahan}</td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.stock_akhir)
                        ? element.stock_akhir
                        : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.berat_akhir)
                        ? element.berat_akhir
                        : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(element.kadar) ? element.kadar : 0}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {(
                        (parseFloat(element.berat_akhir) || 0) *
                        ((parseFloat(element.kadar) || 0) / 100)
                      ).toFixed(3)}
                    </td>
                    <td>{element.update_date}</td>
                    <td>{element.kode_tukang}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{ textAlign: "right" }}>
                Grand Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + (parseFloat(b.stock_akhir) || 0),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.berat_akhir) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + (parseFloat(b.kadar) || 0), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce(
                    (a, b) =>
                      a +
                      (parseFloat(b.berat_akhir) || 0) *
                        ((parseFloat(b.kadar) || 0) / 100),
                    0
                  )
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
