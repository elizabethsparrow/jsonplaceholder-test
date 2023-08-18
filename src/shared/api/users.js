import instance from './instance'

const getUsers = async () => await instance.get('/users')

export { getUsers }
