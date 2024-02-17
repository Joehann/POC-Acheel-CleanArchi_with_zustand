/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from 'react'
import UserCard from '../../components/cards/UserCard'
import style from './user-list.module.css'
import useUserManagementStore from '../../../store/UserManagementStore'
import useUserPresenter from '../../presenters/useUser.presenter'

const UserList = () => {
  const store = useUserManagementStore()
  const presenter = useUserPresenter()

  useEffect(() => {
    void presenter.handleGetUsers()
  }, [])

  if (!store.users) return <p>Loading...</p>
  return (
    <div className={style['user-list']}>
      {store.users.map((u) => (
        <UserCard key={u.uuid} data={u} />
      ))}
    </div>
  )
}

export default UserList
