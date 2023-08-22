export const findPostByUserName = (posts, searchString) => {
  return posts?.filter((el) => el.user?.name?.toLowerCase().includes(searchString?.toLowerCase()))
}
