import SpotifyLogo from "../assets/Spotify_Logo_RGB_Black.png";

const Header = () => (
  // flexbox with items spaced between and padding on left and right
  // Set height of entire header
  // header stops growing at 1280px screen (auto margin fills margin accordingly after that size)
  <header className="flex justify-between items-center h-20">
    {/* title */}
    <h1 className="text-4xl font-semibold text-">amplify</h1>
    {/* spotify logo */}
    <img className="h-12" src={SpotifyLogo} alt="Spotify logo"></img>
  </header>
);

export default Header;
