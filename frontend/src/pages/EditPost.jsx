import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleSubmit = async (form) => {
    try {
      const { data } = await api.put(`/posts/${id}`, form);
      navigate(`/posts/${data._id}`);
      return { ok: true };
    } catch (error) {
      return { ok: false, message: error.response?.data?.message || 'Failed to update post' };
    }
  };

  if (loading) {
    return <div className="surface empty-state">Loading post...</div>;
  }

  return (
    <div className="stack-large">
      <section className="surface page-title-card">
        <p className="eyebrow">Edit</p>
        <h1>Update post</h1>
        <p>Refine the headline, summary, or body copy.</p>
      </section>
      <PostForm
        submitLabel="Save changes"
        initialValues={{
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditPost;
