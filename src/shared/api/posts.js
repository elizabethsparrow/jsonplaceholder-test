import instance from './instance'

const getAllPosts = async () => await instance.get('/posts')

export { getAllPosts }
