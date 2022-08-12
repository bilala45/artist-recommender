import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import {
  redirectAfterAuth,
  getUserAccessToken,
} from "./controllers/userAuthController.js";
import getSearchResults from "./spotifyAPI/getSearchResults.js";
import getArtistAudioFeatures from "./spotifyAPI/searchAudioFeatures.js";

// create express app
const app = express();

// security middleware
app.use(helmet()); // protect tech stack
app.use(cors()); // allow client requests

// misc middleware
app.use(morgan("tiny")); // logger

// might not even need this for our app since our home page is the react app's url, not the server's url
// // handles request to home page
// app.get("/", (req, res) => {
//   // combines res.status(200).send('OK')
//   // if we just send res.status(200), the request hangs
//   res.sendStatus(200);
// });

/**
 * User authentication routes
 */

// handles user authentication by redirecting to Spotify authentication page
app.get("/api/login", redirectAfterAuth);

// callback route to main page (after authentication)
app.get("/api/login/callback", getUserAccessToken);

/**
 * Search routes
 */

// handles searches
app.get("/api/search", async (req, res) => {
  const { accessToken, searchInput } = req.query;
  const artistsObj = await getSearchResults(accessToken, searchInput);
  res.json(artistsObj);
});

// handles submitting during search
app.get("/api/search/submit", async (req, res) => {
  const { accessToken, artistId } = req.query;
  const artistDiscObj = await getArtistAudioFeatures(accessToken, artistId);
  res.send(artistDiscObj);
});

// listen for requests at port
app.listen(port, () => {
  console.log(`Amplify server listening on port ${port}`);
});
