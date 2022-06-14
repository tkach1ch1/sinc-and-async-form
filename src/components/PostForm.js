import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addNewPost, toggleStatusTrue, toggleStatusFalse} from "../redux/postsReducer"
import { Alert } from "./Alert";

function PostForm() {
  const [title, setTitle] = useState('')
  
  const status = useSelector(state => state.posts.status)
  
  const dispach = useDispatch()

  const onHandleChange = (event) => {
    setTitle(event.target.value);
   
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newPost = {
        title, id: Date.now().toString()  
    }
    console.log(newPost)

    if(title.trim()) {
      dispach(addNewPost(newPost))
    } else {
      
      dispach(toggleStatusTrue())
      
      setTimeout(() => {
        dispach(toggleStatusFalse())
      }, 2000)
    } 

   

    setTitle('')
    
  };

  return (
    <div>
      <h2>Form</h2>
      {status && <Alert />}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
        <input
            type="text"
            className= "form-control"
            id="title"
            value={title}
            name="title"
            onChange={onHandleChange}
            
          />  
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

export default PostForm;
