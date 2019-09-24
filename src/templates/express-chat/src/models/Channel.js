import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const channelSchema = new mongoose.Schema({
  identifier: {
    type: String
  }
}, {
  timestamps: true
})

const Channel = mongoose.model('Channel', channelSchema)
export default Channel