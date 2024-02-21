import { create } from 'zustand'
import { Restaurant } from '../../core-logic/models/Restaurant'

const useRestaurantStore = create<RestaurantStoreType>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set(() => ({ restaurants })),
  display: 'chose',
  setDisplay: (display) => set((state) => ({ ...state, display })),
}))

export default useRestaurantStore

type RestaurantStoreType = {
  restaurants: Restaurant[]
  setRestaurants: (restaurants: Restaurant[]) => void
  display: 'list' | 'chose'
  setDisplay: (display: 'list' | 'chose') => void
}
