import React from "react";

function Post({ inputText, date, name}) {
  return (
    <div className="post">
      <h2>{name}</h2>
      <h5>{date}</h5>
      <p>
        {inputText}
      </p>
    </div>
  );
}

export default Post;
