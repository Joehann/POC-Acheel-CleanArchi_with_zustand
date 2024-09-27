import restaurantHttpActionsStub from '../../../src/infrastructure/action/restaurant.actions.stub'
import retrieveRestaurantsList from '../../../src/application/usecase/retrieve-restaurants-list.usecase'

describe('GetRestaurantsListUsecase', () => {
  it('should retrieve and return a formatted and sorted list of restaurants', async () => {
    const gateway = restaurantHttpActionsStub
    const restaurants = await retrieveRestaurantsList(gateway)
    expect(restaurants).toEqual(expectedRestaurants)
  })
})

const expectedRestaurants = [
  {
    uuid: '03a77bb5-2e60-4ed7-ab55-90faec26668f',
    name: 'Birdie',
    type: 'Burgers',
  },
  {
    uuid: 'd6f6d7f7-4b5c-4e9b-9a8d-5c7b6f5a5a3c',
    name: 'Frog',
    type: 'Brewery, pub',
  },
  {
    uuid: '5c4e7f6d-4e9b-4b5c-9a8d-6f5a223c7b6f',
    name: "Mc Donald's",
    type: 'Fast-food',
  },
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a3784b6f',
    name: 'O Berlinois',
    type: 'Kebab',
  },
  {
    uuid: '37287d87-58c9-485b-89c0-1a8035067ba8',
    name: 'Ozio',
    type: 'Italian',
  },
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f12a5a354b6f',
    name: 'The Honest Lawyer',
    type: 'Brewery, pub',
  },
  {
    uuid: 'e7f6d6d7-5c4e-4e9b-9a8d-6f5a5a355h4f',
    name: 'Zang',
    type: 'Chinese',
  },
]
