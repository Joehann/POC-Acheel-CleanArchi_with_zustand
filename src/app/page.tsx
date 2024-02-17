'use client'
import { useEffect } from 'react'

export default function Home() {
  const fetchUsers = async () => {
    const users = await fetch('http://localhost:3000/api/get-users')
    return await users.json()
  }

  useEffect(() => {
    void fetchUsers()
  }, [])
  return <>Test</>
}
