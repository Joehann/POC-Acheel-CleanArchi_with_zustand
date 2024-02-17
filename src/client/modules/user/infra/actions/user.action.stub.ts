import getUserFormatter from '../../core-logic/formatters/get-users.formatter'
import { UserGateway } from '../../core-logic/gateways/users.gateway'
import { User } from '../../core-logic/models/User'
import { users } from '../pool-data/users.pool-data'

const userHttpActionsStub: UserGateway = {
  getUsers: async (): Promise<User[]> => {
    return getUserFormatter(users)
  },
}

export default userHttpActionsStub
