const { connect } = require("mongoose")

const connectDb = async () => {
  return connect("mongodb+srv://admin:Subrat12@cluster0.qchimot.mongodb.net/?retryWrites=true&w=majority", { dbName: process.env.DB_NAME })
}


module.exports = { connectDb }
