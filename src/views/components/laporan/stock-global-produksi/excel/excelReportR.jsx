/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExcelReportR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = 0;
    let textString = '';
    let textDisplay = 0;

    let eay18Awal = 0;
    let eay18In = 0;
    let eay18Out = 0;
    let eay18Sld = 0;

    let eay14Awal = 0;
    let eay14In = 0;
    let eay14Out = 0;
    let eay14Sld = 0;

    let eay10Awal = 0;
    let eay10In = 0;
    let eay10Out = 0;
    let eay10Sld = 0;

    let eay18AwalString = '';
    let eay18InString = '';
    let eay18OutString = '';
    let eay18SldString = '';

    let eay14AwalString = '';
    let eay14InString = '';
    let eay14OutString = '';
    let eay14SldString = '';

    let eay10AwalString = '';
    let eay10InString = '';
    let eay10OutString = '';
    let eay10SldString = '';

    let eaw18Awal = 0;
    let eaw18In = 0;
    let eaw18Out = 0;
    let eaw18Sld = 0;

    let eaw14Awal = 0;
    let eaw14In = 0;
    let eaw14Out = 0;
    let eaw14Sld = 0;

    let eaw10Awal = 0;
    let eaw10In = 0;
    let eaw10Out = 0;
    let eaw10Sld = 0;

    let eaw18AwalString = '';
    let eaw18InString = '';
    let eaw18OutString = '';
    let eaw18SldString = '';

    let eaw14AwalString = '';
    let eaw14InString = '';
    let eaw14OutString = '';
    let eaw14SldString = '';

    let eaw10AwalString = '';
    let eaw10InString = '';
    let eaw10OutString = '';
    let eaw10SldString = '';

    const totalEay18Awal = this.props.dataExel.reduce((a, b) => a + b.eay18_awal, 0);
    const totalEay18In = this.props.dataExel.reduce((a, b) => a + b.eay18_in, 0);
    const totalEay18Out = this.props.dataExel.reduce((a, b) => a + b.eay18_out, 0);
    const totalEay18Saldo = this.props.dataExel.reduce((a, b) => a + b.eay18_sld, 0);

    const totalEay14Awal = this.props.dataExel.reduce((a, b) => a + b.eay14_awal, 0);
    const totalEay14In = this.props.dataExel.reduce((a, b) => a + b.eay14_in, 0);
    const totalEay14Out = this.props.dataExel.reduce((a, b) => a + b.eay14_out, 0);
    const totalEay14Saldo = this.props.dataExel.reduce((a, b) => a + b.eay14_sld, 0);

    const totalEay10Awal = this.props.dataExel.reduce((a, b) => a + b.eay10_awal, 0);
    const totalEay10In = this.props.dataExel.reduce((a, b) => a + b.eay10_in, 0);
    const totalEay10Out = this.props.dataExel.reduce((a, b) => a + b.eay10_out, 0);
    const totalEay10Saldo = this.props.dataExel.reduce((a, b) => a + b.eay10_sld, 0);

    const totalEaw18Awal = this.props.dataExel.reduce((a, b) => a + b.eaw18_awal, 0);
    const totalEaw18In = this.props.dataExel.reduce((a, b) => a + b.eaw18_in, 0);
    const totalEaw18Out = this.props.dataExel.reduce((a, b) => a + b.eaw18_out, 0);
    const totalEaw18Saldo = this.props.dataExel.reduce((a, b) => a + b.eaw18_sld, 0);

    const totalEaw14Awal = this.props.dataExel.reduce((a, b) => a + b.eaw14_awal, 0);
    const totalEaw14In = this.props.dataExel.reduce((a, b) => a + b.eaw14_in, 0);
    const totalEaw14Out = this.props.dataExel.reduce((a, b) => a + b.eaw14_out, 0);
    const totalEaw14Saldo = this.props.dataExel.reduce((a, b) => a + b.eaw14_sld, 0);

    const totalEaw10Awal = this.props.dataExel.reduce((a, b) => a + b.eaw10_awal, 0);
    const totalEaw10In = this.props.dataExel.reduce((a, b) => a + b.eaw10_in, 0);
    const totalEaw10Out = this.props.dataExel.reduce((a, b) => a + b.eaw10_out, 0);
    const totalEaw10Saldo = this.props.dataExel.reduce((a, b) => a + b.eaw10_sld, 0);

    const tanggal = new Date(localStorage.getItem('tanggal_lap'));
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN STOCK GLOBAL PRODUKSI R"
          sheet="LAPORAN STOCK GLOBAL PRODUKSI R"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: 'none' }}>
          <thead>
            <tr>
              <th colSpan="14" style={{ textAlign: 'center' }}>
                {' '}
                LAPORAN STOCK GLOBAL PRODUKSI{' '}
              </th>
            </tr>
            <tr>
              <th colSpan="14"> Tanggal : {tanggal.toLocaleDateString()}</th>
            </tr>
            <tr>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', verticalAlign: 'middle' }}
                rowSpan="2"
              >
                DIVISI
              </td>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}
                colSpan="4"
              >
                EAY18
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                EAY14
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                EAY10
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                EAW18
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                EAW14
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                EAW10
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'right',
                  verticalAlign: 'middle',
                }}
                rowSpan="2"
              >
                TOTAL
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>

              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>

              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>

              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>

              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>

              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((row) => {
              total =
                row.eay18_awal +
                row.eay18_in +
                row.eay18_out +
                row.eay18_sld +
                row.eay14_awal +
                row.eay14_in +
                row.eay14_out +
                row.eay14_sld +
                row.eay10_awal +
                row.eay10_in +
                row.eay10_out +
                row.eay10_sld +
                row.eaw18_awal +
                row.eaw18_in +
                row.eaw18_out +
                row.eaw18_sld +
                row.eaw14_awal +
                row.eaw14_in +
                row.eaw14_out +
                row.eaw14_sld +
                row.eaw10_awal +
                row.eaw10_in +
                row.eaw10_out +
                row.eaw10_sld;

              if (total.toString().includes('e')) {
                textString = total.toString().split('e');
                textDisplay = parseFloat(textString[0]);
              } else {
                textDisplay = total;
              }

              // eay18
              if (row.eay18_awal.toString().includes('e')) {
                eay18AwalString = row.eay18_awal.toString().split('e');
                eay18Awal = parseFloat(eay18AwalString[0]);
              } else {
                eay18Awal = row.eay18_awal;
              }

              if (row.eay18_in.toString().includes('e')) {
                eay18InString = row.eay18_inawal.toString().split('e');
                eay18In = parseFloat(eay18InString[0]);
              } else {
                eay18In = row.eay18_in;
              }

              if (row.eay18_out.toString().includes('e')) {
                eay18OutString = row.eay18_out.toString().split('e');
                eay18Out = parseFloat(eay18OutString[0]);
              } else {
                eay18Out = row.eay18_out;
              }

              if (row.eay18_sld.toString().includes('e')) {
                eay18SldString = row.eay18_sld.toString().split('e');
                eay18Sld = parseFloat(eay18SldString[0]);
              } else {
                eay18Sld = row.eay18_sld;
              }

              // eay14
              if (row.eay14_awal.toString().includes('e')) {
                eay14AwalString = row.eay14_awal.toString().split('e');
                eay14Awal = parseFloat(eay14AwalString[0]);
              } else {
                eay14Awal = row.eay14_awal;
              }

              if (row.eay14_in.toString().includes('e')) {
                eay14InString = row.eay14_in.toString().split('e');
                eay14In = parseFloat(eay14InString[0]);
              } else {
                eay14In = row.eay14_in;
              }

              if (row.eay14_out.toString().includes('e')) {
                eay14OutString = row.eay14_out.toString().split('e');
                eay14Out = parseFloat(eay14OutString[0]);
              } else {
                eay14Out = row.eay14_out;
              }

              if (row.eay14_sld.toString().includes('e')) {
                eay14SldString = row.eay14_sld.toString().split('e');
                eay14Sld = parseFloat(eay14SldString[0]);
              } else {
                eay14Sld = row.eay14_sld;
              }

              // eay10
              if (row.eay10_awal.toString().includes('e')) {
                eay10AwalString = row.eay10_awal.toString().split('e');
                eay10Awal = parseFloat(eay10AwalString[0]);
              } else {
                eay10Awal = row.eay10_awal;
              }

              if (row.eay10_in.toString().includes('e')) {
                eay10InString = row.eay10_in.toString().split('e');
                eay10In = parseFloat(eay10InString[0]);
              } else {
                eay10In = row.eay10_in;
              }

              if (row.eay10_out.toString().includes('e')) {
                eay10OutString = row.eay10_out.toString().split('e');
                eay10Out = parseFloat(eay10OutString[0]);
              } else {
                eay10Out = row.eay10_out;
              }

              if (row.eay10_sld.toString().includes('e')) {
                eay10SldString = row.eay10_sld.toString().split('e');
                eay10Sld = parseFloat(eay10SldString[0]);
              } else {
                eay10Sld = row.eay10_sld;
              }

              // eaw18
              if (row.eaw18_awal.toString().includes('e')) {
                eaw18AwalString = row.eaw18_awal.toString().split('e');
                eaw18Awal = parseFloat(eaw18AwalString[0]);
              } else {
                eaw18Awal = row.eaw18_awal;
              }

              if (row.eaw18_in.toString().includes('e')) {
                eaw18InString = row.eaw18_inawal.toString().split('e');
                eaw18In = parseFloat(eaw18InString[0]);
              } else {
                eaw18In = row.eaw18_in;
              }

              if (row.eaw18_out.toString().includes('e')) {
                eaw18OutString = row.eaw18_out.toString().split('e');
                eaw18Out = parseFloat(eaw18OutString[0]);
              } else {
                eaw18Out = row.eaw18_out;
              }

              if (row.eaw18_sld.toString().includes('e')) {
                eaw18SldString = row.eaw18_sld.toString().split('e');
                eaw18Sld = parseFloat(eaw18SldString[0]);
              } else {
                eaw18Sld = row.eaw18_sld;
              }

              // eaw14
              if (row.eaw14_awal.toString().includes('e')) {
                eaw14AwalString = row.eaw14_awal.toString().split('e');
                eaw14Awal = parseFloat(eaw14AwalString[0]);
              } else {
                eaw14Awal = row.eaw14_awal;
              }

              if (row.eaw14_in.toString().includes('e')) {
                eaw14InString = row.eaw14_in.toString().split('e');
                eaw14In = parseFloat(eaw14InString[0]);
              } else {
                eaw14In = row.eaw14_in;
              }

              if (row.eaw14_out.toString().includes('e')) {
                eaw14OutString = row.eaw14_out.toString().split('e');
                eaw14Out = parseFloat(eaw14OutString[0]);
              } else {
                eaw14Out = row.eaw14_out;
              }

              if (row.eaw14_sld.toString().includes('e')) {
                eaw14SldString = row.eaw14_sld.toString().split('e');
                eaw14Sld = parseFloat(eaw14SldString[0]);
              } else {
                eaw14Sld = row.eaw14_sld;
              }

              // eaw10
              if (row.eaw10_awal.toString().includes('e')) {
                eaw10AwalString = row.eaw10_awal.toString().split('e');
                eaw10Awal = parseFloat(eaw10AwalString[0]);
              } else {
                eaw10Awal = row.eaw10_awal;
              }

              if (row.eaw10_in.toString().includes('e')) {
                eaw10InString = row.eaw10_in.toString().split('e');
                eaw10In = parseFloat(eaw10InString[0]);
              } else {
                eaw10In = row.eaw10_in;
              }

              if (row.eaw10_out.toString().includes('e')) {
                eaw10OutString = row.eaw10_out.toString().split('e');
                eaw10Out = parseFloat(eaw10OutString[0]);
              } else {
                eaw10Out = row.eaw10_out;
              }

              if (row.eaw10_sld.toString().includes('e')) {
                eaw10SldString = row.eaw10_sld.toString().split('e');
                eaw10Sld = parseFloat(eaw10SldString[0]);
              } else {
                eaw10Sld = row.eaw10_sld;
              }
              return (
                <tr>
                  <td>{row.divisi}</td>

                  <td>{eay18Awal.toFixed(3)}</td>
                  <td>{eay18In.toFixed(3)}</td>
                  <td>{eay18Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eay18Sld.toFixed(3)}</td>

                  <td>{eay14Awal.toFixed(3)}</td>
                  <td>{eay14In.toFixed(3)}</td>
                  <td>{eay14Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eay14Sld.toFixed(3)}</td>

                  <td>{eay10Awal.toFixed(3)}</td>
                  <td>{eay10In.toFixed(3)}</td>
                  <td>{eay10Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eay10Sld.toFixed(3)}</td>

                  <td>{eaw18Awal.toFixed(3)}</td>
                  <td>{eaw18In.toFixed(3)}</td>
                  <td>{eaw18Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eaw18Sld.toFixed(3)}</td>

                  <td>{eaw14Awal.toFixed(3)}</td>
                  <td>{eaw14In.toFixed(3)}</td>
                  <td>{eaw14Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eaw14Sld.toFixed(3)}</td>

                  <td>{eaw10Awal.toFixed(3)}</td>
                  <td>{eaw10In.toFixed(3)}</td>
                  <td>{eaw10Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{eaw10Sld.toFixed(3)}</td>

                  <td style={{ color: '#FF0000' }}>{textDisplay.toFixed(3)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>&nbsp;</th>
              <th style={{ textAlign: 'right' }}>{totalEay18Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay18In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay18Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay18Saldo.toFixed(3)}</th>

              <th style={{ textAlign: 'right' }}>{totalEay14Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay14In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay14Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay14Saldo.toFixed(3)}</th>

              <th style={{ textAlign: 'right' }}>{totalEay10Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay10In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay10Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEay10Saldo.toFixed(3)}</th>

              <th style={{ textAlign: 'right' }}>{totalEaw18Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw18In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw18Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw18Saldo.toFixed(3)}</th>

              <th style={{ textAlign: 'right' }}>{totalEaw14Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw14In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw14Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw14Saldo.toFixed(3)}</th>

              <th style={{ textAlign: 'right' }}>{totalEaw10Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw10In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw10Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalEaw10Saldo.toFixed(3)}</th>
              <th>&nbsp;</th>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReportR;
