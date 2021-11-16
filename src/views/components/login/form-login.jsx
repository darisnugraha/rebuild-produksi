import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "antd";
import { Field, reduxForm } from "redux-form";
import style from "../../../infrastructure/shared/style";
import { sendLogin } from "../../../application/actions/login";
import ui from "../../../application/selectors/ui";

const LoginForm = (prop) => {
  const { handleSubmit, pristine, submitting } = prop;
  const btnLoading = useSelector(ui.getBtnLoading);
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="user_id"
        type="text"
        placeholder="Username"
        component={style.inputStyle1}
      />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={style.inputStyle1}
      />
      <Button
        type="primary"
        htmltype="button"
        disabled={pristine || submitting}
        onClick={() => prop.dispatch(sendLogin)}
        block
        loading={btnLoading}
      >
        Log In
      </Button>
      <hr />
      <p className="text-center text-grey-darker">
        &copy; PRODUKSI MEDAN All Right Reserved 2021
      </p>
    </Form>
  );
};

export default reduxForm({
  form: "LoginForm",
})(LoginForm);
