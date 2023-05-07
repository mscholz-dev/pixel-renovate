import React, { FC, useState } from "react";
import IconCheck from "@/public/icons/check.svg";

// interfaces
import { IFormCheckbox } from "@/utils/interfaces";

const FormCheckbox: FC<IFormCheckbox> = ({
  id,
  handleChange,
  label,
  checked,
}) => {
  const [focus, setFocus] =
    useState<boolean>(false);

  const handleFocus = (): void => setFocus(true);
  const handleBlur = (): void => setFocus(false);

  return (
    <label
      className={`form-checkbox${
        focus ? " form-checkbox-focus" : ""
      }${
        checked ? " form-checkbox-checked" : ""
      }`}
    >
      <span className="form-checkbox-icon">
        <IconCheck className="form-checkbox-icon-svg" />
      </span>

      <p className="form-checkbox-title">
        {label}
      </p>

      <input
        id={id}
        type="checkbox"
        className="form-checkbox-control"
        checked={checked}
        value={id}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

export default FormCheckbox;
