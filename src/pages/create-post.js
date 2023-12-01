
import BlogForm from '../components/BlogForm';

const NewBlog = () => {
  const onFormSubmit = async (formData) => {
    const response = await fetch('/api/addBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <BlogForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default NewBlog;
