import chooseRestaurant from '../../../core-logic/usecases/choose-restaurant/choose-restaurant.usecase'
import getRestaurantsList from '../../../core-logic/usecases/get-restaurants-list/get-restaurants-list.usecase'
import restaurantHttpActionsStub from '../../../infra/actions/restaurant.action.stub'
import restaurantHttpActions from '../../../infra/actions/restaurant.actions'
import randomArrayIndexProvider from '../../../infra/providers/randomArrayIndexProvider'
import useRestaurantStore from '../../store/restaurantStore'

const useRestaurantPresenter = () => {
  const gateway = restaurantHttpActions
  // const gateway = restaurantHttpActionsStub

  const store = useRestaurantStore()

  const handleGetRestaurants = async () => {
    const res = await getRestaurantsList(gateway)
    store.setRestaurants(res)
  }

  const handleChooseRestaurantRandomly = () => {
    const randomIndex = randomArrayIndexProvider(store.restaurants)
    const chosenRestaurant = chooseRestaurant(store.restaurants)(randomIndex)
    store.setSelectedRestaurant(chosenRestaurant)
  }

  return {
    handleGetRestaurants,
    handleChooseRestaurantRandomly,
  }
}

export default useRestaurantPresenter
