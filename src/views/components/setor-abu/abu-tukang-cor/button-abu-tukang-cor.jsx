import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import { getAllSetorOutstandCasting } from "../../../../application/actions/abutukangcor";

const ButtonAbuTukangCOR = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(getAllSetorOutstandCasting);
        }}
        className="ant-btn-success"
      >
        + Lihat Data
      </Button>
    </div>
  );
};

export default ButtonAbuTukangCOR;
