import { Restaurant } from '../models/Restaurant'

export interface RestaurantGateway {
  getRestaurants(): Promise<Restaurant[]>
  addRestaurant(restaurant: Restaurant): Promise<void>
}
