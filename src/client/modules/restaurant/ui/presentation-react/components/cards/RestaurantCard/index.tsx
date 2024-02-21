import { ReactElement } from 'react'
import style from './restaurant-card.module.css'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'
import useRestaurantStore from '../../../../store/restaurantStore'
import { Restaurant } from '@/client/modules/restaurant/core-logic/models/Restaurantsrc'

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
