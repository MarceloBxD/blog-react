import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import "../style.scss";

export const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq caractur abla dimasiado inspect mint flote ipsum dolor sit amet consecterur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq.",
      photo: `${image1}`,
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq",
      photo: `${image2}`,
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowqLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq",
      photo: `${image3}`,
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodowq",
      photo: `${image4}`,
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.photo} alt="photo can't load" className="img" />
            <div className="post-info">
              <Link className="link" to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
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
