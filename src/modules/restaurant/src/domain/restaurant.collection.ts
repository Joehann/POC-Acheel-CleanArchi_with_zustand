import { Restaurant, RestaurantForm } from '../infrastructure/resource/entity/Restaurant'

export interface RestaurantCollection {
  findAll(): Promise<Restaurant[]> //TODO: findAll
  create(restaurant: Restaurant): Promise<void> //TODO: create
}

//findOneById
//getOneById