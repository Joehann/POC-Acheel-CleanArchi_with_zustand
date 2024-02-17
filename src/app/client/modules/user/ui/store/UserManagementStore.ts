import { create } from 'zustand'
import { User } from '../../models/User'

const useUserManagementStore = create<UserManagementStoreType>((set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
  display: 'list',
  setDisplay: () => set((state) => ({ display: state.display })),
  currentlyEditing: '',
  setCurrentlyEditing: () =>
    set((state) => ({ currentlyEditing: state.currentlyEditing })),
}))

export default useUserManagementStore

type UserManagementStoreType = {
  users: User[]
  setUsers: (users: User[]) => void
  display: 'list' | 'create' | 'edit'
  setDisplay: (display: 'list' | 'create' | 'edit') => void
  currentlyEditing: string
  setCurrentlyEditing: (id: string) => void
}
