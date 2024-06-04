// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const request = require('supertest');
// const app = require('../../src/app.js');
// const { Dog, Temperament, conn } = require('../../src/db.js');

// describe('Dog by ID routes', () => {
//   let dogId;

//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));

//   beforeEach(async () => {
//     await conn.sync({ force: true });

//     // Crear datos de prueba
//     const dog = await Dog.create({
//       name: 'Bulldog',
//       weight: '20-25',
//       height: '30-40',
//       life_span: '10-12 years',
//       image: 'https://example.com/bulldog.jpg'
//     });

//     const temperament = await Temperament.create({
//       name: 'Friendly'
//     });

//     // Asociar el temperamento al perro
//     await dog.addTemperament(temperament);

//     // Capturar el ID del perro creado como una cadena
//     dogId = dog.id.toString();
//   });

//   afterEach(async () => {
//     // Limpiar la base de datos después de las pruebas
//     await Dog.destroy({ where: {} });
//     await Temperament.destroy({ where: {} });
//   });

//   describe('GET /dogs/:breedId', () => {
//     console.log(dogId)
//     it('should get 200 and respond with the details of the dog', async () => {
//       const res = await request(app).get(`/dogs/${dogId}`).expect(200);

//       // Verificar que los IDs coincidan como cadenas para manejar correctamente los UUIDs
//       expect(res.body).to.have.property('id');
//       expect(res.body.id.toString()).to.equal(dogId);

//       // Verificar las otras propiedades
//       expect(res.body).to.have.property('name', 'Bulldog');
//       expect(res.body).to.have.property('weight', '20-25');
//       expect(res.body).to.have.property('height', '30-40');
//       expect(res.body).to.have.property('life_span', '10-12 years');
//       expect(res.body).to.have.property('temperament', 'Friendly');
//       expect(res.body).to.have.property('image', 'https://example.com/bulldog.jpg');
//     });

//     it('should return 404 if the dog is not found', async () => {
//       const res = await request(app).get('/dogs/99999').expect(404);
//       expect(res.body).to.have.property('error');
//       expect(res.body.error).to.include('No se encontró un perro con el ID');
//     });
//   });
// });
