const express = require('express');
const { connectDB } = require('./config/db');
const sneakerRoutes = require('./routes/sneakerRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1', sneakerRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', clientRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));