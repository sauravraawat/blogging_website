import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(savedPosts);
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="home-page">
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        <BlogList posts={posts} onDelete={handleDelete} />
      ) : (
        <p className="no-posts">No blog posts yet. Add one!</p>
      )}
    </div>
  );
}

export default Home;