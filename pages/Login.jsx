import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({});
  const submit = (e) => {
    e.preventDefault();
    if (!person.username || !person.password) return;
    setUser(person);
    navigate("/dashboard");
  };
  const changeHandler = (e) => {
    let name = e.target.name,
      value = e.target.value;

    setPerson({ ...person, [name]: value });
  };
  return (
    <form onSubmit={submit} onChange={changeHandler}>
      <input name="username" type="text" placeholder="enter username" />
      <input name="password" type="text" placeholder="enter password" />
      <input type="submit" />
    </form>
  );
};

export default Login;
