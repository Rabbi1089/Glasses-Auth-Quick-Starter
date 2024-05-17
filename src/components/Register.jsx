import { useForm } from "react-hook-form";
import UseAuth from "./hooks/UseAuth";
import {  useNavigate } from "react-router-dom";


const Register = () => {
  //navigate
  const navigate = useNavigate();
  const form = "/";

  const { createUser , updateUser} = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Destructure Email and password from data
    const { email, password,fullName,  imgUrl} = data;


    createUser(email, password).then(() => {
      updateUser(fullName ,imgUrl )
      .then(()=>{
        navigate(form);
        alert('user updated')
      })
    });
  };

  //after create a user need a observer
  return (
    //ctrl + alt + f
    <div>
      <div className="hero min-h-[560px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className=" text-red-800">This field is required</span>
                )}
              </div>
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
                  <span className=" text-red-800">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Image Url"
                  className="input input-bordered"
                  {...register("imgUrl")}
                />
                {errors.imgUrl && (
                  <span className=" text-red-800">This field is required</span>
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
                  <span className=" text-red-800">This field is required</span>
                )}

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
