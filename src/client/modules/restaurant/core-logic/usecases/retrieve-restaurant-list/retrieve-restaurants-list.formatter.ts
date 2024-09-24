import type { Restaurant } from '../../models/Restaurant'
import capitalizeWords from '@/client/utils/string/capitalizeWords'
import capitalizeFirstLetter from '@/client/utils/string/capitalizeFirstLetter'

const formatter = (restaurants: Restaurant[]): Restaurant[] => {
    return restaurants.map((restaurant) => {
      return {
        ...restaurant,
        name: capitalizeWords(restaurant.name) || '-',
        type: capitalizeFirstLetter(restaurant?.type) || '-',
      }
    })
  }

export default formatter