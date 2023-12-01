// pages/api/addBlog.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Current working directory:', process.cwd());

      const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
      console.log('Attempting to read file at:', filePath);

      if (!fs.existsSync(filePath)) {
        console.error('File does not exist:', filePath);
        return res.status(500).json({ message: 'File does not exist' });
      }

      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      console.log('Current file data:', fileData);

      const newId = fileData.length > 0 ? fileData[fileData.length - 1].id + 1 : 1;

      // convert title to slug
      const link = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

      // i want content replace <p class="c0"><span class="c5"></span></p> with blank space contnet come from req body
      var modifiedContent = req.body.content.replace(/<p class="c0"><span class="c5"><\/span><\/p>/g, '');

      

      const newBlog = {
        id: newId,
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: modifiedContent,
        image: req.body.image,
        tags: req.body.tags,
        link,
        date: {
          day: new Date().getDate(),
          month: new Date().toLocaleString('default', { month: 'long' })
        }
      };

      fileData.push(newBlog);

      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

      return res.status(200).json({ message: 'Blog added successfully!' });
    } catch (error) {
      console.error('An error occurred:', error);
      return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
