'use client'
import { ReactElement } from 'react'
import UserList from '../client/modules/user/ui/react/sections/UserList'
import useUserManagementStore from '../client/modules/user/ui/store/UserManagementStore'

export default function Home() {
  const { display } = useUserManagementStore()
  const displayData: DisplayData = {
    list: {
      component: UserList,
    },
  }

  const Component = displayData[display].component
  return <Component />
}

type DisplayData = {
  [uuid: string]: {
    component: () => ReactElement
  }
}
