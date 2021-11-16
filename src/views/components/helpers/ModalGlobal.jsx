import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { hideModal } from "../../actions/datamaster_action";

const maptostate = (state) => {
  return {
    isOpen: state.datamaster.modalDialog,
  };
};
class ModalGlobal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hideModal() {
    this.props.dispatch(hideModal())
    localStorage.setItem("total_rp_services", JSON.stringify([]));
  }
  render() {
    return (
      <Modal
        backdrop="static"
        keyboard={false}
        isOpen={this.props.isOpen}
        toggle={() => this.props.dispatch(hideModal())}
        size={this.props.size || "xl"}
      >
        <ModalHeader toggle={() => this.hideModal()}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>{this.props.content}</ModalBody>
      </Modal>
    );
  }
}

export default connect(maptostate, null)(ModalGlobal);