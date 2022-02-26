import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const [allData, setAllData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newData = { email: email, password: password };

    setAllData([...allData, newData]);
    console.log(allData);
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        {allData.map((curElem) => {
          return (
            <div>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Login;
