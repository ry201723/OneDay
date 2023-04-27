import "./recommend.less";
import React from "react";
import { Drag } from "@nutui/nutui-react-taro";
function Recommend() {
  const btnStyle = {
    borderRadius: "25px",
    padding: "0 18px",
    fontSize: "14px",
    color: "#fff",
    display: "inline-block",
    lineHeight: "36px",
    background: "linear-gradient(135deg,#fa2c19 0,#fa6419 100%)",
  };
  return (
    <Drag direction="x" attract>
      <div className="touch-dom" style={btnStyle}>
        按钮
      </div>
    </Drag>
  );
}
export default Recommend;
