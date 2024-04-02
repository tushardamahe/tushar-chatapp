import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCallIcon className="img" />
          <PersonAddAltIcon className="img" />
          <MoreHorizIcon className="img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
