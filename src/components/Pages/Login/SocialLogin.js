import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useToken from "../../utilites/useToken";
import Google from "./../../../images/Googlee.png";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(gUser);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname;

  useEffect(() => {
    if (gUser && token) {
      navigate(from, { replace: true });
    }
  }, [gUser, token, from, navigate]);

  const handleGoogleSignUp = async () => {
    signInWithGoogle();
    // await console.log(gUser.user);
    const displayName = await gUser.user.displayName;
    const email = await gUser.user.email;
    const photoURL = await gUser.user.photoURL;

    const user = {
      displayName,
      email,
      photoURL,
    };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    // console.log(user);
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignUp}
        className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white"
      >
        <img src={Google} alt="" className="w-6" /> SignUp with GooGle
      </button>
      <button className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white">
        <i className="fa-brands fa-facebook-square text-2xl"></i> SignUp with
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
