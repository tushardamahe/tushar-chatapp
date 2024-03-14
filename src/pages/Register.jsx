import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Frost ChatApp</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
            <p>You do have an account? Login</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
