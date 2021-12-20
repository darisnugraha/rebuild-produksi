import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import { getAllSetorOutstandPotong } from "../../../../application/actions/abutukangpotong";
import { useSelector } from "react-redux";
import ui from "../../../../application/selectors/ui";

const ButtonAbuTukangPotong = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const isLoading = useSelector(ui.getBtnLoading);
  return (
    <div>
      <Button
        type="primary"
        loading={isLoading}
        onClick={() => {
          dispatch(getAllSetorOutstandPotong);
        }}
        className="ant-btn-success"
      >
        + Lihat Data
      </Button>
    </div>
  );
};

export default ButtonAbuTukangPotong;
