export const findUsersByName = (users, searchString) => {
  return users?.filter((el) => el.name.toLowerCase().includes(searchString?.toLowerCase()))
}

export const findUserById = (users, id) => {
  return users?.find((el) => el.id === id)
}
