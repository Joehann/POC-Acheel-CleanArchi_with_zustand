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
      firstname: capitalizeWords(restaurant.firstname),
      lastname: capitalizeExceptInBrackets(restaurant.lastname),
      title: capitalizeFirstLetter(restaurant.title),
      for: restaurant.for ? capitalizeFirstLetter(restaurant.for) : '-',
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

const capitalizeExceptInBrackets = (input: string): string => {
  const wordRegex = /[^\s\[\]]+/g

  return input.replace(wordRegex, (match) => {
    if (match.startsWith('(') && match.endsWith(')')) {
      return match
    } else {
      return match.charAt(0).toUpperCase() + match.slice(1).toUpperCase()
    }
  })
}

const sortRestaurants = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants.sort((a, b) => {
    const lastNameComparison = a.lastname.localeCompare(b.lastname)
    if (lastNameComparison !== 0) {
      return lastNameComparison
    }

    const firstNameComparison = a.firstname.localeCompare(b.firstname)
    if (firstNameComparison !== 0) {
      return firstNameComparison
    }

    return a.title.localeCompare(b.title)
  })
}
