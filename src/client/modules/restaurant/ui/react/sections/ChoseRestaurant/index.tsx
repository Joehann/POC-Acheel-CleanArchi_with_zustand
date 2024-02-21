import { ReactElement } from 'react'
import useRestaurantStore from '../../../store/restaurantStore'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'
import style from './chose-restaurant.module.css'

const ChoseRestaurant = (): ReactElement => {
  const store = useRestaurantStore()

  return (
    <div className={style['chose-restaurant']}>
      <div className={style['title-line']}>
        <h1>Choisir un restaurant</h1>
        <PrimaryButton
          label="Liste des restaurants"
          onClick={() => store.setDisplay('list')}
        />
      </div>
    </div>
  )
}

export default ChoseRestaurant
