import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      const { data } = await api.post('/posts', form);
      navigate(`/posts/${data._id}`);
      return { ok: true };
    } catch (error) {
      return { ok: false, message: error.response?.data?.message || 'Failed to create post' };
    }
  };

  return (
    <div className="stack-large">
      <section className="surface page-title-card">
        <p className="eyebrow">Write</p>
        <h1>Create a blog post</h1>
        <p>Use a clear title, strong excerpt, and useful body copy.</p>
      </section>
      <PostForm submitLabel="Publish post" onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
