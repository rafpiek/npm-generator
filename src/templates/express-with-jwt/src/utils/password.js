import bcrypt from 'bcrypt'

export const hash = async (password) => {
  return await bcrypt.hash(password, 10)
}

export const compare = async(password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash)
}
