import { create } from 'zustand'
import { Work } from '../../core-logic/models/Work'

const useWorkStore = create<WorkStoreType>((set) => ({
  works: [],
  setWorks: (works) => set(() => ({ works })),
  display: 'list',
  setDisplay: () => set((state) => ({ display: state.display })),
  currentlyEditing: '',
  setCurrentlyEditing: () =>
    set((state) => ({ currentlyEditing: state.currentlyEditing })),
}))

export default useWorkStore

type WorkStoreType = {
  works: Work[]
  setWorks: (works: Work[]) => void
  display: 'list' | 'create' | 'edit'
  setDisplay: (display: 'list' | 'create' | 'edit') => void
  currentlyEditing: string
  setCurrentlyEditing: (id: string) => void
}
