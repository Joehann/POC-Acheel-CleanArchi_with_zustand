import { ReactElement } from 'react'
import style from './user-card.module.css'
import type { User } from '@/app/client/modules/user/models/Usersrc'
import useUserManagementStore from '@/app/client/modules/user/ui/store/UserManagementStoresrc'

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
