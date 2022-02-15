import React from "react";
import "./index.css";

function TextArea(props) {
  const {
    placeholder,
    error,
    title,
    label,
    disabled,
    helperText,
    startIcon,
    endIcon,
    fullWidth,
    rows
  } = props;

  const keytextArea = parseInt(Math.random() * 1000);

  console.log(rows)

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
    <div className={`textarea${fullWidth?'-full':''}`}>
      {props.title ? <code>{title}</code> : false}
      {startIcon ? (
        <span className={`material-icons ${startIcon ? "start" : ""}`}>
          {startIcon}
        </span>
      ) : (
        false
      )}
      <div className="flex-column-r">
        <textarea
          id={`textarea-${keytextArea}`}
          className={`${error ? "error" : ""}`}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          style={iconStart()}
          rows={rows}
        />
        <label htmlFor={`textarea-${keytextArea}`}>{label}</label>
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

export default TextArea;
