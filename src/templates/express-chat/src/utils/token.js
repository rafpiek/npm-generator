import jwt from 'jsonwebtoken'

export const generate = async (userId) => {
  const secret = process.env.SECRET_KEY
  const token = await jwt.sign({ userId: userId }, secret, { expiresIn: '90d'})
  return token
}

export const verify = async (token) =>  {
  return await jwt.verify(token, process.env.SECRET_KEY)
}
