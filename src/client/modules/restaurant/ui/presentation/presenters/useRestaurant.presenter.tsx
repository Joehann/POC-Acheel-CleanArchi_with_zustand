import chooseRestaurant from "../../../core-logic/usecases/choose-restaurant/choose-restaurant.usecase"
import retrieveRestaurantsList from "../../../core-logic/usecases/retrieve-restaurant-list/retrieve-restaurants-list.usecase"
import restaurantHttpActionsStub from "../../../infra/actions/restaurant.actions.stub"
import restaurantHttpActions from "../../../infra/actions/restaurant.actions"
import randomArrayIndexProvider from "../../../infra/providers/randomArrayIndexProvider"
import useRestaurantStore from "../../store/restaurantStore"
import { Restaurant } from "../../../core-logic/models/Restaurant"
import createNewRestaurant from "../../../core-logic/usecases/create-new-restaurant/create-new-restaurant.usecase"
import uuidProvider from "../../../infra/providers/uuidProvider"

const useRestaurantPresenter: UseRestaurantPresenter = () => {
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

  const handleCreateRestaurant = async (restaurant: RestaurantForm) => {
    const createRestaurant = createNewRestaurant(gateway, uuidProvider)
    try {
      await createRestaurant(restaurant)
      const res = await retrieveRestaurantsList(gateway)
      store.setRestaurants(res)
    } catch (error) {
      //TODO: handle error
    }


  }

  const handleResetRestaurant = () => {
    store.setSelectedRestaurant(null)
  }

  return {
    handleGetRestaurants,
    handleChooseRestaurantRandomly,
    handleCreateRestaurant,
    handleResetRestaurant,
  }
}

export default useRestaurantPresenter

type UseRestaurantPresenter = () => {
  handleGetRestaurants: () => Promise<void>
  handleChooseRestaurantRandomly: () => void
  handleCreateRestaurant: (restaurant: RestaurantForm) => Promise<void>
  handleResetRestaurant: () => void
}

type RestaurantForm = Omit<Restaurant, 'uuid'>
