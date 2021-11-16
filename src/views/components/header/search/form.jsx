import React from "react";

class SearchForm extends React.Component {
  render() {
    const today = new Date();
    return (
      <li className="navbar-form">
        {/* <form action="" method="POST" name="search_form"> */}
          <div className="form-group mt-1">
            <input
              type="text"
              className="form-control"
              value={"Tanggal System : "+today.toLocaleDateString("id-ID")}
              readOnly
            />
            <button type="submit" className="btn btn-search">
              <i className="fa fa-calendar"></i>
            </button>
          </div>
        {/* </form> */}
      </li>
    );
  }
}

export default SearchForm;
