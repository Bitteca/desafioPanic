import User from '../models/User'

class UserController {
  async index(req, res) {
    const users = await User.find()
    return res.json(users)
  }

  async store(req, res) {
    const {
      name,
      email,
      birthDate,
      individualRegistry,
      city,
      state,
      githubUrl,
    } = req.body

    await User.create({
      name,
      email,
      birthDate,
      individualRegistry,
      state,
      city,
      githubUrl,
    })

    return res.json({
      name,
      email,
      birthDate,
      individualRegistry,
      city,
      state,
      githubUrl,
    })
  }

  async destroy(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

export default new UserController()
