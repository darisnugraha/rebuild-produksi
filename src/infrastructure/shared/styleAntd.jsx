import React from "react";
import { Form, Input, DatePicker, Radio, Checkbox, Select } from "antd";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const makeField =
  (Component) =>
  ({ input, meta, children, hasFeedback, label, selectedValue, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    const typeInput = rest.type;

    if (typeInput === "select") {
      const inputName = input.name;
      return (
        <FormItem
          name={inputName}
          label={label}
          validateStatus={hasError ? "error" : "success"}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
        >
          <Component
            {...rest}
            defaultValue={{ selectedValue }}
            children={children}
          />
        </FormItem>
      );
    } else {
      return (
        <FormItem
          label={label}
          validateStatus={hasError ? "error" : "success"}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
        >
          <Component {...rest} {...input} children={children} />
        </FormItem>
      );
    }
  };

const AInput = makeField(Input);
const ADatePick = makeField(DatePicker);
const ARadioGroup = makeField(RadioGroup);
const ACheckBox = makeField(Checkbox);
const ASelect = makeField(Select);

const data = { AInput, ADatePick, ARadioGroup, ACheckBox, ASelect };
export default data;
