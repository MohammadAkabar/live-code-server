const { User } = require('../models/index')

module.exports = {
  async getUsers(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if (!user) {
        return res.status(400).json({
          status: 400,
          message: 'User Not Found',
        })
      }
      return res.status(200).json({
        status: 200,
        message: 'Success Get User by id',
        data: user
      })
    } catch (e) {
      console.log(e)
    }
  },

  async addUsers(req, res) {
    try {
      const { firstName, lastName, email } = req.body

      // const isRegister = await User.findOne({
      //   where: { email: email },
      // })
      // if (isRegister) {
      //   return res.status(400).json({
      //     status: 400,
      //     message: 'Email already Registered',
      //   })
      // }

      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      }

      await User.create(newUser)
      return res.status(200).json({
        status: 200,
        message: 'success registered',
      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        status: 500,
        message: 'internal server error',
      })
    }
  },
}
