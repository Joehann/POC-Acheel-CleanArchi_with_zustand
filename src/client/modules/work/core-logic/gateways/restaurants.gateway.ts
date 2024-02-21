import { Restaurant } from '../models/Restaurant'

export interface RestaurantGateway {
  getRestaurants(): Promise<Restaurant[]>
}
