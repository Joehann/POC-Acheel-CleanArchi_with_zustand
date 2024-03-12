import { RestaurantGateway } from '../../core-logic/gateways/restaurant.gateway'
import { Restaurant } from '../../core-logic/models/Restaurant'
import { restaurants } from '../in-memory/restaurants.in-memory'

const restaurantHttpActionsStub: RestaurantGateway = {
  getRestaurants: async (): Promise<Restaurant[]> => {
    return restaurants
  },
  addRestaurant: async (restaurant: Restaurant): Promise<void> => {
    //
  },
}

export default restaurantHttpActionsStub
