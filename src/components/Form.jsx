import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username or Email id" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
