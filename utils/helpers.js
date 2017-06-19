const R = require('ramda')

const extractListOfTags = blogs => blogs.map(blog => blog.tags)
const flattenListOfTags = R.compose(R.flatten, extractListOfTags)
const uniqueListOfTags = list => R.uniq(list)
const listOfBlogTags = R.compose(uniqueListOfTags, flattenListOfTags)

const Helpers = {
  createListOfTags: function (blogList) {
    return listOfBlogTags(blogList)
  }
}

module.exports = Helpers
