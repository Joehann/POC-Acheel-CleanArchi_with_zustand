import { User } from '../models/User'

export interface UserGateway {
  getUsers(): Promise<User[]>
}
