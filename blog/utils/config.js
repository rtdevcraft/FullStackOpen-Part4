require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI =
  'mongodb+srv://hello:ESxze5Yrw3ERBt0o@blog.gyo5f.mongodb.net/?retryWrites=true&w=majority&appName=blog'

module.exports = {
  MONGODB_URI,
  PORT,
}
