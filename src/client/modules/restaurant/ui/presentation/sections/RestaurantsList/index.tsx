'use client'
import RestaurantCard from '../../components/cards/RestaurantCard'
import style from './restaurants-list.module.css'
import useRestaurantStore from '../../../store/restaurantStore'
import PrimaryButton from '@/client/common/react/components/buttons/PrimaryButton'

const RestaurantsList = () => {
  const store = useRestaurantStore()

  if (store.restaurants.length === 0) return <p>Loading...</p>
  return (
    <div className={style['restaurants-list']}>
      <div className={style['title-line']}>
        <h1>Liste des restaurants</h1>
        <PrimaryButton
          label="Choisir un restaurant"
          onClick={() => store.setDisplay('choose')}
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
