import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post";

export const Posts = () => {
  const posts = useSelector(state => state.posts.posts)
  


  if (!posts.length) {
    return "Постов пока нет";
    
  }
  
  return posts.map((post) => <Post post={post} key={post.id} />);
  
}



