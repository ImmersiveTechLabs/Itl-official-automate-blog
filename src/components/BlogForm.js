// components/BlogForm.js

export default function BlogForm({ onFormSubmit }) {
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      // Extract data from the form
      const formData = {
        title: event.target.title.value,
        subtitle: event.target.subtitle.value,
        content: event.target.content.value,
        image: event.target.image.value,
        tags: event.target.tags.value.split(','), // Assuming tags are comma-separated
        innerImages: event.target.innerImages.value.split(',').map(link => link.trim())
      };
  
      onFormSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="subtitle" placeholder="subTitle" required />
        <textarea name="content" placeholder="Content" required />
        <input type="text" name="image" placeholder="Image URL" required />
        <input type="text" name="tags" placeholder="Tags,Separated,By,Comma" required />
        <input type="text" name="innerImages" placeholder="innerImages" required />
        <button type="submit">Submit</button>
      </form>
    );
  }
  