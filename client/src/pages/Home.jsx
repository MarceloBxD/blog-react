import React from "react";
import { Link } from "react-router-dom";
import "../style.scss";

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      photo:
        "https://images.unsplash.com/photo-1610395697869-8b5f1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Post 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      photo:
        "https://images.unsplash.com/photo-1610395697869-8b5f1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Post 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      photo:
        "https://images.unsplash.com/photo-1610395697869-8b5f1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Post 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      photo:
        "https://images.unsplash.com/photo-1610395697869-8b5f1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.photo} alt="photo can't load" className="img" />
            <div className="post-info">
              <Link to={`/posts/${post.id}`}>
                <h1 className="title">{post.title}</h1>
              </Link>
              <div className="post-desc">{post.desc}</div>
              <button>read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
