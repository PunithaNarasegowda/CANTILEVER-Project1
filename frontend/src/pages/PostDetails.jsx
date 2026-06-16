import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const { data } = await api.get(`/posts/${id}`);
      setPost(data);
      setLoading(false);
    };

    loadPost();
  }, [id]);

  if (loading) {
    return <div className="surface empty-state">Loading post...</div>;
  }

  if (!post) {
    return <div className="surface empty-state">Post not found.</div>;
  }

  const canEdit = user && post.author?._id === user.id;
  const canDelete = canEdit;

  const handleDelete = async () => {
    const confirmed = window.confirm('Delete this post?');
    if (!confirmed) {
      return;
    }

    await api.delete(`/posts/${id}`);
    navigate('/dashboard');
  };

  return (
    <article className="surface detail-layout">
      <img className="detail-image" src={post.coverImage} alt={post.title} />
      <div className="detail-copy">
        <p className="meta-line">
          {post.author?.name || 'Unknown'} · {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <h1>{post.title}</h1>
        <p className="detail-excerpt">{post.excerpt}</p>
        <p className="detail-content">{post.content}</p>
        {canEdit ? (
          <div className="inline-actions">
            <Link to={`/posts/${post._id}/edit`} className="primary-button inline-button">
              Edit post
            </Link>
            {canDelete ? (
              <button type="button" className="danger-button inline-button" onClick={handleDelete}>
                Delete post
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default PostDetails;
