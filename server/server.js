const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/todo', toDoRoutes);

mongoose.connect(process.env.DB_URL, {
    authSource: "admin",
    user: "aniket-pc",
    pass: "delli3"
}).then((result) => {
    console.log("DB Connected successfully");
}).catch(err => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
})