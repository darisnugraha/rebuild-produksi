import React from "react";
import { Route } from "react-router-dom";
import SidebarNavList from "./sidebar-nav-list.jsx";
import { connect } from "react-redux";
import getLocal from "../../../infrastructure/services/local/get-local.jsx";
import Menu from "./menu.jsx";

const maptostate = () => {
  const menus =
    getLocal("hakAksesMenu") === null ? [] : getLocal("hakAksesMenu");
  return {
    menu:
      getLocal("userInfo").level === "OWNER" ||
      getLocal("userInfo").level === "SPV" ||
      getLocal("userInfo").level === "MANAGER"
        ? Menu
        : menus,
  };
};

class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      clicked: -1,
    };
  }

  handleExpand(e, i, match) {
    e.preventDefault();

    if (this.state.clicked === -1 && match) {
      this.setState((state) => ({
        active: -1,
        clicked: 1,
      }));
    } else {
      this.setState((state) => ({
        active: this.state.active === i ? -1 : i,
        clicked: 1,
      }));
    }
  }

  render() {
    return (
      <ul className="nav">
        <li className="nav-header">Navigation</li>
        {this.props.menu.map((menu, i) => {
          if (menu.is_show) {
            return (
              <Route
                path={menu.path}
                exact={menu.exact}
                key={i}
                children={({ match }) => (
                  <SidebarNavList
                    data={menu}
                    key={i}
                    expand={(e) => this.handleExpand(e, i, match)}
                    active={i === this.state.active}
                    clicked={this.state.clicked}
                  />
                )}
              />
            );
          } else {
            return false;
          }
        })}
      </ul>
    );
  }
}

export default connect(maptostate, null)(SidebarNav);
