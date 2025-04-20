// EditPost.js
import { useNavigate, useParams } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id);
  
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const postToEdit = existingPosts.find(post => post.id === postId);

  const handleSubmit = (updatedData) => {
    const updatedPosts = existingPosts.map(post => 
      post.id === postId ? { ...post, ...updatedData } : post
    );
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  if (!postToEdit) {
    return <div className="not-found">Post not found</div>;
  }

  return (
    <div className="edit-post-page">
      <h1>Edit Post</h1>
      <BlogForm 
        initialData={postToEdit} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}

export default EditPost;