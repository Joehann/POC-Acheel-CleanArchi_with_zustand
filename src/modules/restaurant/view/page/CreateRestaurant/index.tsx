import { ReactElement, useState } from "react";
import style from "./create-restaurant.module.css"
import PrimaryButton from "@/core/view/components/buttons/PrimaryButton";
import useRestaurant from "@/modules/restaurant/src/application/useRestaurant";
import updateFormValue from "@/core/src/infrastructure/utils/form/updateFormValue";

const CreateRestaurant = (): ReactElement => {
  const presenter = useRestaurant()
  const [form, setForm] = useState<{ name: string; type: string }>({
    name: '',
    type: '',
  })

  const set = updateFormValue(form, setForm)

  return (
    <div className={style["create-restaurant"]}>
      <h1>Ajouter un restaurant</h1>
      <form>
        <div className={style["form-group"]}>
          <label htmlFor="name">Nom</label>
          <input type="text" value={form.name} onChange={(e) => set('name', e)} />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="type">Type</label>
          <input type="text" value={form.type} onChange={(e) => set('type', e)} />
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