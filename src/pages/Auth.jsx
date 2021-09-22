import React from "react";
import { Switch, Redirect, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import ForgotPassword from "./../components/auth/ForgotPassword";

import "bootstrap/dist/css/bootstrap.min.css";

const Auth = ({ user, setUser }) => {
  if (user) return <Redirect to="/data-collection" />;

  return (
    <Container className="auth">
      <FormContainer>
        <Link to="/" className="my-2">
          <img src="/img/logo.jfif" width="100" alt="Logo" />
        </Link>
        <Switch>
          <Route
            exact
            path="/auth/register"
            render={props => <Register onRegister={setUser} {...props} />}
          />
          <Route
            exact
            path="/auth/login"
            render={props => <Login onLogin={setUser} {...props} />}
          />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
          <Redirect to="/auth/login" />
        </Switch>
      </FormContainer>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 90%;
  padding: 2rem 1rem;
  border-radius: 10px;
  border: 1px solid black;
  h1 {
    text-align: center;
  }
`;
