import 'dotenv/config';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 4000;

// routes here

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json);

// routes

// app.get('*', (req, res) => {
//     res.json('server running');
// });

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
