import UseAuth from "./hooks/UseAuth";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn, twitterLogin } = UseAuth();
  console.log(twitterLogin);

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        {" "}
        <button
          onClick={() => {
            googleSignIn();
          }}
          className="btn btn-secondary m-4"
        >
          Google
        </button>
        <button
          onClick={() => {
            githubSignIn();
          }}
          className="btn btn-secondary m-4"
        >
          GitHub
        </button>
        <button
          onClick={() => twitterLogin()}
          className="btn btn-secondary m-4"
        >
          Twitter
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
