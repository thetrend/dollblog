import { Fragment } from 'react';

const Login = () => {
  return (
    <Fragment>
      <form>
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </Fragment>
  )
};

export default Login;