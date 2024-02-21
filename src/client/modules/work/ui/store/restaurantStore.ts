import { create } from 'zustand'
import { Restaurant } from '../../core-logic/models/Restaurant'

const useRestaurantStore = create<RestaurantStoreType>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set(() => ({ restaurants })),
  display: 'list',
  setDisplay: (display, currentCard) =>
    set((state) => ({ ...state, display, currentCard })),
  currentCard: null,
  setcurrentCard: () => set((state) => ({ currentCard: state.currentCard })),
}))

export default useRestaurantStore

type RestaurantStoreType = {
  restaurants: Restaurant[]
  setRestaurants: (restaurants: Restaurant[]) => void
  display: 'list' | 'create' | 'edit'
  setDisplay: (
    display: 'list' | 'create' | 'edit',
    currentCard: string | null
  ) => void
  currentCard: string | null
  setcurrentCard: (id: string) => void
}
