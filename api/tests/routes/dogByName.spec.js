/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

describe('Dog routes by name', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(async () => {
    await conn.sync({ force: true });

    // Crear datos de prueba
    const dog1 = await Dog.create({
      name: 'Bulldog',
      weight: '20-25',
      height: '30-40',
      life_span: '10-12 years',
      image: 'https://example.com/bulldog.jpg'
    });

    const dog2 = await Dog.create({
      name: 'Beagle',
      weight: '10-15',
      height: '25-35',
      life_span: '12-15 years',
      image: 'https://example.com/beagle.jpg'
    });

    const temperament1 = await Temperament.create({
      name: 'Friendly'
    });

    const temperament2 = await Temperament.create({
      name: 'Active'
    });

    // Asociar temperamentos a los perros
    await dog1.addTemperament(temperament1);
    await dog2.addTemperament(temperament2);
  });

  afterEach(async () => {
    // Limpiar la base de datos después de las pruebas
    await Dog.destroy({ where: {} });
    await Temperament.destroy({ where: {} });
  });

  describe('GET /name', () => {
    it('should get 200 and respond with dogs matching the name', async () => {
      const res = await request(app).get('/name?name=Bulldog').expect(200);
      expect(res.body).to.be.an('array');
      expect(res.body[0]).to.have.property('name', 'Bulldog');
    });

    it('should get 404 and return an error message if no dogs match the name', async () => {
      const res = await request(app).get('/name?name=Nonexistent').expect(404);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal(`No se encontraron perros con el nombre que incluya 'Nonexistent'.`);
  });

    it('should return data with the correct structure', async () => {
      const res = await request(app).get('/name?name=Beagle').expect(200);
      expect(res.body[0]).to.have.property('id');
      expect(res.body[0]).to.have.property('name', 'Beagle');
      expect(res.body[0]).to.have.property('weight');
      expect(res.body[0]).to.have.property('height');
      expect(res.body[0]).to.have.property('life_span');
      expect(res.body[0]).to.have.property('temperament');
      expect(res.body[0]).to.have.property('image');
    });

    it('should get 400 if no name query parameter is provided', async () => {
      const res = await request(app).get('/name').expect(400);
      expect(res.body).to.have.property('error');
    });
  });
});
