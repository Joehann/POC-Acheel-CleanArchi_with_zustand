import { restaurants } from '@/client/modules/restaurant/infra/pool-data/restaurants.pool-datasrc'
import { NextApiRequest, NextApiResponse } from 'next'

const getRestaurants = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([...restaurants, ...restaurants])
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the restaurant' })
  }
}

export default getRestaurants
