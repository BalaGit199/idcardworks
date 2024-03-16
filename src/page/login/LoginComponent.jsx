import React from "react";
import "./logincomponent.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { login } from "../../service/api";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    username: yup
      .string("username must be a string")
      .required("Username is Required"),
    password: yup
      .string("password must be a string")
      .required("password is Required"),
  });

  const onSubmit = () => {

    const sendLoginData = async () => {

        login(values).then((data) => {
          const message = data.data.message;
          if(message == 'Login Successfully'){
            console.log("data", data.data.message);
            navigate('/sample')
          }
          else{
            console.log(message);
          }
          
        }).catch((err) => {console.log('error occur',err.stack)})
    };

    sendLoginData();


  };
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  console.log("error", errors);
  const apiKey = process.env.REACT_APP_BASE_URL;

  console.log(`API Key: ${apiKey}`);
  return (
    <div className="login-main-container">
      <div className="login-inner-container">
        <div className="login-container">
          <header className="login-header">
            <p>ID-Card Login</p>
          </header>
          <div className="login-contant">
            <div className="login-contant-headings">
              <div className="heading-1">Login to Your ID-Card Account</div>
              <div className="heading-2">
                Enter your username & password to login
              </div>
            </div>
            <div className="login-contant-body">
              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <label>UserName</label>
                  <input
                    id="username"
                    defaultValue={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="username"
                    className={errors.username && touched.username && "errors"}
                  />
                  {errors.username && touched.username && (
                    <span className="error-span">{errors.username}</span>
                  )}
                </div>
                <div className="inputs">
                  <label>Password</label>
                  <input
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="password"
                    className={errors.username && touched.username && "errors"}
                  />
                  {errors.password && touched.password && (
                    <span className="error-span">{errors.password}</span>
                  )}
                </div>
                <div className="button-container">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
