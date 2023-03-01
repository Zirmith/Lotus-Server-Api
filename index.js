const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const cors = require('cors');


app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/product", (data) => {
    console.log(data);
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

module.exports = app;
