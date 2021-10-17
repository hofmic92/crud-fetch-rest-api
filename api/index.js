const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        msg: "Server received GET request on /user",
        id
    });
});

app.post('/user', (req, res) => {
    const { payload } = req.body;
    res.status(201).send({
        msg: "Server received POST request on /user",
        payload
    });
});

app.put('/user', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "Server received PUT request on /user",
        payload
    });
});

app.patch('/user', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "Server received PATCH request on /user",
        payload
    });
});

app.delete('/user', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "Server received DELETE request on /user",
        payload
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
