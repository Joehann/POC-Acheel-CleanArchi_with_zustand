import { ReactElement } from 'react'
import style from './work-card.module.css'
import type { Work } from '@/client/modules/work/core-logic/models/Worksrc'

const WorkCard = ({ data }: WorkCardProps): ReactElement => {
  return (
    <div className={style['work-card']}>
      <p>Prénom : {data.firstname}</p>
      <p>Nom : {data.lastname}</p>
      <p>Tel: {data.phone}</p>
      <button>Modifier</button>
    </div>
  )
}

export default WorkCard

type WorkCardProps = {
  data: Work
}
