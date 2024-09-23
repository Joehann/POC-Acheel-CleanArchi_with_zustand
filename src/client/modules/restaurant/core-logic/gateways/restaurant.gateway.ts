import { Restaurant, RestaurantForm } from '../models/Restaurant'

export interface RestaurantGateway {
  getRestaurants(): Promise<Restaurant[]>
  createRestaurant(restaurant: Restaurant): Promise<void>
}
