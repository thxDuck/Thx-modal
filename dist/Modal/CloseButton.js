import React from "react";
const style = {
  background: "unset",
  cursor: "pointer",
  fontWeight: "600",
  height: "fit-content"
};
const btnStyle = {
  border: "1px solid #000",
  borderRadius: "10px",
  padding: "0.4rem 1rem"
};
const CloseButton = props => {
  const close = () => props.close();
  const text = props.text || "Close";
  return !props.children ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: close,
    style: {
      ...style,
      ...btnStyle
    },
    title: "Close this modal"
  }, text) : /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: style
  }, props.children);
};
export default CloseButton;