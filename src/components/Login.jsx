import { useForm } from "react-hook-form";
import UseAuth from "./hooks/UseAuth";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordResetModal from "../PasswordResetModal/PasswordResetModal";

//https://react-hook-form.com/get-started

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state || "/";

  const { signInUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //destructure from data
    const { email, password } = data;
    signInUser(email, password).then((result) => {
      if (result.user) {
        navigate(form);
      }
    });
  };

  return (
    <div className="hero min-h-[360px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className=" text-red-500">This field is required</span>
              )}
              <PasswordResetModal />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
