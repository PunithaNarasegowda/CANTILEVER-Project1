import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PostCard from '../components/PostCard';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data } = await api.get('/posts/mine');
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const confirmed = window.confirm('Delete this post?');
    if (!confirmed) {
      return;
    }
    await api.delete(`/posts/${postId}`);
    fetchPosts();
  };

  return (
    <div className="stack-large">
      <section className="surface dashboard-header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Hello, {user?.name}</h1>
          <p>Manage your posts from one place.</p>
        </div>
        <Link to="/posts/new" className="primary-button">
          New post
        </Link>
      </section>

      <section>
        <div className="section-header">
          <h2>Your posts</h2>
          <p>{loading ? 'Loading...' : `${posts.length} posts`}</p>
        </div>
        {loading ? (
          <div className="surface empty-state">Loading your posts...</div>
        ) : posts.length ? (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                owned
                onEdit={() => navigate(`/posts/${post._id}/edit`)}
                onDelete={() => handleDelete(post._id)}
              />
            ))}
          </div>
        ) : (
          <div className="surface empty-state">No posts yet. Publish your first article.</div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
