import { Link } from 'react-router-dom';

function BlogList({ posts, onDelete }) {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="blog-preview">
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <div className="blog-actions">
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => onDelete(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;