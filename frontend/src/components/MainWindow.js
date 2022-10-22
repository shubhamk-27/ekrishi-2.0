import React from "react";
import Post from "./Post";

function MainWindow({ inputText, date, name, post }) {
  let static_post = [
    {
      name: "Nirav N. Lengade",
      date: "11/03/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
    {
      name: "Shubham Koli",
      date: "15/03/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
    {
      name: "Tanmay Choudhari",
      date: "19/03/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
    {
      name: "Sujit Bhoir",
      date: "21/03/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
    {
      name: "Akhilesh P. Ketkar",
      date: "01/04/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
    {
      name: "Divyansh Mishra",
      date: "05/04/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: Math.random() * 1000,
    },
    {
      name: "Madhur Nirmal",
      date: "06/04/2022",
      advise:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: Math.random() * 1000,
    },
  ];

  return (
    <div className="main-window">
      {static_post.map((card) => (
        <Post
          inputText={card.advise}
          name={card.name}
          date={card.date}
          key={card.id}
        />
      ))}

      {post.map((card) => (
        <Post
          inputText={card.advise}
          name={card.name}
          date={card.date}
          key={card.id}
        />
      ))}
    </div>
  );
}

export default MainWindow;
