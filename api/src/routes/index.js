const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { dogsHandler } = require('../handlers/dogsHandler'); 
const { dogByIdHandler } = require('../handlers/dogByIdHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogsHandler);
router.get('/dogs/:breedId', dogByIdHandler);

module.exports = router;
