import getWorkFormatter from '../../core-logic/formatters/get-works.formatter'
import { WorkGateway } from '../../core-logic/gateways/works.gateway'
import { Work } from '../../core-logic/models/Work'

const workHttpActions: WorkGateway = {
  getWorks: async (): Promise<Work[]> => {
    const res = await fetch('http://localhost:3000/api/get-works')
    return getWorkFormatter(await res.json())
  },
}

export default workHttpActions
