/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import UserCard from '../../components/cards/UserCard'
import style from './user-list.module.css'
import useUserManagementStore from '../../../store/UserManagementStore'
import getUsers from '../../../../infra/actions/http/get-users.action'

const UserList = () => {
  const { users, setUsers } = useUserManagementStore()

  console.log(users)

  const handleGetUsers = async () => {
    const res = await getUsers()
    setUsers(res)
  }

  useEffect(() => {
    void handleGetUsers()
  }, [])

  if (!users) return <p>Loading...</p>
  return (
    <div className={style['user-list']}>
      {users.map((u) => (
        <UserCard key={u.id} data={u} />
      ))}
    </div>
  )
}

export default UserList
