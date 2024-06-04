/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

describe('Dog routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(async () => {
    await conn.sync({ force: true });

    // Crear datos de prueba
    const dog = await Dog.create({
      name: 'Bulldog',
      weight: '20-25',
      height: '30-40',
      life_span: '10-12 years',
      image: 'https://example.com/bulldog.jpg'
    });

    const temperament = await Temperament.create({
      name: 'Friendly'
    });

    // Asociar el temperamento al perro
    await dog.addTemperament(temperament);
  });

  afterEach(async () => {
    // Limpiar la base de datos después de las pruebas
    await Dog.destroy({ where: {} });
    await Temperament.destroy({ where: {} });
  });

  describe('GET /dogs', () => {
    it('should get 200 and respond with a list of dogs', async () => {
      const res = await request(app).get('/dogs').expect(200);
      expect(res.body).to.be.an('array');
    });

    it('should return data with the correct structure', async () => {
      const res = await request(app).get('/dogs').expect(200);
      expect(res.body[0]).to.have.property('id');
      expect(res.body[0]).to.have.property('name');
      expect(res.body[0]).to.have.property('weight');
      expect(res.body[0]).to.have.property('height');
      expect(res.body[0]).to.have.property('life_span');
      expect(res.body[0]).to.have.property('temperament');
      expect(res.body[0]).to.have.property('image');
    });
    
  });
});
    
//     Dog.sync({ force: true })
//     .then(() => Dog.create(dog)));
//   describe('GET /dogs', () => {
//     it('should get 200', () =>
//       agent.get('/dogs').expect(200)
//     );
//   });
// });
