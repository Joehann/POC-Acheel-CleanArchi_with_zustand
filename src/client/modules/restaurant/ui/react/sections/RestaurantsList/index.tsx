'use client'
import RestaurantCard from '../../components/cards/RestaurantCard'
import style from './restaurants-list.module.css'
import useRestaurantStore from '../../../store/restaurantStore'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'

const RestaurantsList = () => {
  const store = useRestaurantStore()

  if (store.restaurants.length === 0) return <p>Loading...</p>
  return (
    <div className={style['restaurants-list']}>
      <div className={style['title-line']}>
        <h1>Listes des restaurants</h1>
        <PrimaryButton
          label="Retour"
          onClick={() => store.setDisplay('chose')}
        />
      </div>
      <div className={style['list']}>
        {store.restaurants.map((u) => (
          <RestaurantCard key={u.uuid} data={u} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantsList
