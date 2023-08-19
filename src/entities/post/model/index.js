export const findPostsByUserId = (posts, ids) => {
  return posts?.filter((el) => ids.includes(el.userId))
}
