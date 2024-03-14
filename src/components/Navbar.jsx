const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Tushar Chat</span>
      <div className="user">
        <img
          src="https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span>Tushar</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
