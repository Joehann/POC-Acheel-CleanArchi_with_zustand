import { RestaurantGateway } from '../../core-logic/gateways/restaurant.gateway'
import { Restaurant, RestaurantForm } from '../../core-logic/models/Restaurant'
import { restaurants } from '../in-memory/restaurants.in-memory'

const restaurantHttpActionsStub: RestaurantGateway = {
  getRestaurants: async (): Promise<Restaurant[]> => {
    return restaurants
  },
  createRestaurant: async (restaurant: Restaurant): Promise<void> => {
    restaurants.push(restaurant)
  },
}

export default restaurantHttpActionsStub
