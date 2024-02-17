import { NextApiRequest, NextApiResponse } from 'next'

const users = [
  { id: 1, firstname: 'john', lastname: 'doe', phone: '069988776655' },
  { id: 2, firstname: 'Jane', lastname: 'Doe', phone: '069988776655' },
  { id: 3, firstname: 'james', lastname: 'doe', phone: '069988776655' },
  { id: 4, firstname: 'Janet', lastname: 'Doe', phone: '069988776655' },
  { id: 5, firstname: 'Jenny', lastname: 'Doe', phone: '069988776655' },
  { id: 6, firstname: 'Jack', lastname: 'Doe', phone: '069988776655' },
  { id: 7, firstname: 'Jill', lastname: 'Doe', phone: '069988776655' },
  { id: 8, firstname: 'Jude', lastname: 'Doe', phone: '069988776655' },
]

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(users)
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the user' })
  }
}

export default getUsers
