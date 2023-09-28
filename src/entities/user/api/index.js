import { instance } from '../../../shared/api'

const getUsers = () => instance.get('/users')

export { getUsers }
