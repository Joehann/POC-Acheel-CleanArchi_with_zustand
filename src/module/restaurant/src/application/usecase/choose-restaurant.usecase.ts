import { Restaurant } from '../../infrastructure/resource/entity/Restaurant'

const chooseRestaurant: chooseRestaurantType = (restaurantsList) => (index) => {
  return restaurantsList[index]
}

export default chooseRestaurant

type chooseRestaurantType = (
  restaurantsList: Restaurant[]
) => (index: number) => Restaurant
