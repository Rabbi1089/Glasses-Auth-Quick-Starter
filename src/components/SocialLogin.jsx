import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./hooks/UseAuth";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn, twitterLogin, facebookLogin } = UseAuth();

  //navigate
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const form = location?.state || "/";

  const HandleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(form);
      }
    });
  };
  // make a common function to get result

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        {" "}
        <button
          onClick={() => {
            HandleSocialLogin(googleSignIn);
          }}
          className="btn btn-sm btn-secondary m-4"
        >
          Google
        </button>
        <button
          onClick={() => {
            HandleSocialLogin(githubSignIn);
          }}
          className="btn btn-sm btn-secondary m-4"
        >
          GitHub
        </button>
        <button
          onClick={() => HandleSocialLogin(twitterLogin)}
          className="btn btn-sm btn-secondary m-4"
        >
          Twitter
        </button>
        <button
          onClick={() => HandleSocialLogin(facebookLogin)}
          className="btn btn-sm btn-secondary m-4"
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
