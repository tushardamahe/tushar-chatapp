const Login = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Frost ChatApp</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button>Login</button>
            <p>You don`t have an account? Register</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
