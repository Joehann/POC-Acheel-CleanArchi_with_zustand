import { RestaurantCollection } from '../../domain/restaurant.collection'
import { Restaurant, RestaurantForm } from '../../infrastructure/resource/entity/Restaurant'

const createNewRestaurant =
   (gateway: RestaurantCollection, uuidProvider: () => string) => async (restaurant: RestaurantForm) => {
    const restaurantWithUuid = { ...restaurant, uuid: uuidProvider() }
    gateway.create(restaurantWithUuid)
  }

export default createNewRestaurant
