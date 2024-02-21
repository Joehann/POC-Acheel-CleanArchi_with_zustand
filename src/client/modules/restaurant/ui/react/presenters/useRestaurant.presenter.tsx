import getRestaurantsList from '../../../core-logic/usecases/get-restaurants-list/get-restaurants-list.usecase'
import restaurantHttpActionsStub from '../../../infra/actions/restaurant.action.stub'
import restaurantHttpActions from '../../../infra/actions/restaurant.actions'
import useRestaurantStore from '../../store/restaurantStore'

const useRestaurantPresenter = () => {
  const gateway = restaurantHttpActionsStub
  // const gateway = restaurantHttpActions

  const store = useRestaurantStore()

  const handleGetRestaurants = async () => {
    const res = await getRestaurantsList(gateway)
    store.setRestaurants(res)
  }

  return {
    handleGetRestaurants,
  }
}

export default useRestaurantPresenter
