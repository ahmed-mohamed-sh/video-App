import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    const handleJoinRoom = () => {
        if (roomId) {
            navigate(`/room/${roomId}`);
        }
         else {
            alert("Please enter a room ID");
        }
    }

  return (
    <div>
      <h1>Welcome to the Video App</h1>
      <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} className="inputBox" placeholder="Enter room ID" />
        <button onClick={handleJoinRoom}>Join Room</button>
        </div>
  )
}

export default HomePage;
