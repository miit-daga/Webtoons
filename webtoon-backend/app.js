const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const webtoonRoutes = require('./routes/webtoonRoutes');
const characterRoutes = require('./routes/characterRoutes');
const limiter = require('./middlewares/rateLimit');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/characters', characterRoutes);
app.use('/api/webtoons', webtoonRoutes);
app.use(limiter);
app.use('/api/auth', userRoutes);
// Home Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
