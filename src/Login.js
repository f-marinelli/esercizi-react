import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    name: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleButton = () => {
    console.log(form);
  };

  return (
    <>
      {' '}
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      ></input>
      <input
        type="checkbox"
        name="remember"
        value={form.remember}
        onChange={handleChange}
      ></input>
      <button
        type="button"
        onClick={handleButton}
        disabled={!form.name || !form.password}
      >
        Login
      </button>
    </>
  );
};

export default Login;
