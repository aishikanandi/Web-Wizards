import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import Footer from './components/footer';
import './blogs.css'
const strapiUrl='http://localhost:1337/api/blogs';
const strapiUrlFull='http://localhost:1337/api/blogs?populate=*';
const UserData = () => {
  const [blogPosts, setBlogPosts] = useState([]);

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

  return (
    <div className='blogsPage'>
    <div className="blogs-title">
      <img alt='' src='blogs.svg'></img>
    </div>
    <div className='blogs-container'>
    {blogPosts.map((post) => (
        <ProjectCard key={post.id} post={post}
        screenshot={require('./ProjectPageElements/FFmpeg_screenshot.jpeg')}
        projectName={post.attributes.title}
        description={post.attributes.description}
        link="#"
      />
      ))}
    </div>
      <Footer className="footer" />
    </div>
  );
};


export default UserData;