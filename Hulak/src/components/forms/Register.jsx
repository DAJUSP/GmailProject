import React from 'react';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;