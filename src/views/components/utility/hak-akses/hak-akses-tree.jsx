import { Divider, Form, Select } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import SortableTree, {
  changeNodeAtPath,
  toggleExpandedForAll,
} from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import { Field, reduxForm } from "redux-form";
import { addHakAksesMenuUser } from "../../../../application/actions/hakakses";
import AxiosGet from "../../../../infrastructure/axios/get";
import { ToastNotification } from "../../../../infrastructure/helpers/notification";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import Menu from "../../sidebar/menu";
import word from "../../../../infrastructure/shared/static";
import Swal from "sweetalert2";

const maptostate = (state) => {
  return {
    // initialValues: {
    //   user_id: state.masteruser.feedback[0]?.user_id,
    // },
    DataUsers: state.masteruser.feedback,
  };
};

const { Option } = Select;

class HakAksesTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      settings: "",
      searchString: "",
      searchFocusIndex: 0,
      treeData: Menu,
    };
  }

  selectThis = (node, path) => {
    this.setState({ currentNode: node, path: path });
  };

  simpan() {
    if (this.state.user_id === undefined) {
      Swal.fire({
        title: "Ops..",
        text: "Mohon Pilih User Terlebih Dahulu !",
        icon: "error",
      });
    } else {
      this.props.addHakAksesMenuUser(this.state.treeData, this.state.user_id);
    }
  }

  getMenuUser(e) {
    this.setState({
      user_id: e,
    });
    this.setState({
      isLoading: true,
    });
    AxiosGet({ url: word.URL_GET_MENU_HAK_AKSES_USER + e })
      .then((res) => {
        // localStorage.setItem('menu',JSON.stringify(res.data))
        if (res.value.length === 0) {
          this.setState({ treeData: Menu });
          // setTimeout(() => {
          //   this.filterTreeDataWithModule();
          // }, 200);
        } else {
          this.setState({ treeData: [] });
          this.setState({ treeData: res.value });
          // this.filterTreeDataWithModule();
        }
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        ToastNotification(
          "info",
          err.error.data.message || "Terjadi Kesalahan !"
        );
        // this.setState({ isLoading: false });
        this.setState({ treeData: this.filterTreeDataWithModule() });
      });
  }

  expandAndCollapse = (expanded) => {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: Menu,
        expanded,
      }),
    });
  };

  render() {
    const { searchString, searchFocusIndex, treeData } = this.state;
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <>
        <div className="scrollPerfection">
          <div className="row">
            <div className="col-12">
              <Form layout="vertical">
                <div className="row">
                  <div className="col-2">
                    <Field
                      name="user_id"
                      label={
                        <span style={{ fontSize: "13px" }}>Pilih User Id</span>
                      }
                      style={{ width: 250 }}
                      component={styleAntd.ASelect}
                      placeholder="Pilih User Id"
                      onBlur={(e) => e.preventDefault()}
                      onChange={(e) => this.getMenuUser(e)}
                    >
                      {this.props.DataUsers.map((item) => {
                        return (
                          <Option value={item.user_id} key={item.user_id}>
                            <span style={{ fontSize: "13px" }}>
                              {item.user_name}
                            </span>
                          </Option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-12">
              <Divider orientation="left" style={{ fontSize: "14px" }}>
                List Hak Akses
              </Divider>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4 mt-4 text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.expandAndCollapse(true);
                    }}
                  >
                    Expand all
                  </button>{" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.expandAndCollapse(false);
                    }}
                  >
                    Collapse all
                  </button>
                </div>
              </div>
              <div style={{ height: 450, marginTop: 15 }}>
                <SortableTree
                  treeData={treeData}
                  onChange={(treeData) => this.setState({ treeData })}
                  searchQuery={searchString}
                  searchFocusOffset={searchFocusIndex}
                  generateNodeProps={({ node, path }) => ({
                    title: (
                      <form
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          this.selectThis(node, path);
                        }}
                      >
                        <div className="input-group">
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={node.title}
                            // onChange={(event) => {
                            //   const title = event.target.value;
                            //   this.setState((state) => ({
                            //     treeData: changeNodeAtPath({
                            //       treeData: state.treeData,
                            //       path,
                            //       getNodeKey,
                            //       newNode: { ...node, title },
                            //     }),
                            //   }));
                            // }}
                            placeholder="Recipient's username"
                          />
                          <div className="input-group-append">
                            {node.is_show ? (
                              <>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const is_show = false;
                                    this.setState((state) => ({
                                      treeData: changeNodeAtPath({
                                        treeData: state.treeData,
                                        path,
                                        getNodeKey,
                                        newNode: { ...node, is_show },
                                      }),
                                    }));
                                  }}
                                  className="btn btn-primary"
                                >
                                  {" "}
                                  <i className="fa fa-eye"></i>{" "}
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const is_show = true;
                                    this.setState((state) => ({
                                      treeData: changeNodeAtPath({
                                        treeData: state.treeData,
                                        path,
                                        getNodeKey,
                                        newNode: { ...node, is_show },
                                      }),
                                    }));
                                  }}
                                  className="btn btn-secondary"
                                >
                                  {" "}
                                  <i className="fa fa-eye-slash"></i>{" "}
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </form>
                    ),
                  })}
                />
              </div>
              <div className="row">
                <div className="col-2 text-right  mt-4">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      this.simpan();
                    }}
                  >
                    Simpan
                  </button>
                </div>
                <div className="col-2 text-right  mt-4 d-none">
                  <button
                    className="btn btn-danger btn-block"
                    onClick={() => {
                      // this.reset();
                    }}
                  >
                    Reset Hak Akses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

HakAksesTree = reduxForm({
  form: "HakAksesTree",
  enableReinitialize: true,
})(HakAksesTree);
export default connect(maptostate, { addHakAksesMenuUser })(HakAksesTree);
