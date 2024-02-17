import { ReactElement } from 'react'
import style from './user-card.module.css'
import { User } from '@/app/pagesrc'

const UserCard = ({ data }: UserCardProps): ReactElement => {
  return (
    <div className={style['user-card']}>
      <p>Prénom : {data.firstname}</p>
      <p>Nom : {data.lastname}</p>
      <p>Tel: {data.phone}</p>
      <button>Modifier</button>
    </div>
  )
}

export default UserCard

type UserCardProps = {
  data: User
}
