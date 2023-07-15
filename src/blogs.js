import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import BlogPage from './BlogPage';
import Footer from './components/footer';
import './blogs.css';

const strapiUrl = 'https://strapi-demo-app-zyay.onrender.com/api/blogs';

const UserData = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(strapiUrl);
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (postId) => {
    navigate(`/blogs/${postId}`);
  };

  return (
    <div className="blogsPage">
      <div className="blogs-title">
        <img alt='' src='blogs.svg'></img>
      </div>
      <div className='blogs-container'>
        {blogPosts.map((post) => (
          <ProjectCard
            key={post.id}
            screenshot={require('./ProjectPageElements/FFmpeg_screenshot.jpeg')}
            projectName={post.attributes.title}
            description={post.attributes.description}
            link={`/blogs/${post.id}`}
            onClick={() => handleCardClick(post.id)}
          />
        ))}
      </div>

      <Footer className="footer" />
    </div>
  );
};

export default UserData;
