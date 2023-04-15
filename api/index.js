const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/mongoose")

//config
dotenv.config({path:"api/config/config.env"})

const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on http://localhost:${process.env.PORT}`)
    })
};

// connecting to database
connectDatabase()
  .then(() => {
    startServer();
  });
