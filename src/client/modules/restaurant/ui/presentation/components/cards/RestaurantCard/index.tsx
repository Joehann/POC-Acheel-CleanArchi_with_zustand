import { ReactElement } from 'react'
import style from './restaurant-card.module.css'
import { Restaurant } from '@/client/modules/restaurant/core-logic/models/Restaurant'

const RestaurantCard = ({ data }: RestaurantCardProps): ReactElement => {
  return (
    <div className={style['restaurant-card']}>
      <p>Nom : {data.name}</p>
      <p>Type : {data.type}</p>
    </div>
  )
}

export default RestaurantCard

type RestaurantCardProps = {
  data: Restaurant
}
