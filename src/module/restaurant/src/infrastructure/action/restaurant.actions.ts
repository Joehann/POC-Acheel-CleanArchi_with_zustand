import { RestaurantCollection } from '../../domain/restaurant.collection'
import { Restaurant } from '../resource/entity/Restaurant'

const restaurantHttpActions: RestaurantCollection = {
  findAll: async (): Promise<Restaurant[]> => {
    const res = await fetch('http://localhost:3000/api/get-restaurants')
    return await res.json()
  },
  create: async (restaurant: Restaurant): Promise<void> => {
    await fetch('http://localhost:3000/api/add-restaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    })
  },
}

export default restaurantHttpActions
