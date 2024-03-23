import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "../assets/Netflix.png";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={NetflixLogo}></img>
      <div className="justify-between">
        <img
          className="w-8 h-8"
          src="https://imgs.search.brave.com/hhwqvsFRHqwddmNLFT97JAldr6yNi60l4ir0wftDGHs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24tZmlsZS11/c2VyLWljb24tYmxh/Y2stMDEtcG5nLTMx/MS5wbmc"
          alt="user-icon"
        ></img>
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Header;
