import { users } from '@/client/modules/user/infra/pool-data/users.pool-datasrc'
import { NextApiRequest, NextApiResponse } from 'next'

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([...users, ...users])
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the user' })
  }
}

export default getUsers
