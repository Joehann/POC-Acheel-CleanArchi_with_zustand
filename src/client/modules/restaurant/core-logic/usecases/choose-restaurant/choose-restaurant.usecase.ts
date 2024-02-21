import { Restaurant } from '../../models/Restaurant'

const chooseRestaurant: chooseRestaurantType = (restaurantsList) => (index) => {
  return restaurantsList[index]
}

export default chooseRestaurant

type chooseRestaurantType = (
  restaurantsList: Restaurant[]
) => (index: number) => Restaurant
