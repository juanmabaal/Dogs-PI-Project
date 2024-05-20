const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { dogsHandler } = require('../handlers/dogsHandler'); 
const { dogByIdHandler } = require('../handlers/dogByIdHandler');
const { dogsByNameHandler } = require('../handlers/dogsByNameHandler');
const { getTemperamentsHandler } = require('../handlers/getTemperamentsHandler');
const { postDogHandler } = require('../handlers/postDogHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogsHandler);
router.get('/dogs/:breedId', dogByIdHandler);
router.get('/name', dogsByNameHandler);
router.get('/temperaments', getTemperamentsHandler);
router.post('/dogs', postDogHandler);

module.exports = router;
