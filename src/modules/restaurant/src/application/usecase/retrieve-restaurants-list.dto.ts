import capitalizeAll from '@/core/src/infrastructure/utils/string/capitalizeAll'
import capitalizeFirstLetter from '@/core/src/infrastructure/utils/string/capitalizeFirstLetter'
import type { Restaurant } from '../../infrastructure/resource/entity/Restaurant'

const formatter = (restaurants: Restaurant[]): Restaurant[] => {
    return restaurants.map((restaurant) => {
      return {
        ...restaurant,
        name: capitalizeAll(restaurant.name) || '-',
        type: capitalizeFirstLetter(restaurant?.type) || '-',
      }
    })
  }

export default formatter