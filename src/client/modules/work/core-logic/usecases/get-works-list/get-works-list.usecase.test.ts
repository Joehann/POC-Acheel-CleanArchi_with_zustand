import workHttpActionsStub from '../../../infra/actions/work.action.stub'
import getWorksList from './get-works-list.usecase'

describe('GetWorksListUsecase', () => {
  it('should return a formatted and sorted list of works', async () => {
    const gateway = workHttpActionsStub
    const works = await getWorksList(gateway)
    expect(works).toEqual(expectedWorks)
  })
})

const expectedWorks = [
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a355h4f',
    firstname: 'Benny',
    lastname: 'B.',
    title: 'Vous êtes fous',
    for: 'Voice',
  },
  {
    uuid: '5c4e7f6d-4e9b-4b5c-9a8d-6f5a223c7b6f',
    firstname: 'Ludwig',
    lastname: 'BEETHOVEN (van)',
    title: 'Moonlight sonata',
    for: 'Piano',
  },
  {
    uuid: '37287d87-58c9-485b-89c0-1a8035067ba8',
    firstname: 'Ludwig',
    lastname: 'BEETHOVEN (van)',
    title: 'Symphony no. 9',
    for: 'Orchestra',
  },
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a3784b6f',
    firstname: 'Duke',
    lastname: 'ELLINGTON',
    title: 'Take the a train',
    for: 'Big band',
  },
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f12a5a354b6f',
    firstname: 'Jimi',
    lastname: 'HENDRIX',
    title: 'Purple haze',
    for: 'Guitar',
  },
  {
    uuid: 'd6f6d7f7-4b5c-4e9b-9a8d-5c7b6f5a5a3c',
    firstname: 'Janis',
    lastname: 'JOPLIN',
    title: 'Piece of my heart',
    for: 'Voice',
  },
  {
    uuid: '03a77bb5-2e60-4ed7-ab55-90faec26668f',
    firstname: 'Scott',
    lastname: 'JOPLIN',
    title: 'Maple leaf rag',
    for: 'Piano',
  },
  {
    uuid: 'e7f6d6d7-5c4e-5j9b-9as8-6f5a5a354b6f',
    firstname: 'Théo',
    lastname: 'LAVABO',
    title: 'Comme aladin',
    for: '-',
  },
]
