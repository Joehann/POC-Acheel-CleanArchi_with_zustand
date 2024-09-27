import { RestaurantCollection } from '../../domain/restaurant.collection'
import { Restaurant } from '../resource/entity/Restaurant'
import { restaurants } from '../../../test/double/in-memory-repository/restaurants.in-memory'

const restaurantHttpActionsStub: RestaurantCollection = {
  findAll: async (): Promise<Restaurant[]> => {
    return restaurants
  },
  create: async (restaurant: Restaurant): Promise<void> => {
    restaurants.push(restaurant)
  },
}

export default restaurantHttpActionsStub
