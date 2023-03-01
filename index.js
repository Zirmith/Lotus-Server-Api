const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const cors = require('cors');


app.use(cors());

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

