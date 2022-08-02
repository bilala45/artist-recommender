import { getAccessToken } from "../spotify.js";
import axios from "axios";

const Artist = ({ id, name, img }) => {
  const handleArtistClick = async () => {
    // retrieve access token from local storage
    const accessToken = getAccessToken();

    // send response to search submit endpoint to get artist discography
    const response = await axios.get(
      "http://localhost:3001/api/search/submit",
      {
        params: { accessToken, artistId: id },
      }
    );
    console.log(response);
  };

  return (
    <button
      onClick={handleArtistClick}
      className="h-[4.5rem] flex items-center w-full hover:bg-emerald-300 hover:rounded-md hover:cursor-pointer"
    >
      <img
        className="ml-3 max-h-14 w-14 rounded-full"
        src={img}
        alt={name}
      ></img>
      <div className="text-lg font-bold tracking-wider pl-4 pr-8">{name}</div>
    </button>
  );
};

export default Artist;
