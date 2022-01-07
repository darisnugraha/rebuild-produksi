import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let saldoAkhirTotal = 0;
    let kadarTotal = 0;
    this.props.dataExel.map((element) => {
      return (saldoAkhirTotal =
        saldoAkhirTotal +
        parseFloat(element.saldo_awal) +
        parseFloat(element.mutasi_in) -
        parseFloat(element.mutasi_out));
    });
    this.props.dataExel.map((element) => {
      return (kadarTotal = kadarTotal + element.kadar);
    });
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN SALDO BAHAN PUSAT"
          sheet="LAPORAN SALDO BAHAN PUSAT"
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
                colSpan="7"
              >
                LAPORAN SALDO BAHAN PUSAT
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="7"
              >
                TANGGAL : {this.props.dataHead?.tgl_awal} s/d{" "}
                {this.props.dataHead?.tgl_akhir}
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
                NAMA BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO AWAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                MUTASI IN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                MUTASI OUT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO AKHIR
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
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              const saldo_akhir =
                parseFloat(item.saldo_awal) +
                parseFloat(item.mutasi_in) -
                parseFloat(item.mutasi_out);
              const karat24 = saldo_akhir * (parseFloat(item.kadar) / 100);
              return (
                <tr>
                  <td>{item.nama_bahan}</td>
                  <td style={{ textAlign: "right" }}>{item.saldo_awal}</td>
                  <td style={{ textAlign: "right" }}>{item.mutasi_in}</td>
                  <td style={{ textAlign: "right" }}>{item.mutasi_out}</td>
                  <td style={{ textAlign: "right" }}>{saldo_akhir}</td>
                  <td style={{ textAlign: "right" }}>{item.kadar}</td>
                  <td style={{ textAlign: "right" }}>{karat24}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ textAlign: "right" }}>Total :</td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.saldo_awal), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.mutasi_in), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.mutasi_out), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce(
                    (a, b) =>
                      a +
                      (parseFloat(b.saldo_awal) +
                        parseFloat(b.mutasi_in) -
                        parseFloat(b.mutasi_out)),
                    0
                  )
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.kadar), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + saldoAkhirTotal * (kadarTotal / 100), 0)
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
