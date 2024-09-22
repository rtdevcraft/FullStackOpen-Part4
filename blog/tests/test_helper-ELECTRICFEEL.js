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
    author: 'Test Author',
    url: 'http://example.com/will-remove-soon',
    likes: 0,
  })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((u) => u.toJSON())
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
}
