import { useState } from "react";
import UseAuth from "../components/hooks/UseAuth";

const PasswordResetModal = () => {

    const { sentResetPassword } = UseAuth();
    const [email, setEmail] = useState()
  const handleReset = (e) => {
    e.preventDefault();
    console.log(email);
    sentResetPassword(email)
    .then(() => {
        alert('Check your mail')
        console.log('Password reset email sent! to' , email)
        // Password reset email sent!
      })
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div onClick={handleReset} className="flex justify-center gap-4">
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary" type="submit">
              Reset
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PasswordResetModal;
