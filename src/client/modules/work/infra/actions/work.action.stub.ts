import { WorkGateway } from '../../core-logic/gateways/works.gateway'
import { Work } from '../../core-logic/models/Work'
import { works } from '../pool-data/works.pool-data'

const workHttpActionsStub: WorkGateway = {
  getWorks: async (): Promise<Work[]> => {
    return works
  },
}

export default workHttpActionsStub
