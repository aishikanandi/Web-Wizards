import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogPage.css";
import Footer from "./components/footer";

const strapiUrl = "http://localhost:1337/api/blogs";

const BlogPage = () => {
  const { id } = useParams();
  console.log(id);
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${strapiUrl}/${id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }
const com="<---------------Your blog here--------------->";
  return (
    <div>
      <div className="blogPage-withoutfooter">
        <h1>{blogPost.data.attributes.title}</h1>
        <p className="blog-author">Author: {blogPost.data.attributes.author}</p>
        <p className="blog-date">Date: {blogPost.data.attributes.date}</p>
        <div id="blog-content">
          <p className="greyComment">{com}</p>
          <p>
            {blogPost.data.attributes.content.split(" ").map((word, index) => (
              <span
                key={index}
                className={`highlight-random-${index}`}
                style={{ color: getRandomColor() }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

function getRandomColor() {
  const colors = ["red", "white", " #157cd1", "white", "white", "green", "white", "white", "white", "white", "white", "white","white", "white", "white", "white", "white", "white" ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default BlogPage;
