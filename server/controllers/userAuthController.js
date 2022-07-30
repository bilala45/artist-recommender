import crypto from "crypto";
import qs from "qs";
import { spotifyClientId, spotifyAuthRedirectURI } from "../../config.js";
import getUserAudioFeatures from "../spotifyAPI/userAudioFeatures.js";

// redirect user to spotify login page for authentication
const redirectAfterAuth = (req, res) => {
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: spotifyAuthRedirectURI,
    state: generateState(),
    scope: "user-top-read",
  });

  // returns 302 code (resource found)
  res.redirect(`https://accounts.spotify.com/authorize?${userAuthParams}`);
};

// retrieve user's top tracks and associated audio features
const retrieveUserTracks = async (req, res) => {
  // redirect makes request to callback route with code and state values
  const code = req.query.code || null;
  const state = req.query.state || null;

  // check for mismatching state value
  if (state != null) {
    // handle error in retrieving user's audio features
    try {
      const userAudioFeatures = await getUserAudioFeatures(code);
      res.sendStatus(200);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "state mismatch" });
  }
};

/**
 * utility functions
 */

// generates secure state value
const generateState = () => {
  const buf = crypto.randomBytes(32);
  // hex to avoid non-url safe characters
  return buf.toString("hex");
};

export { redirectAfterAuth, retrieveUserTracks };