const uuidProvider = (): string => {
  return crypto.randomUUID()
}

export default uuidProvider