import { ReactElement, useState } from "react";
import style from "./create-restaurant.module.css"
import PrimaryButton from "@/client/common/react/components/buttons/PrimaryButton";
import useRestaurantPresenter from "../../presenters/useRestaurant.presenter";

const CreateRestaurant = (): ReactElement => {
const presenter = useRestaurantPresenter()
  const [form, setForm] = useState<{ name: string; type: string }>({
    name: '',
    type: '',
  })

  const setFormValue = (key: keyof typeof form, event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [key]: event.target.value })
  }

  return (
    <div className={style["create-restaurant"]}>
      <h1>Ajouter un restaurant</h1>
      <form>
        <div className={style["form-group"]}>
          <label htmlFor="name">Nom</label>
          <input type="text" value={form.name} onChange={(e) => setFormValue('name', e)} />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="type">Type</label>
          <input type="text" value={form.type} onChange={(e) => setFormValue('type', e)} />
        </div>
      </form>
      <PrimaryButton
        label="Ajouter"
        onClick={() => presenter.handleCreateRestaurant(form)}
      />
    </div>
  )
}

export default CreateRestaurant