import { WorkGateway } from '../../gateways/works.gateway'
import { Work } from '../../models/Work'

const getWorksList = async (gateway: WorkGateway): Promise<Work[]> => {
  const works = await gateway.getWorks()
  const formattedWorks = formatter(works)
  console.log()
  return sortWorks(formattedWorks)
}

export default getWorksList

const formatter = (works: Work[]): Work[] => {
  return works.map((work) => {
    return {
      ...work,
      firstname: capitalizeWords(work.firstname),
      lastname: capitalizeExceptInBrackets(work.lastname),
      title: capitalizeFirstLetter(work.title),
      for: work.for ? capitalizeFirstLetter(work.for) : '-',
    }
  })
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function capitalizeExceptInBrackets(input: string): string {
  const wordRegex = /[^\s\[\]]+/g

  return input.replace(wordRegex, (match) => {
    if (match.startsWith('(') && match.endsWith(')')) {
      return match
    } else {
      return match.charAt(0).toUpperCase() + match.slice(1).toUpperCase()
    }
  })
}

function sortWorks(works: Work[]): Work[] {
  return works.sort((a, b) => {
    const lastNameComparison = a.lastname.localeCompare(b.lastname)
    if (lastNameComparison !== 0) {
      return lastNameComparison
    }

    const firstNameComparison = a.firstname.localeCompare(b.firstname)
    if (firstNameComparison !== 0) {
      return firstNameComparison
    }

    return a.title.localeCompare(b.title)
  })
}
