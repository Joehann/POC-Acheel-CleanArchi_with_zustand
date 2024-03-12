import { RestaurantGateway } from '../../core-logic/gateways/restaurant.gateway'
import { Restaurant } from '../../core-logic/models/Restaurant'
import { restaurants } from '../pool-data/restaurants.pool-data'

const restaurantHttpActionsStub: RestaurantGateway = {
  getRestaurants: async (): Promise<Restaurant[]> => {
    return restaurants
  },
  addRestaurant: async (restaurant: Restaurant): Promise<void> => {
    restaurants.push(restaurant)
  },
}

export default restaurantHttpActionsStub
