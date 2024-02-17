import { Work } from '../models/Work'

const getWorkFormatter = (works: Work[]): Work[] => {
  return works.map((work) => {
    return {
      ...work,
      firstname: capitalizeWords(work.firstname),
      lastname: work.lastname.toUpperCase(),
      phone: formatPhoneNumber(work.phone),
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

export default getWorkFormatter
