import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   idade: {
      type: Number,
      required: true
   }
})

export default mongoose.model('User', userSchema)