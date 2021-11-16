import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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
          filename="LAPORAN KIRIM DAN SALDO PER TAHUN"
          sheet="LAPORAN KIRIM DAN SALDO PER TAHUN"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: 'none' }}>
          <thead>
            <tr>
              <th colSpan="14" style={{ textAlign: 'center' }}>
                {' '}
                LAPORAN SALDO BAHAN{' '}
              </th>
            </tr>
            <tr>
              <th colSpan="14"> Tanggal : </th>
            </tr>
            <tr>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', verticalAlign: 'middle' }}
                rowSpan="2"
              >
                BULAN
              </td>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', verticalAlign: 'middle' }}
                rowSpan="2"
              >
                KERJA HARI
              </td>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', verticalAlign: 'middle' }}
                rowSpan="2"
              >
                JENIS
              </td>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}
                colSpan="2"
              >
                FR1
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="2"
              >
                FR2
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="2"
              >
                FR3
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="2"
              >
                FR TOTAL
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="2"
              >
                HAND STG
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SELESAI
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SELESAI
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SELESAI
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SELESAI
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SELESAI
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                SALDO
              </td>
            </tr>
          </thead>
        </table>
      </>
    );
  }
}
export default ExcelReport;
