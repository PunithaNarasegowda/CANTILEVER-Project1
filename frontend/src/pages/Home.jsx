import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import PostCard from '../components/PostCard';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.get('/posts');
        setPosts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const confirmed = window.confirm('Delete this post?');
    if (!confirmed) {
      return;
    }

    await api.delete(`/posts/${postId}`);
    setPosts((currentPosts) => currentPosts.filter((post) => post._id !== postId));
  };

  return (
    <div className="stack-large">
      <section className="hero surface">
        <div>
          <p className="eyebrow">MERN blog website</p>
          <h1>Publish stories, manage posts, and sign in securely.</h1>
          <p className="hero-copy">
            A modern blog platform with registration, login, and full CRUD support for authors who want a clean workflow.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Create account
            </Link>
            <Link to="/posts/new" className="secondary-button">
              Write a post
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <img
            className="hero-panel-image"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
            alt="Notebook, coffee, and laptop for writing blog posts"
          />
          <div className="hero-panel-content">
            <p className="hero-panel-kicker">Featured workspace</p>
            <strong>Write, edit, and publish your next post.</strong>
            <div className="hero-stats">
              <div>
                <span>Posts</span>
                <strong>Unlimited</strong>
              </div>
              <div>
                <span>Readers</span>
                <strong>Growing</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Stories</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>All blog posts</h2>
          <p>{loading ? 'Loading posts...' : `${posts.length} posts`}</p>
        </div>
        {loading ? (
          <div className="surface empty-state">Loading content...</div>
        ) : posts.length ? (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                owned={user && post.author?._id === user.id}
                onEdit={null}
                onDelete={user && post.author?._id === user.id ? () => handleDelete(post._id) : null}
              />
            ))}
          </div>
        ) : (
          <div className="surface empty-state">No posts yet. Create the first one.</div>
        )}
      </section>
    </div>
  );
};

export default Home;
