import React from 'react';
import { Form, Input, DatePicker, Radio, Checkbox, Select } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const makeField =
  (Component) =>
  ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        // {...formItemLayout}
        label={label}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
        {...input}
      >
        <Component {...rest} {...input} children={children} />
      </FormItem>
    );
  };

const AInput = makeField(Input);
const ADatePick = makeField(DatePicker);
const ARadioGroup = makeField(RadioGroup);
const ACheckBox = makeField(Checkbox);
const ASelect = makeField(Select);

const data = { AInput, ADatePick, ARadioGroup, ACheckBox, ASelect };
export default data;
