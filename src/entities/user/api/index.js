import { instance } from '../../../shared/api'

const getUsers = async () => await instance.get('/users')

export { getUsers }
