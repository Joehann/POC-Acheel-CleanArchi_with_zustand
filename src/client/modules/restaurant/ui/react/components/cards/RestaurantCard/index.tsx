import { ReactElement } from 'react'
import style from './restaurant-card.module.css'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'
import useRestaurantStore from '../../../../store/restaurantStore'
import { Restaurant } from '@/client/modules/restaurant/core-logic/models/Restaurantsrc'

const RestaurantCard = ({ data }: RestaurantCardProps): ReactElement => {
  const store = useRestaurantStore()
  return (
    <div className={style['restaurant-card']}>
      <p>Firstname : {data.firstname}</p>
      <p>Lastname : {data.lastname}</p>
      <p>Title: {data.title}</p>
      <p>For : {data.for}</p>
      <PrimaryButton
        label="Modifier"
        onClick={() => {
          store.setDisplay('edit', data.uuid)
        }}
      />
    </div>
  )
}

export default RestaurantCard

type RestaurantCardProps = {
  data: Restaurant
}
