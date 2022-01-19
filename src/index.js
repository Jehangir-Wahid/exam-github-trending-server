const express = require("express");
const app = express();
const appRoutes = require("./routes/appRoutes");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(appRoutes);

app.get("/", (req, res) => {
    res.send("Hi There!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
