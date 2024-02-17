import userHttpActionsStub from '../../infra/actions/user.action.stub'
import getUserFormatter from './get-users.formatter'

describe('Format fetched users data to display', () => {
  it('should return formatted users data', async () => {
    const fetchedData = await userHttpActionsStub.getUsers()

    const formattedUsers = getUserFormatter(fetchedData)
    const expectedData = [
      {
        uuid: '03a77bb5-2e60-4ed7-ab55-90faec26668f',
        firstname: 'Scott',
        lastname: 'JOPLIN',
        phone: '06 99 88 77 66 55',
      },
      {
        uuid: '37287d87-58c9-485b-89c0-1a8035067ba8',
        firstname: 'Johnny',
        lastname: 'HALLIDAY',
        phone: '06 88 77 66 55 44',
      },
      {
        uuid: '5c4e7f6d-4e9b-4b5c-9a8d-6f5a223c7b6f',
        firstname: 'Johnny',
        lastname: 'B. GOOD',
        phone: '06 77 66 55 44 33',
      },
      {
        uuid: 'd6f6d7f7-4b5c-4e9b-9a8d-5c7b6f5a5a3c',
        firstname: 'Janis',
        lastname: 'JOPLIN',
        phone: '06 65 54 43 33 22',
      },
      {
        uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a354b6f',
        firstname: 'Jimi',
        lastname: 'HENDRIX',
        phone: '06 54 43 32 22 11',
      },
      {
        uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a354b6f',
        firstname: 'Benny',
        lastname: 'B',
        phone: 'non renseigné',
      },
    ]

    expect(formattedUsers).toEqual(expectedData)
  })
})
