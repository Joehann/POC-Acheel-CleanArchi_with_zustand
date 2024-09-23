"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import useRestaurantPresenter from "@/client/modules/restaurant/ui/presentation/presenters/useRestaurant.presenter"
import ChooseRestaurant from "@/client/modules/restaurant/ui/presentation/sections/ChooseRestaurant"
import CreateRestaurant from "@/client/modules/restaurant/ui/presentation/sections/CreateRestaurant"
import RestaurantsList from "@/client/modules/restaurant/ui/presentation/sections/RestaurantsList"
import useRestaurantStore from "@/client/modules/restaurant/ui/store/restaurantStore"
import { ReactElement, useEffect } from "react"

export default function Home() {
  const store = useRestaurantStore()
  const presenter = useRestaurantPresenter()

  useEffect(() => {
    void presenter.handleGetRestaurants()
  }, [])

  const displayData: DisplayData = {
    choose:  ChooseRestaurant,
    list: RestaurantsList,
    create: CreateRestaurant,
    
  }

  const Component = displayData[store.display]
  return <Component />
}

type DisplayData = {
  [key in 'choose' | 'list' | 'create']: () => ReactElement
  
}
