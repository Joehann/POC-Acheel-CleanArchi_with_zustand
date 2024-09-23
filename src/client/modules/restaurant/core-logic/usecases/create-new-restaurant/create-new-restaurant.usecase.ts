import { RestaurantGateway } from '../../gateways/restaurant.gateway'
import { Restaurant } from '../../models/Restaurant'

const createNewRestaurant =
   (gateway: RestaurantGateway, uuidProvider: () => string) => async (restaurant: Omit<Restaurant, 'uuid'>) => {
    gateway.createRestaurant(restaurant, uuidProvider)
  }

export default createNewRestaurant
