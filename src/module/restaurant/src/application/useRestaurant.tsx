import useRestaurantStore from "../../store/restaurantStore"
import restaurantHttpActions from "../infrastructure/action/restaurant.actions"
import randomArrayIndexProvider from "../infrastructure/provider/randomArrayIndexProvider"
import uuidProvider from "../infrastructure/provider/uuidProvider"
import { RestaurantForm } from "../infrastructure/resource/entity/Restaurant"
import chooseRestaurant from "./usecase/choose-restaurant.usecase"
import createNewRestaurant from "./usecase/create-new-restaurant.usecase"
import retrieveRestaurantsList from "./usecase/retrieve-restaurants-list.usecase"

const useRestaurant: UseRestaurant = () => {
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
    finally {
      store.setDisplay("list")
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

export default useRestaurant

type UseRestaurant = () => {
  handleGetRestaurants: () => Promise<void>
  handleChooseRestaurantRandomly: () => void
  handleCreateRestaurant: (restaurant: RestaurantForm) => Promise<void>
  handleResetRestaurant: () => void
}
