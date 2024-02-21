import { RestaurantGateway } from '../../gateways/restaurants.gateway'
import { Restaurant } from '../../models/Restaurant'

const getRestaurantsList = async (
  gateway: RestaurantGateway
): Promise<Restaurant[]> => {
  const restaurants = await gateway.getRestaurants()
  const formattedRestaurants = formatter(restaurants)
  return sortRestaurants(formattedRestaurants)
}

export default getRestaurantsList

const formatter = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants.map((restaurant) => {
    return {
      ...restaurant,
      name: capitalizeWords(restaurant.name),
      type: capitalizeFirstLetter(restaurant?.type),
    }
  })
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const sortRestaurants = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants.sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name)
    if (nameComparison !== 0) {
      return nameComparison
    } else {
      return 0
    }
  })
}
