import instance from './instance'

const getAllPosts = async () => {
  const result = await instance.get('/posts')
  console.log(result)
  return result
}

export { getAllPosts }
