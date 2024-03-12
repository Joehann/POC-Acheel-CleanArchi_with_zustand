import { RestaurantGateway } from '../../core-logic/gateways/restaurant.gateway'
import { Restaurant } from '../../core-logic/models/Restaurant'

const restaurantHttpActions: RestaurantGateway = {
  getRestaurants: async (): Promise<Restaurant[]> => {
    const res = await fetch('http://localhost:3000/api/get-restaurants')
    return await res.json()
  },
  addRestaurant: async (restaurant: Restaurant): Promise<void> => {
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
