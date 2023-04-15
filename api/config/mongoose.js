const mongoose = require("mongoose");

function connectDatabase() {
  return mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.log("Error connecting to the database: ", error);
    });
}

module.exports = connectDatabase;
