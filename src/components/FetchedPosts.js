import React from "react";
import { fetchPosts } from "../redux/fetchedPostsReducer";
import { useDispatch, useSelector } from "react-redux";
import FetchPost from "./FetchPost";
import Spiner  from "./Spiner";

function FetchedPosts() {
  const dispach = useDispatch();

  const fetchP = useSelector((state) => state.fetchP.items);
  const postStatus = useSelector((state) => state.fetchP.status);
  const error = useSelector((state) => state.fetchP.error);

  
  // if (postStatus === 'idle') {
  //   return (
  //     <button
  //       type="button"
  //       className="btn btn-primary"
  //       onClick={() => dispach(fetchPosts()) }
  //     >
  //       Загрузка
  //     </button>

  //   );
  // }

  let content;

  if (postStatus === "loading") {
    content = <Spiner/>;
  } else if (postStatus === "succeeded") {
    content = fetchP.map((post) => <FetchPost post={post} key={post.id} />);
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }
  
  return <div>
    {content}
    <button
        type="button"
        className="btn btn-primary my-3"
        onClick={() => dispach(fetchPosts()) }
      >
        Загрузка
      </button>
  </div>;


}

export default FetchedPosts;
