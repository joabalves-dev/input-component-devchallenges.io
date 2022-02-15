import React from "react";
import Input from "../Components/Input";
import "./Inputs.css";
import TextArea from "../Components/TextArea";

function Inputs() {
  return (
    <div className="inputs">
      <div className="title">
        <h1>Inputs</h1>
      </div>
      <div className="grid">
        <Input title="<Input />" label="label" placeholder="Placeholder" />
      </div>
      <div className="grid">
        <Input
          title="<Input error />"
          label="label"
          placeholder="Placeholder"
          error
        />
      </div>
      <div className="grid">
        <Input
          title="<Input disabled />"
          label="label"
          placeholder="Placeholder"
          disabled
        />
      </div>
      <div className="grid">
        <Input
          title="<Input helperText=”Some interesting text” />"
          label="label"
          placeholder="Placeholder"
          helperText="Some interesting text"
        />
        <Input
          title="<Input helperText=”Some interesting text”  error/>"
          label="label"
          placeholder="Placeholder"
          helperText="Some interesting text"
          error
        />
      </div>
      <div className="grid">
        <Input
          title="<Input startIcon />"
          label="label"
          placeholder="Placeholder"
          startIcon="call"
        />
        <Input
          title="<Input endIcon />"
          label="label"
          placeholder="Placeholder"
          endIcon="https"
        />
      </div>
      <div className="grid-full">
        <Input
          title="<Input fullWidth />"
          label="label"
          placeholder="Placeholder"
          fullWidth
        />
      </div>
      <div className="grid">
        <TextArea
          title="<Input multiline row=”4” />"
          label="label"
          placeholder="Placeholder"
          rows={4}
        />
      </div>
    </div>
  );
}

export default Inputs;
