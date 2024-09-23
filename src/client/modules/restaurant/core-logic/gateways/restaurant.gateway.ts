import { Restaurant } from '../models/Restaurant'

export interface RestaurantGateway {
  getRestaurants(): Promise<Restaurant[]>
  createRestaurant(restaurant: Omit<Restaurant, 'uuid'>, uuidProvider: () => string): Promise<void>
}
