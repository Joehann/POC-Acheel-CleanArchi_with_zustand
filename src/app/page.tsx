"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import ChooseRestaurant from "@/modules/restaurant/view/page/ChooseRestaurant"
import CreateRestaurant from "@/modules/restaurant/view/page/CreateRestaurant"
import RestaurantsList from "@/modules/restaurant/view/page/RestaurantsList"
import useRestaurantStore from "@/modules/restaurant/store/restaurantStore"
import { ReactElement, useEffect } from "react"
import useRestaurant from "@/modules/restaurant/src/application/useRestaurant"

export default function Home() {
  const store = useRestaurantStore()
  const presenter = useRestaurant()

  useEffect(() => {
    void presenter.handleGetRestaurants()
  }, [])

  const displayData: DisplayData = {
    choose: ChooseRestaurant,
    list: RestaurantsList,
    create: CreateRestaurant,
  }

  const Component = displayData[store.display]
  return <Component />
}

type DisplayData = {
  [key in 'choose' | 'list' | 'create']: () => ReactElement
}
