import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  name: {
    type: String,
  },
  passwordHash: {
    type: String,
    select: false
  },
}, { timestamps: true })

userSchema.statics.findByEmail = async function (email) {
  const user = await this.findOne({ email })
  return user
}

const User = mongoose.model('User', userSchema)

export default User
