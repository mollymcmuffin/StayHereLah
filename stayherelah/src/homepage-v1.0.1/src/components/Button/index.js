import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder15: "rounded-radius15" };
const variants = { FillRed700: "bg-red_700 text-white_A700" };
const sizes = { sm: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder15"]),
  variant: PropTypes.oneOf(["FillRed700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder15",
  variant: "FillRed700",
  size: "sm",
};

export { Button };
