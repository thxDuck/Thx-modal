import React from "react";
import { generateColorTheme } from "./colors.js";
import * as styles from "./style";
export const getAnimationOnClose = animation => {
  return styles.keyFrames[animation];
};
export const getHeadContent = (titleText, closeButton) => {
  const headStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  };
  const h2Style = {
    display: "block",
    marginTop: "unset"
  };
  const title = /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, titleText || "");
  return /*#__PURE__*/React.createElement("div", {
    style: headStyle
  }, title, closeButton);
};
export const generateStyles = (theme, textColor, positions, customBackgroundStyle, modalSize) => {
  const centerModalWithoutBg = {
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto"
  };
  const modStyle = {
    ...styles.modal
  };
  const bgStyle = {
    ...styles.background
  };
  if (!!theme) {
    const colors = generateColorTheme(theme);
    modStyle.backgroundColor = colors.base;
    modStyle.boxShadow = `0px 0px 10px ${colors.dark}`;
    modStyle.color = !!textColor ? textColor : colors.text;
    modStyle.borderColor = "#fff";
    bgStyle.backgroundColor = colors.light;
  }
  const width = getModalSize(modalSize);
  modStyle.width = width;
  if (!!positions) {
    for (const cssProp in positions) {
      const value = positions[cssProp];
      modStyle[cssProp] = value;
    }
  }
  if (!!customBackgroundStyle) {
    for (const cssProp in customBackgroundStyle) {
      const value = customBackgroundStyle[cssProp];
      bgStyle[cssProp] = value;
    }
  } else if (customBackgroundStyle === false) {
    bgStyle.background = "unset";
    for (const cssProp in centerModalWithoutBg) {
      const value = centerModalWithoutBg[cssProp];
      modStyle[cssProp] = value;
    }
  }
  return {
    bgStyle,
    modStyle
  };
};
const getModalSize = (size = "md") => {
  if (["sm", "md", "xl"].indexOf(size) === -1) size = "md";
  const windowsWidth = window.innerWidth;
  let device = "";
  if (windowsWidth < 480) device = "mobile";else if (windowsWidth >= 480 && windowsWidth < 768) device = "tab";else if (windowsWidth >= 768 && windowsWidth < 1280) device = "desktop";else device = "big";
  return styles.widths[device][size];
};
export const colorLighter = (col, amt) => {
  let usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  const num = parseInt(col, 16);
  let red = (num >> 16) + amt;
  if (red > 255) red = 255;else if (red < 0) red = 0;
  let blue = (num >> 8 & 0x00ff) + amt;
  if (blue > 255) blue = 255;else if (blue < 0) blue = 0;
  let green = (num & 0x0000ff) + amt;
  if (green > 255) green = 255;else if (green < 0) green = 0;
  return (usePound ? "#" : "") + (green | blue << 8 | red << 16).toString(16);
};