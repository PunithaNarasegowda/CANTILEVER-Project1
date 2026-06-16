import { Link } from 'react-router-dom';

const PostCard = ({ post, owned = false, onEdit, onDelete }) => {
  return (
    <article className="post-card">
      <Link to={`/posts/${post._id}`} className="post-image-link">
        <img src={post.coverImage} alt={post.title} className="post-image" />
      </Link>
      <div className="post-card-body">
        <p className="meta-line">
          {post.author?.name || 'Admin'} · {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <h3>{post.title}</h3>
        <p className="excerpt">{post.excerpt}</p>
        <div className="card-actions">
          <Link to={`/posts/${post._id}`} className="text-link">
            Read more
          </Link>
          {owned && (
            <div className="inline-actions">
              <button type="button" className="ghost-button" onClick={onEdit}>
                Edit
              </button>
              <button type="button" className="danger-button" onClick={onDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
