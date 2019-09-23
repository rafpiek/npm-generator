import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const messageSchema = new mongoose.Schema({
  body: {
    type: String
  },
  userId: {
    type: String
  },
  userName: {
    type: String
  }
}, {
  timestamps: true
})

const Message = mongoose.model('Message', messageSchema)
export default Message