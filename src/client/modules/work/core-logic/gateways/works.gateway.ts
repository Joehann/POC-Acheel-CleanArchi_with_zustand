import { Work } from '../models/Work'

export interface WorkGateway {
  getWorks(): Promise<Work[]>
}
