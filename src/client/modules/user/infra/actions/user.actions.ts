import getUserFormatter from '../../core-logic/formatters/get-users.formatter'
import { UserGateway } from '../../core-logic/gateways/users.gateway'
import { User } from '../../core-logic/models/User'

const userHttpActions: UserGateway = {
  getUsers: async (): Promise<User[]> => {
    const res = await fetch('http://localhost:3000/api/get-users')
    return getUserFormatter(await res.json())
  },
}

export default userHttpActions
