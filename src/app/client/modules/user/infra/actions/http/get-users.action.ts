import { User } from '../../../models/User'
import getUserFormatter from '../../../core-logic/formatters/get-users.formatter'

const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:3000/api/get-users')
  return getUserFormatter(await res.json())
}

export default getUsers
