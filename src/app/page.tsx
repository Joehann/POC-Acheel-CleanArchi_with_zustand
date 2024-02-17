'use client'
import { useEffect, useState } from 'react'
import UserCard from './client/ui/core-react/components/cards/UserCard'

export default function Home() {
  const [users, setUsers] = useState<User[] | null>(null)

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/get-users')
    setUsers(await res.json())
  }

  useEffect(() => {
    void fetchUsers()
  }, [])
  if (!users) return <p>Loading...</p>
  return (
    <div className="cards">
      {users.map((u) => (
        <UserCard key={u.id} data={u} />
      ))}
    </div>
  )
}

export type User = {
  id: number
  firstname: string
  lastname: string
  phone: string
}
