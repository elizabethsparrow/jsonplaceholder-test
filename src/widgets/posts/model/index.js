const findUsersByName = (users, searchString) => {
  return users?.filter((el) => el.name.toLowerCase().includes(searchString?.toLowerCase()))
}

const findPostsByUserId = (posts, ids) => {
  return posts?.filter((el) => ids.includes(el.userId))
}
const findUserById = (users, id) => {
  return users?.find((el) => el.id === id)
}

export { findPostsByUserId, findUsersByName, findUserById }
