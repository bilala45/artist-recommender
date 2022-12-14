import ExampleWebpage from "../../assets/imgs/Example-webpage.png";
import ExamplePhone from "../../assets/imgs/Example-phone.png";
import SiteDemo from "../../assets/imgs/SiteDemo.mp4";
import PhoneDemo from "../../assets/imgs/PhoneDemo.mp4";

const LoginSitePreview = () => (
  <div>
    {/* <img
      className="rounded-xl hidden sm:block shadow-black shadow-2xl"
      src={ExampleWebpage}
      alt="Amplify website demo"
    ></img> */}
    <video
      autoPlay
      muted
      loop
      className="rounded-xl hidden sm:block shadow-black shadow-2xl"
    >
      <source src={SiteDemo} type="video/mp4" />
    </video>
    {/* <img
      className="rounded-lg sm:hidden w-fit w-xs max-w-xs text-center"
      src={ExamplePhone}
      alt="Amplify website demo"
    ></img> */}
    <video
      autoPlay
      muted
      loop
      className="rounded-lg sm:hidden w-fit max-w-xs shadow-black shadow-2xl"
    >
      <source src={PhoneDemo} type="video/mp4" />
    </video>
  </div>
);

export default LoginSitePreview;
