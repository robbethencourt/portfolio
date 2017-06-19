const R = require('ramda')

// createListOfTags functions
const extractListOfTags = blogs => blogs.map(blog => blog.tags)
const flattenListOfTags = R.compose(R.flatten, extractListOfTags)
const uniqueListOfTags = list => R.uniq(list)
const listOfBlogTags = R.compose(uniqueListOfTags, flattenListOfTags)

const Helpers = {
  createListOfTags: function (blogList) {
    return listOfBlogTags(blogList)
  },
  blogsInCategory: function (blogs, category) {
    const categoryWithSpaces = R.replace('-', ' ', category)
    console.log(categoryWithSpaces)
    // filter blogs
    // call function on array of tags to filter and only include the tag that matches the category
    // filter the blogs.tags[0] to the categoryWithSpaces as that's the onl one that should return
    return blogs.filter(blog => blog.tags.filter(tag => tag === categoryWithSpaces))
  }
}

module.exports = Helpers
