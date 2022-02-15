import React from "react";
import "./index.css";

function Input(props) {
  const {
    placeholder,
    error,
    title,
    label,
    disabled,
    helperText,
    startIcon,
    endIcon,
    fullWidth
  } = props;

  const keyInput = parseInt(Math.random() * 1000);

  function iconStart() {
    if (startIcon) {
      return { paddingLeft: "50px" };
    }
    if (endIcon) {
      return { paddingRight: "50px" };
    }
    return {};
  }



  return (
    <div className={`input${fullWidth?'-full':''}`}>
      {props.title ? <code>{title}</code> : false}
      {startIcon ? (
        <span className={`material-icons ${startIcon ? "start" : ""}`}>
          {startIcon}
        </span>
      ) : (
        false
      )}
      <div className="flex-column-r">
        <input
          id={`input-${keyInput}`}
          className={`${error ? "error" : ""}`}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          style={iconStart()}
        />
        <label htmlFor={`input-${keyInput}`}>{label}</label>
        <span>{helperText}</span>
      </div>
      {endIcon ? (
        <span className={`material-icons ${endIcon ? "end" : ""}`}>
          {endIcon}
        </span>
      ) : (
        false
      )}
    </div>
  );
}

export default Input;
