import { instance } from '@/shared/api'

const getAllPosts = () => instance.get('/posts')

export { getAllPosts }
