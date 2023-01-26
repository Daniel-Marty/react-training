import React from "react";
import cl from "./Posts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
const Posts = (props) => {
  let postElements = props.posts.map((postInfo) => (
    <Post
      id={postInfo.id}
      message={postInfo.post}
      likesCount={postInfo.likesCount}
    />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    console.log(text);
  };
  return (
    <div className={cl.posts__block}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button className={cl.addPost__button} onClick={addPost}>
          Add post
        </button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default Posts;
