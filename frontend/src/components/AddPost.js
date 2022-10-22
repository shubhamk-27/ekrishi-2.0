import React from "react";

function AddPost({
  inputText,
  setInputText,
  name,
  setName,
  date,
  setDate,
  post,
  setPost,
}) {
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addPost = (e) => {
    e.preventDefault();
    setPost([
      ...post,
      { name: name, date: date, advise: inputText, id: Math.random() * 1000 },
    ]);
    setInputText("");
    setDate("");
    setName("");
  };

  return (
    <div className="form">
      <input
        id="s"
        onChange={nameHandler}
        value={name}
        type="text"
        placeholder="Name..."
      />
      <input
        id="s"
        onChange={dateHandler}
        value={date}
        type="date"
        placeholder="Date..."
      />
      <textarea
        id="l"
        onChange={inputTextHandler}
        value={inputText}
        placeholder="Write here..."
      />
      <button onClick={addPost}>POST</button>
    </div>
  );
}

export default AddPost;
