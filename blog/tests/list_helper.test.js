// const { test, describe } = require('node:test')
// const assert = require('node:assert')
// const listHelper = require('../utils/for_testing')

// test('dummy returns one', () => {
//   const blogs = []

//   const result = listHelper.dummy(blogs)
//   assert.strictEqual(result, 1)
// })

// describe('total likes', () => {
//   const blogs = [
//     {
//       _id: '66e246abb834fe30b814e340',
//       title: 'First Blog',
//       author: 'Mr. Devz',
//       url: 'https://firstblog.com',
//       likes: 4,
//       __v: 0,
//     },
//     {
//       _id: '66e246bdb834fe30b814e342',
//       title: 'Second Blog',
//       author: 'Mr. Devz',
//       url: 'https://secondblog.com',
//       likes: 2,
//       __v: 0,
//     },
//     {
//       _id: '66e246c6b834fe30b814e344',
//       title: 'Third Blog',
//       author: 'Mr. Devz',
//       url: 'https://thirdblog.com',
//       likes: 3,
//       __v: 0,
//     },
//     {
//       _id: '66e37fa275c731e749f739aa',
//       title: 'Fourth Blog',
//       author: 'Mr. Devz',
//       url: 'https://fourthblog.com',
//       likes: 0,
//       __v: 0,
//     },
//     {
//       _id: '66e37faf75c731e749f739ac',
//       title: 'Fifth Blog',
//       author: 'Mr. Devz',
//       url: 'https://fifthblog.com',
//       likes: 8,
//       __v: 0,
//     },
//   ]

//   test('when list has multiple blogs, equals the sum of likes', () => {
//     const result = listHelper.totalLikes(blogs)
//     assert.strictEqual(result, 17)
//   })

//   test('when list has only one blog, equals the likes of that', () => {
//     const result = listHelper.totalLikes([blogs[0]])
//     assert.strictEqual(result, 4)
//   })

//   test('when list is empty, total likes should be zero', () => {
//     const result = listHelper.totalLikes([])
//     assert.strictEqual(result, 0)
//   })
// })
