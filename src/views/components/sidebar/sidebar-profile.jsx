import React from "react";
import { Link } from "react-router-dom";
import { PageSettings } from "../../../infrastructure/config/page-settings";
import getLocal from "../../../infrastructure/services/local/get-local.jsx";

class SidebarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileActive: 0,
    };
    this.handleProfileExpand = this.handleProfileExpand.bind(this);
  }

  handleProfileExpand(e) {
    e.preventDefault();
    this.setState((state) => ({
      profileActive: !this.state.profileActive,
    }));
  }
  componentDidMount() {
    const namaToko = getLocal("tp_system").nama_toko;
    this.setState({
      namaTokoBelakang: namaToko,
    });
  }

  render() {
    return (
      <PageSettings.Consumer>
        {({ pageSidebarMinify }) => (
          <ul className="nav">
            <li
              className={
                "nav-profile " + (this.state.profileActive ? "expand " : "")
              }
            >
              <Link to="/" onClick={this.handleProfileExpand}>
                <div className="cover with-shadow"></div>
                <div className="image">
                  <img src="/assets/img/user/user-13.jpg" alt="" />
                </div>
                <div className="info">
                  <b></b>
                  PRODUKSI
                  <small>{this.state.namaTokoBelakang}</small>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </PageSettings.Consumer>
    );
  }
}

export default SidebarProfile;
