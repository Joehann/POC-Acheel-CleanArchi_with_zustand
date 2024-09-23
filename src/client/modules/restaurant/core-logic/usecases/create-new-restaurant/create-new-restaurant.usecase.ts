import { RestaurantGateway } from '../../gateways/restaurant.gateway'
import { Restaurant, RestaurantForm } from '../../models/Restaurant'

const createNewRestaurant =
   (gateway: RestaurantGateway, uuidProvider: () => string) => async (restaurant: RestaurantForm) => {
    const restaurantWithUuid = { ...restaurant, uuid: uuidProvider() }
    gateway.createRestaurant(restaurantWithUuid)
  }

export default createNewRestaurant
