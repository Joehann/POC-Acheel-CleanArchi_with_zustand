import { ReactElement } from "react"
import useRestaurantStore from "../../../store/restaurantStore"
import style from "./choose-restaurant.module.css"
import RestaurantCard from "../../component/cards/RestaurantCard"
import PrimaryButton from "@/core/view/components/buttons/PrimaryButton"
import useRestaurant from "@/modules/restaurant/src/application/useRestaurant"

const ChooseRestaurant = (): ReactElement => {
  const store = useRestaurantStore()
  const presenter = useRestaurant()

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
