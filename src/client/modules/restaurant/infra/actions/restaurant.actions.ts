import { RestaurantGateway } from '../../core-logic/gateways/restaurant.gateway'
import { Restaurant } from '../../core-logic/models/Restaurant'

const restaurantHttpActions: RestaurantGateway = {
  getRestaurants: async (): Promise<Restaurant[]> => {
    const res = await fetch('http://localhost:3000/api/get-restaurants')
    return await res.json()
  },
}

export default restaurantHttpActions
