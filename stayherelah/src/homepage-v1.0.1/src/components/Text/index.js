import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h2: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
