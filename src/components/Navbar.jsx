import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="pacifico-regular">
        Tushar Damahe <br />
        Chat App
      </span>

      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <LogoutIcon className="logoutIcon" onClick={() => signOut(auth)} />
      </div>
    </div>
  );
};

export default Navbar;
