const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const conversationRoutes = require("./routes/conversations.routes");
const messagesRoutes = require("./routes/messages.routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");


const PORT = 8000;

initModels();

// instancia de mi aplicacion
const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


db.authenticate()
    .then(() => {
        console.log("DDBB Autenticada");
    })
    .catch((error) => console.log(error));

db.sync({ alter: false })
    .then(() => console.log("DDBB sincronizada"))
    .catch((error) => console.log(error));

app.use(userRoutes);
app.use(authRoutes);
app.use(conversationRoutes);
app.use(messagesRoutes);

app.get("/", (req, res) => {
    res.send("welcome to my API chat");
});

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});