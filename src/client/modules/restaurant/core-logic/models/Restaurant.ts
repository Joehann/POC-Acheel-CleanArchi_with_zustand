export type Restaurant = {
  uuid: string
  name: string
  type: string
}

export type RestaurantForm = Omit<Restaurant, 'uuid'>
