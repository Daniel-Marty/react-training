import React from "react";
import cl from "./Post.module.css";

let Post = (props) => {
  return (
    <div className={cl.item}>
      <img src='https://st4.depositphotos.com/23024470/24805/v/950/depositphotos_248058922-stock-illustration-vector-woman-vagina-icon-illustration.jpg'
        alt='v' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
