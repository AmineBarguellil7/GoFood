import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Login() {


  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:4000/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json=await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return <div>
    <NavBar />
    <div className="container">
        <form className="row g-3" onSubmit={HandleSubmit}>
          <div className="col-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Sign up
            </button>
            <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user
            </Link>
          </div>
        </form>
      </div>
    </div>;
}
