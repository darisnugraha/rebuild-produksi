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
          filename="LAPORAN KARTU JOB ORDER"
          sheet="LAPORAN KARTU JOB ORDER"
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
                colSpan="8"
              >
                LAPORAN KARTU JOB ORDER
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="8"
              >
                NO JOB ORDER :{this.props.dataHead?.no_job_order}
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
                TGL KIRIM
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
              {/* <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                DIVISI TUJUAN
              </td> */}
              {/* <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TUKANG
              </td> */}
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KATEGORI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT IN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT OUT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SUSUT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                INPUT DATE
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              return (
                <tr>
                  <td>{item.tanggal}</td>
                  <td>{item.divisi}</td>
                  {/* <td>{item.divisi_tujuan}</td> */}
                  {/* <td>{item.kode_staff}</td> */}
                  <td>{item.kategori}</td>
                  <td>{item.kode_jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_in}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_out}</td>
                  <td style={{ textAlign: "right" }}>{item.susut}</td>
                  <td>{item.input_date}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Total :</td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_in), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.susut), 0)
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
