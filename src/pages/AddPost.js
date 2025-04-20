// AddPost.js
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

function AddPost() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const newPost = {
      id: Date.now(),
      ...formData
    };
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  return (
    <div className="add-post-page">
      <h1>Add New Post</h1>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddPost;