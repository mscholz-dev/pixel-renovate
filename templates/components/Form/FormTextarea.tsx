import React, { FC, useState } from "react";

// interfaces
import { IFormTextarea } from "@/utils/interfaces";

const FormTextarea: FC<IFormTextarea> = ({
  id,
  handleChange,
  label,
  value,
  min,
  max,
  rows,
}) => {
  const [focus, setFocus] =
    useState<boolean>(false);

  const handleFocus = (): void => setFocus(true);
  const handleBlur = (): void => setFocus(false);

  return (
    <label
      className={`form-input${
        focus ? " form-input-focus" : ""
      }${
        value.length ? " form-input-filled" : ""
      }`}
    >
      <p className="form-input-title form-textarea-title">
        {label.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              transitionDelay: `${50 * index}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </p>

      <textarea
        className="form-input-control"
        id={id}
        onChange={handleChange}
        value={value}
        minLength={min}
        maxLength={max}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=""
        rows={rows}
      />
    </label>
  );
};

export default FormTextarea;
