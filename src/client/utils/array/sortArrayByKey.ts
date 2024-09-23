const sortArrayObjectByKey = <T>(key: keyof T) => (array: T[]): T[] => {
    if (array.length === 0) {
        return []
    }
    return array.sort((a, b) => {
      const nameComparison = String(a[key]).localeCompare(String(b[key]))
      if (nameComparison !== 0) {
        return nameComparison
      } else {
        return 0
      }
    })
}

export default sortArrayObjectByKey