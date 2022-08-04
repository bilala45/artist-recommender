import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setUserCreds } from "../spotify.js";

const AboutModal = () => {
  // retrieve tokens from url params on initial render
  useEffect(() => {
    setUserCreds();
  }, []);

  // router hook to navigate to different react page
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-slate-200 rounded-xl px-14 pt-10 text-center max-w-screen-md">
        <h1 className="text-3xl font-semibold text-teal-600">
          Welcome to amplify!
        </h1>
        <div className="text-xl pt-4 text-left">
          Let's make sure we're all on the same page.
        </div>
        <div className="text-xl pt-4 text-left">
          Use the search bar to look up an artist. We'll use your listening
          history to find 5 songs by that artist that we think you'll like best.
        </div>
        <div className="text-lg pt-4 pb-6 text-center">Happy discovering!</div>
        <button
          className="bg-slate-700 w-40 text-white rounded-full py-2 mb-8 text-sm hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-black"
          onClick={() => {
            navigate("/search");
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
