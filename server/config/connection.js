import { mongoose } from 'mongoose'

mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/wtc_db')

export default mongoose.connection
