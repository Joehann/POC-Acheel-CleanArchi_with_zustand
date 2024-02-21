import restaurantHttpActionsStub from '../../../infra/actions/restaurant.action.stub'
import { restaurants } from '../../../infra/pool-data/restaurants.pool-data'
import getRestaurantsList from '../get-restaurants-list/get-restaurants-list.usecase'
import chooseRestaurant from './choose-restaurant.usecase'

describe('Choose Restaurant Usecase', () => {
  const choose = chooseRestaurant(restaurants)
  it('should return first array element', () => {
    const result = choose(0)
    expect(result).toEqual(restaurants[0])
  })

  it('should return second array element', () => {
    const result = choose(1)
    expect(result).toEqual(restaurants[1])
  })
})
