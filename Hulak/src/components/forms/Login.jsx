import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;