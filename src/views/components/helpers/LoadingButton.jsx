import React, { Component }  from 'react';

class LoadingButton extends Component {
    render() {
      return <button className="btn btn-block btn-primary" type="button"> <i className="fas fa-spinner fa-spin"></i> Sedang Mengirim Data </button>;
    }
  }

export default LoadingButton;