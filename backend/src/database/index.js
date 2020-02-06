import mongoose from 'mongoose'

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://bittencourtEdu:paniclobster@desafiopanic-a2jm4.mongodb.net/desafioPanic?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    )
  }
}

export default new Database()
