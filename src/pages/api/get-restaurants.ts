import { restaurants } from '@/client/modules/restaurant/infra/pool-data/restaurants.pool-datasrc'
import { NextApiRequest, NextApiResponse } from 'next'

const otherRestaurants = [
  {
    uuid: '1a9bafc0-4203-489b-803a-aee336404648',
    name: 'burger king',
    type: 'fast-food',
  },
  {
    uuid: '2a9bafc0-4203-489b-803a-aee336404648',
    name: 'le sicilien',
    type: 'italian',
  },
]

const getRestaurants = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([...restaurants, ...otherRestaurants])
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the restaurant' })
  }
}

export default getRestaurants
