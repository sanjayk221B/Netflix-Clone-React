import NetflixLogo from "../assets/Netflix.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-44" src={NetflixLogo}></img>
    </div>
  );
};
export default Header;
