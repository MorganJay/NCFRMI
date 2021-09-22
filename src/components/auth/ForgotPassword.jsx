import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Form } from "./Login";
import Input from "./../inputs/Input";

const ForgotPassword = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = data => console.log(data);
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
        <input type="submit" value="Reset Password" className="w-100 mb-3" />
        <Link to="/auth/login" className="my-5">Remember your password?</Link>
      </Form>
    </>
  );
};

export default ForgotPassword;
