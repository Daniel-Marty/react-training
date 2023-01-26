import React from "react";
import cl from "./profile.module.css";
import Posts from "./Posts/Posts";

let Profile = () => {
  return (
    <div className={cl.profile}>
      <img
        src="https://media.istockphoto.com/id/872646276/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%83%D1%80%D1%8F%D1%87%D0%B8%D0%B9-%D0%B7%D0%B0%D1%85%D1%96%D0%B4-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=612x612&w=0&k=20&c=FRTuID_x86tqRD_WphdhMmgcJl9kN8HvitLCWqsCS_0="
        alt="cock"
      />
      <Posts profilePage={props.state.profilePage} dispatch={props.dispatch} />
      Profile info
    </div>
  );
};

export default Profile;
