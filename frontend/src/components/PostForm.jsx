import { useState } from 'react';

const PostForm = ({ initialValues, onSubmit, submitLabel }) => {
  const [form, setForm] = useState(
    initialValues || {
      title: '',
      excerpt: '',
      content: '',
      coverImage: ''
    }
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    const result = await onSubmit(form);
    if (result?.ok === false) {
      setError(result.message);
    }
    setSaving(false);
  };

  return (
    <form className="surface form-panel" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Title
          <input name="title" value={form.title} onChange={handleChange} placeholder="A sharp headline" required />
        </label>
        <label>
          Cover image URL
          <input name="coverImage" value={form.coverImage} onChange={handleChange} placeholder="https://..." />
        </label>
      </div>
      <label>
        Excerpt
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="A short preview of the post"
          maxLength={200}
          required
        />
      </label>
      <label>
        Content
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write the full story here"
          className="large-textarea"
          required
        />
      </label>
      {error ? <p className="error-banner">{error}</p> : null}
      <button className="primary-button" type="submit" disabled={saving}>
        {saving ? 'Saving...' : submitLabel}
      </button>
    </form>
  );
};

export default PostForm;
