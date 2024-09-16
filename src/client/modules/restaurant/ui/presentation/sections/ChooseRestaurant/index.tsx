import { ReactElement } from "react"
import useRestaurantStore from "../../../store/restaurantStore"
import style from "./choose-restaurant.module.css"
import RestaurantCard from "../../components/cards/RestaurantCard"
import useRestaurantPresenter from "../../presenters/useRestaurant.presenter"
import PrimaryButton from "@/client/common/react/components/buttons/PrimaryButton"

const ChooseRestaurant = (): ReactElement => {
  const store = useRestaurantStore()
  const presenter = useRestaurantPresenter()

  return (
    <div className={style["choose-restaurant"]}>
      <div className={style["title-line"]}>
        <h1>Vous voulez manger quoi ?</h1>
        <PrimaryButton
          label="Liste des restaurants"
          onClick={() => store.setDisplay("list")}
        />
      </div>
      <div className={style["choose-area"]}>
        <PrimaryButton
          label="Choisir aléatoirement"
          onClick={presenter.handleChooseRestaurantRandomly}
        />
        {store.selectedRestaurant ? (
          <>
            <RestaurantCard
              key={store.selectedRestaurant.uuid}
              data={store.selectedRestaurant}
            />
            <PrimaryButton
              label="Reset"
              onClick={presenter.handleResetRestaurant}
            />
          </>
        ) : (
          "Aucun restaurant choisi"
        )}
      </div>
    </div>
  )
}

export default ChooseRestaurant
