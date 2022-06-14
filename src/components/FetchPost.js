import React from 'react';

function FetchPost( {post} ) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.name}</h5>
      </div>
    </div>
  );  
}

export default FetchPost;
