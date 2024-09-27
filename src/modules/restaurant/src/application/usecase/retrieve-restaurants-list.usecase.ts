import { RestaurantCollection } from '../../domain/restaurant.collection'
import { Restaurant } from '../../infrastructure/resource/entity/Restaurant'
import formatter from './retrieve-restaurants-list.dto'
import sortArrayObjectByKey from '@/core/src/infrastructure/utils/array/sortArrayByKey'

const retrieveRestaurantsList: retrieveRestaurantsListType = async (gateway) => {
  const restaurants = await gateway.findAll()
  const formattedRestaurants = formatter(restaurants)

  const sortRestaurantsByName = sortArrayObjectByKey<Restaurant>('name')
  return sortRestaurantsByName(formattedRestaurants)
}

export default retrieveRestaurantsList

type retrieveRestaurantsListType = (
  gateway: RestaurantCollection
) => Promise<Restaurant[]>
