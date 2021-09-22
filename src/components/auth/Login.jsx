import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Input from "./../inputs/Input";

const Login = ({ onLogin }) => {
  const { register, handleSubmit } = useForm({ mode: "onTouched" });

  const onSubmit = data => onLogin(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <Input
          register={register}
          placeholder="Email Address"
          type="email"
          label="Email Address"
          name="email"
          required
        />
        <Input
          register={register}
          placeholder="Password"
          type="password"
          label="Password"
          name="password"
          required
        />
        <input type="submit" value="Sign In" className="w-100" />
      </Form>
      <Link to="/auth/forgot-password">Forgot Password?</Link>
      <p className="mt-3">
        Don't have an account? <Link to="/auth/register">Register</Link>
      </p>
    </>
  );
};

export default Login;

export const Form = styled.form`
  width: 80%;
  max-width: 60%;
  text-align: center;
`;
