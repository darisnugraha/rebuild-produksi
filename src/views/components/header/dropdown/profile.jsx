import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { doLogout } from "../../../../application/actions/login";
import { connect } from "react-redux";
import getLocal from "../../../../infrastructure/services/local/get-local";

// const mapDispatchToProps = {
//   doLogout,
// };

class DropdownProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  componentDidMount() {
    const data = getLocal("userInfo");
    this.setState({
      username: data.user_id,
    });
  }

  LogOutAction = () => {
    const data = getLocal("userInfo");
    this.props.doLogout(data);
  };

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="dropdown navbar-user"
        tag="li"
      >
        <DropdownToggle tag="a">
          {/* <img src="../assets/img/user/user-13.jpg" alt="" />  */}
          <span className="d-none d-md-inline">{this.state.username}</span>{" "}
          <b className="caret"></b>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
          {/* <DropdownItem>Edit Profile</DropdownItem>
          <DropdownItem>
            <span className="badge badge-danger pull-right">2</span> Inbox
          </DropdownItem>
          <DropdownItem>Calendar</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <div className="dropdown-divider"></div> */}
          <Link
            // to="/"
            onClick={() => {
              this.LogOutAction();
            }}
          >
            <DropdownItem>Log Out</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default connect(null, { doLogout })(DropdownProfile);
