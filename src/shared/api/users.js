import instance from './instance'

const getUsers = async () => {
  const result = await instance.get('/users')
  console.log(result)
  return result
}

export { getUsers }
