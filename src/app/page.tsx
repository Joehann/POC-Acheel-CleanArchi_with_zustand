'use client'
import { ReactElement } from 'react'
import WorkList from '../client/modules/work/ui/react/sections/WorksList'
import useWorkStore from '@/client/modules/work/ui/store/workStoresrc'

export default function Home() {
  const store = useWorkStore()
  const displayData: DisplayData = {
    list: {
      component: WorkList,
    },
  }

  const Component = displayData[store.display].component
  return <Component />
}

type DisplayData = {
  [uuid: string]: {
    component: () => ReactElement
  }
}
