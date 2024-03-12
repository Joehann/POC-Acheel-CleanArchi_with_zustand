import { restaurants } from '../../../infra/pool-data/restaurants.pool-data'
import chooseRestaurant from './choose-restaurant.usecase'

describe('Choose Restaurant Usecase', () => {
  const choose = chooseRestaurant(restaurants)
  it('should return first array element', () => {
    const result = choose(0)
    expect(result).toEqual({
      uuid: '03a77bb5-2e60-4ed7-ab55-90faec26668f',
      name: 'birdie',
      type: 'burgers',
    })
  })

  it('should return second array element', () => {
    const result = choose(1)
    expect(result).toEqual({
      uuid: '37287d87-58c9-485b-89c0-1a8035067ba8',
      name: 'OZIO',
      type: 'ITALIAN',
    })
  })
})
