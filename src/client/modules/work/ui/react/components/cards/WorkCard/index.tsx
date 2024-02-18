import { ReactElement } from 'react'
import style from './work-card.module.css'
import type { Work } from '@/client/modules/work/core-logic/models/Worksrc'

const WorkCard = ({ data }: WorkCardProps): ReactElement => {
  return (
    <div className={style['work-card']}>
      <p>Firstname : {data.firstname}</p>
      <p>Lastname : {data.lastname}</p>
      <p>Title: {data.title}</p>
      <p>For : {data.for}</p>
      <button>Modifier</button>
    </div>
  )
}

export default WorkCard

type WorkCardProps = {
  data: Work
}
