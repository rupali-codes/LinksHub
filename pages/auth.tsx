// auth.tsx
import React from "react";
import firebase from "../firebase/client";
import {auth} from "../firebase/client";
// Configure FirebaseUI.




function SignInScreen() {
  return (
    <div>
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
    </div>
  );
}

export default SignInScreen;
