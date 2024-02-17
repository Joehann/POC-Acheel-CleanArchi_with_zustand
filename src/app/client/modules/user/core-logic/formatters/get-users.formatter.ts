import { User } from '../../models/User'

const getUserFormatter = (users: User[]): User[] => {
  return users.map((user) => {
    return {
      ...user,
      firstname: capitalizeWords(user.firstname),
      lastname: user.lastname.toUpperCase(),
      phone: formatPhoneNumber(user.phone),
    }
  })
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

const formatPhoneNumber = (phoneNumber: string | undefined) => {
  if (!phoneNumber) return 'non renseigné'
  const cleanedNumber = phoneNumber.trim().replace(/\D/g, '') as string
  return cleanedNumber.match(/.{1,2}/g)?.join(' ')
}

export default getUserFormatter
