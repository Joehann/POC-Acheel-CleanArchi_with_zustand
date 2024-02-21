import { ReactElement } from 'react'
import useRestaurantStore from '../../../store/restaurantStore'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'
import style from './choose-restaurant.module.css'

const ChooseRestaurant = (): ReactElement => {
  const store = useRestaurantStore()

  console.log(store.restaurants)

  return (
    <div className={style['choose-restaurant']}>
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

export default ChooseRestaurant
