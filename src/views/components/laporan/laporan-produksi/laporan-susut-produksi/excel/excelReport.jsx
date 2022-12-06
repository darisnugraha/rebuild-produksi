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
          filename={`LAPORAN SUSUT PRODUKSI (${this.props.dataHead?.divisi})`}
          sheet={`LAPORAN SUSUT PRODUKSI (${this.props.dataHead?.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                colSpan="6"
              >
                LAPORAN SUSUT PRODUKSI ({this.props.dataHead?.divisi})
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                colSpan="6"
              >
                PERIODE :{" "}
                {this.props.dataHead?.startDate +
                  " s/d " +
                  this.props.dataHead?.endDate}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#99CCFF",
                }}
                colSpan="6"
              >
                TAMBAH BAHAN
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                JENIS EMAS
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                KETERANGAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                BERAT KOTOR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                %
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                BERAT MURNI
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel[0]?.tambah_bahan.map((element) => {
              return (
                <>
                  <tr>
                    <td>{element.tanggal}</td>
                    <td>{element.jenis_bahan}</td>
                    <td>{element.keterangan.toUpperCase()}</td>
                    <td style={{ textAlign: "right" }}>
                      {element.berat_kotor}
                    </td>
                    <td style={{ textAlign: "right" }}>{element.kadar}</td>
                    <td style={{ textAlign: "right" }}>
                      {element.berat_murni}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} style={{ textAlign: "right" }}>
                Grand Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel[0]?.tambah_bahan
                  .reduce((a, b) => a + parseFloat(b.berat_kotor), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}></td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel[0]?.tambah_bahan
                  .reduce((a, b) => a + parseFloat(b.berat_murni), 0)
                  .toFixed(3)}
              </td>
            </tr>
          </tfoot>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          {/* Balik Bahan */}
          <tr>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                backgroundColor: "#99CCFF",
                fontWeight: "bold",
              }}
              colSpan="6"
            >
              BALIK BAHAN
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              TANGGAL
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              JENIS EMAS
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              KETERANGAN
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT KOTOR
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              %
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT MURNI
            </td>
          </tr>
          {this.props.dataExel[1]?.balik_bahan.map((element) => {
            return (
              <>
                <tr>
                  <td>{element.tanggal}</td>
                  <td>{element.nama_bahan}</td>
                  <td>{element.keterangan.toUpperCase()}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_kotor}</td>
                  <td style={{ textAlign: "right" }}>{element.kadar}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_murni}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td colSpan={3} style={{ textAlign: "right" }}>
              Grand Total :
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[1]?.balik_bahan
                .reduce((a, b) => a + parseFloat(b.berat_kotor), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}></td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[1]?.balik_bahan
                .reduce((a, b) => a + parseFloat(b.berat_murni), 0)
                .toFixed(3)}
            </td>
          </tr>
          {/* End Balik Bahan */}
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          {/* Susut JO */}
          <tr>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                backgroundColor: "#99CCFF",
                fontWeight: "bold",
              }}
              colSpan="5"
            >
              {this.props.dataHead?.kode_tukang}
            </td>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                backgroundColor: "#99CCFF",
                fontWeight: "bold",
              }}
              colSpan="5"
            >
              {this.props.dataHead?.divisi}
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              TANGGAL TERIMA
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SPK
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              JENIS EMAS
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              %
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT AWAL
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT AWAL MURNI
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              TANGGAL KIRIM
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT AKHIR
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SUSUT KOTOR
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SUSUT MURNI
            </td>
          </tr>
          {this.props.dataExel[3]?.susut_JO.map((element) => {
            return (
              <>
                <tr>
                  <td>{element.tanggal_terima}</td>
                  <td>{element.no_job_order}</td>
                  <td>{element.kode_jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>{element.kadar}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_awal}</td>
                  <td style={{ textAlign: "right" }}>
                    {element.berat_awal_murni}
                  </td>
                  <td>{element.tanggal_kirim}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_akhir}</td>
                  <td style={{ textAlign: "right" }}>{element.susut_kotor}</td>
                  <td style={{ textAlign: "right" }}>{element.susut_murni}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td colSpan={3} style={{ textAlign: "right" }}>
              Grand Total :
            </td>
            <td style={{ textAlign: "right" }}></td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[3]?.susut_JO
                .reduce((a, b) => a + parseFloat(b.berat_awal), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[3]?.susut_JO
                .reduce((a, b) => a + parseFloat(b.berat_awal_murni), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>{}</td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[3]?.susut_JO
                .reduce((a, b) => a + parseFloat(b.berat_akhir), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[3]?.susut_JO
                .reduce((a, b) => a + parseFloat(b.susut_kotor), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[3]?.susut_JO
                .reduce((a, b) => a + parseFloat(b.susut_murni), 0)
                .toFixed(3)}
            </td>
          </tr>
          {/* End Susut JO */}
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          {/* Abu Lebur */}
          <tr>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                backgroundColor: "#99CCFF",
                fontWeight: "bold",
              }}
              colSpan="8"
            >
              ABU LEBUR
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              NAMA TUKANG
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              KETERANGAN
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT ABU AWAL
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BERAT KOTOR KEMBALI
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SUSUT BRUTO
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              KADAR
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              24K
            </td>
            <td
              style={{
                backgroundColor: "#99CCFF",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SUSUT 24K
            </td>
          </tr>
          {this.props.dataExel[2]?.abu_lebur.map((element) => {
            return (
              <>
                <tr>
                  <td>{element.tukang}</td>
                  <td>{element.keterangan.toUpperCase()}</td>
                  <td style={{ textAlign: "right" }}>
                    {element.berat_abu_awal}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {element.berat_kotor_kembali}
                  </td>
                  <td style={{ textAlign: "right" }}>{element.susut_bruto}</td>
                  <td style={{ textAlign: "right" }}>{element.kadar}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_24k}</td>
                  <td style={{ textAlign: "right" }}>{element.susut_24k}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td colSpan={2} style={{ textAlign: "right" }}>
              Grand Total :
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.berat_abu_awal), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.berat_kotor_kembali), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.susut_bruto), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}></td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.berat_24k), 0)
                .toFixed(3)}
            </td>
            <td style={{ textAlign: "right" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.susut_24k), 0)
                .toFixed(3)}
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "right" }}>
              Berat Terima :
            </td>
            <td colSpan={6} style={{ textAlign: "center" }}>
              {this.props.dataExel[2]?.abu_lebur
                .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                .toFixed(3)}
            </td>
          </tr>
          {/* End Abu Lebur */}
        </table>
      </>
    );
  }
}
export default ExcelReport;
