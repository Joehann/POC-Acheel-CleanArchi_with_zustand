/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from 'react'
import RestaurantCard from '../../components/cards/RestaurantCard'
import style from './restaurants-list.module.css'
import useRestaurantPresenter from '../../presenters/useRestaurant.presenter'
import useRestaurantStore from '../../../store/restaurantStore'

const RestaurantsList = () => {
  const store = useRestaurantStore()
  const presenter = useRestaurantPresenter()

  useEffect(() => {
    void presenter.handleGetRestaurants()
  }, [])

  if (!store.restaurants) return <p>Loading...</p>
  return (
    <div className={style['restaurants-list']}>
      {store.restaurants.map((u) => (
        <RestaurantCard key={u.uuid} data={u} />
      ))}
    </div>
  )
}

export default RestaurantsList
