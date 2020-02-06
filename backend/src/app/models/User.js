import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    birthDate: Date,
    individualRegistry: Number,
    state: String,
    city: String,
    githubUrl: String,
  },
  { timestamps: true },
)

export default mongoose.model('User', UserSchema)
