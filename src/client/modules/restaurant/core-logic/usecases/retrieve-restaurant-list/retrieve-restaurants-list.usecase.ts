import type { RestaurantGateway } from '../../gateways/restaurant.gateway'
import type { Restaurant } from '../../models/Restaurant'
import formatter from './retrieve-restaurants-list.formatter'
import sortArrayObjectByKey from '@/client/utils/array/sortArrayByKey'

const retrieveRestaurantsList: retrieveRestaurantsListType = async (gateway) => {
  const restaurants = await gateway.getRestaurants()
  const formattedRestaurants = formatter(restaurants)

  const sortRestaurantsByName = sortArrayObjectByKey<Restaurant>('name')
  return sortRestaurantsByName(formattedRestaurants)
}

export default retrieveRestaurantsList

type retrieveRestaurantsListType = (
  gateway: RestaurantGateway
) => Promise<Restaurant[]>
