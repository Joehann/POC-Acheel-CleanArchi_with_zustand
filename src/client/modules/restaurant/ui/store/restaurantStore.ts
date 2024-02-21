import { create } from 'zustand'
import { Restaurant } from '../../core-logic/models/Restaurant'

const useRestaurantStore = create<RestaurantStoreType>((set) => ({
  display: 'choose',
  setDisplay: (display) => set((state) => ({ ...state, display })),
  restaurants: [],
  setRestaurants: (restaurants) => set(() => ({ restaurants })),
  selectedRestaurant: null,
  setSelectedRestaurant: (selectedRestaurant) =>
    set(() => ({ selectedRestaurant })),
}))

export default useRestaurantStore

type RestaurantStoreType = {
  display: 'list' | 'choose'
  setDisplay: (display: 'list' | 'choose') => void
  restaurants: Restaurant[]
  setRestaurants: (restaurants: Restaurant[]) => void
  selectedRestaurant: Restaurant | null
  setSelectedRestaurant: (selectedRestaurant: Restaurant) => void
}
