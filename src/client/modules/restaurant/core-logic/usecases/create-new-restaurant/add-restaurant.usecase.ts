import { RestaurantGateway } from '../../gateways/restaurant.gateway'
import { Restaurant } from '../../models/Restaurant'

const createNewRestaurant =
  async (gateway: RestaurantGateway) => (restaurant: Restaurant) => {
    gateway.addRestaurant(restaurant)
  }

export default createNewRestaurant
