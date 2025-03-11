const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const CR = require('./Controllers/UserController');

const User = require('./models/User');
const Group = require('./models/Group');
const Kit = require('./models/Kit');
const Course = require('./models/Course');
const StudentGroup = require('./models/StudentGroup');
const CourseGroup = require('./models/CourseGroup');

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/Actividad7_DAW', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conexión a MongoDB exitosa"))
.catch(err => console.error("Error al conectar a MongoDB:", err));

app.use('/api/usuarios', require('./routes/UserRoutes'));
app.use('/api/grupos', require('./routes/grupoRoutes'));
app.use('/api/cursos', require('./routes/CursoRoutes'));
app.use('/api/kits', require('./routes/KitRoutes'));
app.use('/api/relaciones', require('./routes/relacionRoutes'));

// Endpoints
app.post('/api/datos', CR.createUser);
app.get('/api/datos', CR.getUsers);
app.put('/api/datos/:id', CR.updateUser);
app.delete('/api/datos/:id', CR.deleteUser);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send("¡Servidor funcionando!");
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



