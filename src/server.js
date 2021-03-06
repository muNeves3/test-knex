const express = require('express');
const app = express();

const routes = require('./routes');
app.use(express.json());
app.use(routes);

//not Found
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

//catch all - middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(3333, () => {
    console.log("O servidor está ligado");
});