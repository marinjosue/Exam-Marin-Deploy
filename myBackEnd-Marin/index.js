const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();


// Configuration de CORS
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Servitor corridor en el puerto ${PORT}`);
});

