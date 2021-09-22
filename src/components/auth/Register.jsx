import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "./../inputs/Input";
import { Form } from "./Login";

const Register = ({ onRegister }) => {
  const { register, handleSubmit } = useForm({ mode: "onTouched" });

  const onSubmit = data => onRegister(data);

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
        <input color="primary" type="submit" value="Sign Up" className="w-100" />
      </Form>
      <p>
        Already have an account? <Link to="/auth/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
