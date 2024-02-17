import { works } from '@/client/modules/work/infra/pool-data/works.pool-datasrc'
import { NextApiRequest, NextApiResponse } from 'next'

const getWorks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([...works, ...works])
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the work' })
  }
}

export default getWorks
