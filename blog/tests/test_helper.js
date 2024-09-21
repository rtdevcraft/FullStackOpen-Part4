const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'John Doe',
    url: 'http://example.com/html-easy',
    likes: 5,
  },
  {
    title: 'Browser can execute only JavaScript',
    author: 'Jane Smith',
    url: 'http://example.com/browser-javascript',
    likes: 10,
  },
]

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'Will remove this soon',
    author: 'Temporary Author',
    url: 'http://example.com/temp',
  })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
}
