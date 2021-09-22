import React from "react";
import styled from "styled-components";

const Input = ({ label, name, register, type, required, ...props }) => {
  return (
    <FormGroup>
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <input
        type={type || "text"}
        className="form-control"
        {...register(name, { required })}
        id={name}
        required={required}
        {...props}
      />
    </FormGroup>
  );
};

export default Input;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    text-align: left;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
`;
