'use client'
import EditRestaurant from '@/client/modules/restaurant/ui/react/sections/EditRestaurantsrc'
import RestaurantsList from '@/client/modules/restaurant/ui/react/sections/RestaurantsListsrc'
import useRestaurantStore from '@/client/modules/restaurant/ui/store/restaurantStoresrc'
import { ReactElement } from 'react'

export default function Home() {
  const store = useRestaurantStore()

  const displayData: DisplayData = {
    list: {
      component: RestaurantsList,
    },
    edit: {
      component: EditRestaurant,
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
