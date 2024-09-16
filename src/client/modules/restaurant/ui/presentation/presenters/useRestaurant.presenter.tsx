import chooseRestaurant from "../../../core-logic/usecases/choose-restaurant/choose-restaurant.usecase"
import retrieveRestaurantsList from "../../../core-logic/usecases/retrieve-restaurant-list/retrieve-restaurants-list.usecase"
import restaurantHttpActionsStub from "../../../infra/actions/restaurant.actions.stub"
import restaurantHttpActions from "../../../infra/actions/restaurant.actions"
import randomArrayIndexProvider from "../../../infra/providers/randomArrayIndexProvider"
import useRestaurantStore from "../../store/restaurantStore"

const useRestaurantPresenter = () => {
  const gateway = restaurantHttpActions
  // const gateway = restaurantHttpActionsStub

  const store = useRestaurantStore()

  const handleGetRestaurants = async () => {
    const res = await retrieveRestaurantsList(gateway)
    store.setRestaurants(res)
  }

  const handleChooseRestaurantRandomly = () => {
    const randomIndex = randomArrayIndexProvider(store.restaurants)
    const chosenRestaurant = chooseRestaurant(store.restaurants)(randomIndex)
    store.setSelectedRestaurant(chosenRestaurant)
  }

  const handleResetRestaurant = () => {
    store.setSelectedRestaurant(null)
  }

  return {
    handleGetRestaurants,
    handleChooseRestaurantRandomly,
    handleResetRestaurant,
  }
}

export default useRestaurantPresenter
