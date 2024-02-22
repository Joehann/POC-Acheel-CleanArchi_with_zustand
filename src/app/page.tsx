'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import useRestaurantPresenter from '@/client/modules/restaurant/ui/presentation/presenters/useRestaurant.presentersrc'
import ChooseRestaurant from '@/client/modules/restaurant/ui/presentation/sections/ChooseRestaurantsrc'
import RestaurantsList from '@/client/modules/restaurant/ui/presentation/sections/RestaurantsListsrc'
import useRestaurantStore from '@/client/modules/restaurant/ui/store/restaurantStoresrc'
import { ReactElement, useEffect } from 'react'

export default function Home() {
  const store = useRestaurantStore()
  const presenter = useRestaurantPresenter()

  useEffect(() => {
    void presenter.handleGetRestaurants()
  }, [])

  const displayData: DisplayData = {
    choose: {
      component: ChooseRestaurant,
    },
    list: {
      component: RestaurantsList,
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
