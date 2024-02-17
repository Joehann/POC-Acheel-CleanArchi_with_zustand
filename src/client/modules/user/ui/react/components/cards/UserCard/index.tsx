import { ReactElement } from 'react'
import style from './user-card.module.css'
import type { User } from '@/client/modules/user/core-logic/models/Usersrc'
import useUserManagementStore from '@/client/modules/user/ui/store/UserManagementStoresrc'

const UserCard = ({ data }: UserCardProps): ReactElement => {
  const { setDisplay } = useUserManagementStore()
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
