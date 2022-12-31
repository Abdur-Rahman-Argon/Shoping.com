import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useToken = (user) => {
  // const [users] = useAuthState(auth);
  const [token, setToken] = useState();
  useEffect(() => {
    const email = user?.email;
    const currentUser = { email: email };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const accessToken = result.accessToken;
        if (result.result.acknowledged) {
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        }
      });
  }, [user]);

  return [token];
};

export default useToken;
