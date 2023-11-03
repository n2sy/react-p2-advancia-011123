import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import LoginContext from "../store/LoginContext";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let [login, setLogin] = useState();
  let [pwd, setPwd] = useState();
  let [formValid, setFormValid] = useState(false);
  const LogCtx = useContext(LoginContext);
  const navigate = useNavigate();
  function changeLogin(e) {
    setLogin(e.target.value);
  }
  function changePwd(e) {
    setPwd(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    let rep = LogCtx.seConnecter({
      email: login,
      password: pwd,
    });
    if (rep) {
      navigate("/");
    }
  }

  useEffect(() => {
    setFormValid(login?.includes("@") && pwd?.length > 4);
    console.log(formValid);
  }, [login, pwd]);

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.login}>
          <label>Login</label>
          <input
            type="text"
            className="form-control"
            onChange={changeLogin}
          ></input>
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            onChange={changePwd}
          ></input>
        </div>
        <div className={styles.actions}>
          <button disabled={!formValid} type="submit">
            Add Film
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
