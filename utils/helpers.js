const R = require('ramda')

// createListOfCategories functions
const extractListOfCategories = blogs => blogs.map(blog => blog.categories)
const flattenListOfCategories = R.compose(R.flatten, extractListOfCategories)
const uniqueListOfCategories = list => R.uniq(list)
const listOfBlogCategories = R.compose(uniqueListOfCategories, flattenListOfCategories)

// blogsInCategory functions
const filterCategories = (categories, categoryWithSpaces) => categories
  .filter(category => category === categoryWithSpaces)

const Helpers = {
  createListOfCategories: function (blogList) {
    return listOfBlogCategories(blogList)
  },
  blogsInCategory: function (blogs, category) {
    const categoryWithSpaces = R.replace('-', ' ', category)
    return blogs
      .filter(blog => R.head(filterCategories(blog.categories, categoryWithSpaces)) === categoryWithSpaces)
  }
}

module.exports = Helpers
