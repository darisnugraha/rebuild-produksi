import React from "react";
import { withRouter } from "react-router-dom";
import { PageSettings } from "../../../../infrastructure/config/page-settings";
import FormLogin from "../../../components/login/form-login";
import AxiosGet from "../../../../infrastructure/axios/get";

class Login extends React.Component {
  static contextType = PageSettings;

  constructor(props) {
    super(props);
    this.state = {
      namaTokoDepan: "",
      namaTokoBelakang: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.context.handleSetPageSidebar(false);
    this.context.handleSetPageHeader(false);
    this.context.handleSetBodyWhiteBg(true);
    const baseurl = process.env.REACT_APP_BACKEND_URL;
    AxiosGet({ url: baseurl + "system" }).then((res) => {
      const namaToko = res.value[0].nama_toko;
      this.setState({
        namaTokoBelakang: namaToko,
      });
    });
  }

  componentWillUnmount() {
    this.context.handleSetPageSidebar(true);
    this.context.handleSetPageHeader(true);
    this.context.handleSetBodyWhiteBg(false);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="login login-with-news-feed">
        <div className="news-feed">
          <div
            className="news-image"
            style={{
              backgroundImage:
                "url(../../../../infrastructure/assets/img/login-bg/login-bg-11.jpg)",
            }}
          ></div>
          <div className="news-caption">
            <h4 className="caption-title">
              <b>PRODUKSI</b> {this.state.namaTokoBelakang}
            </h4>
            <p>{`PRODUKSI ${this.state.namaTokoBelakang}`}</p>
          </div>
        </div>
        <div className="right-content">
          <div className="login-header">
            <div className="brand">
              <span className="logo"></span> <b>PRODUKSI</b>{" "}
              {this.state.namaTokoBelakang}
              {/* <small>responsive bootstrap 4 admin template</small> */}
            </div>
            <div className="icon">
              <i className="fa fa-sign-in"></i>
            </div>
          </div>
          <div className="login-content">
            <FormLogin
              namaTokoDepan="PRODUKSI"
              namaTokoBelakang={this.state.namaTokoBelakang}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
