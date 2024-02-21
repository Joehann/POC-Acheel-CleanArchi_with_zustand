import Input from '@/client/core-react/components/inputs/Inputsrc'
import { ReactElement } from 'react'
import useRestaurantStore from '../../../store/restaurantStore'
import PrimaryButton from '@/client/core-react/components/buttons/PrimaryButtonsrc'

const EditRestaurant = (): ReactElement => {
  const store = useRestaurantStore()
  const currentRestaurant = store.restaurants.find(
    (w) => w.uuid === store.currentCard
  )

  if (!currentRestaurant) {
    return <div>Restaurant not found</div>
  }
  return (
    <div>
      <Input
        value={currentRestaurant.firstname}
        name="firstname"
        onChange={() => null}
        label="Prénom :"
      />
      <Input
        value={currentRestaurant.lastname}
        name="lastname"
        onChange={() => null}
        label="Nom :"
      />
      <Input
        value={currentRestaurant.title}
        name="title"
        onChange={() => null}
        label="Titre :"
      />
      <Input
        value={currentRestaurant.for ?? ''}
        name="for"
        onChange={() => null}
        label="Pour :"
      />
      <PrimaryButton
        label="Annuler"
        onClick={() => {
          store.setDisplay('list', null)
        }}
      />
    </div>
  )
}

export default EditRestaurant
