import { instance } from '@/shared/api'

const getAllPosts = async () => await instance.get('/posts')

export { getAllPosts }
