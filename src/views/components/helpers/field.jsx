import React from "react";
import SelectSearch from "react-select-search";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import Skeleton from "react-loading-skeleton";
import "react-datepicker/dist/react-datepicker.css";

export const renderTextArea = ({
  input,
  label,
  placeholder,
  options,
  disabled,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <textarea
      className="form-control"
      placeholder={placeholder}
      rows="4"
    ></textarea>

    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);
export const HiidenFiled = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  value,
  id,
  tabIndex,
  meta: { touched, error, warning },
}) => (
  <>
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      tabIndex={tabIndex}
      autoComplete="off"
      type={type}
      id={id}
      className="form-control"
      readOnly={readOnly}
      defaultValue={value}
      placeholder={placeholder}
    />
  </>
);

export const inputGroup = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,textValue,
  ref,
  customeCss,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">

    <label htmlFor="" className="text-black">
      {label || <> &nbsp; </>}  
    </label>
  <div className="input-group mb-3">
  
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      
      tabIndex={tabIndex}
      ref={ref}
      autoComplete="off"
      type={type}
      id={id}
      style={{textTransform: "uppercase"}}
      className={"form-control " + customeCss}
      readOnly={readOnly}
      // defaultValue={defaultValue}
      placeholder={placeholder}
    />
      <div class="input-group-prepend">
      <span class="input-group-text">{textValue}</span>
    </div>
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
  </div>
);
export const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  autoFocus,
  ref,
  customeCss,
  defaultValue,
  maxLength,
  nouperCase,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label || <> &nbsp; </>}  
    </label>
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      
      tabIndex={tabIndex}
      ref={ref}
      autoComplete="off"
      type={type}
      id={id}
      style={{textTransform: !nouperCase ? "uppercase" : "none"}}
      className={"form-control " + customeCss}
      readOnly={readOnly}
      // defaultValue={defaultValue}
      maxLength={maxLength}
      placeholder={placeholder}
    />
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);
export const ReanderCheckBox = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  autoFocus,
  ref,
  customeCss,
  defaultValue,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    {/* <label htmlFor="" className="text-black">
      {label || <> &nbsp; </>}  
    </label> */}
    <br />
    {label || <> &nbsp; </>}
    <br />
    <div className="switcher">
      {/* <input
        type="checkbox"
        name="switcher_checkbox_1"
        id="switcher_checkbox_1"
        defaultChecked
        value="1"
      /> */}
      
      <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      defaultChecked
      // value="1"
      tabIndex={tabIndex}
      ref={ref}
      autoComplete="off"
      type={type}
      id={id}
      // className={}
      readOnly={readOnly}
      // defaultValue={defaultValue}
      placeholder={placeholder}
      /> <label htmlFor="switcher_checkbox_1"></label>
    </div>
      
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);
export const FormatNumber = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <NumberFormat
      thousandSeparator={"."}
      decimalSeparator={","}
      autoComplete="off"
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      type={type}
      inputMode="numeric"
      className="form-control"
      readOnly={readOnly}
      placeholder={placeholder}
    />
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export const Gramasi = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  defaultValue,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      tabIndex={tabIndex}
      autoComplete="off"
      type="number"
      id={id}
      className="form-control"
      readOnly={readOnly}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export const SkeletonLoading = ({ label }) => (
  <div className="form-group">
    <label> {label} </label>
    <Skeleton className="form-control" />
  </div>
);

export const ReanderSelect = ({
  input,
  label,
  readOnly,
  placeholder,
  options,
  value,
  id,
  disabled,
  tabIndex,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <SelectSearch
      autoComplete="off"
      onInputKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      id={id}
      readOnly={readOnly}
      search
      tabIndex={tabIndex}
      disabled={disabled}
      placeholder={placeholder}
      options={options}
    />
    {/* <Select
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        options={options}
     
      /> */}

    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export const InputDate = ({
  input,
  label,
  readOnly,
  placeholder,
  id,
  selected,
  customInput,
  minDate,
  meta: { touched, error, warning },
}) => (
  <div className="input-group mb-3">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <div className="customDatePickerWidth">
      <DatePicker
        id={id}
        todayButton="Hari Ini"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="yyyy-MM-dd"
        autoComplete="off"
        minDate={minDate}
        {...input}
        onKeyDown={(event) => {
          event.preventDefault(); //<===== This stops the form from being submitted
          return false
        }}
        selected={selected}
        disabledKeyboardNavigation={true}
        className="form-control"
        readOnly={readOnly}
        placeholder={placeholder}
        customInput={customInput}
      />
       {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
    </div>
   
  </div>
);
