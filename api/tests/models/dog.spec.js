const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    beforeEach( async () => {
      await conn.sync({ force: true })
    });

    describe('Validations', () => {
      it('should not create a Dog if name is null', async () => {
        try {
          await Dog.create({
            weight: '20-25',
            height: '30-40',
            life_span: '10-12 years',
            image: 'https://example.com/bulldog.jpg'
          });
        } catch (error) {
          expect(error.message).to.contain('name cannot be null');
        }
      });

      it('should create a Dog if all required fields are provides', async () => {
          const dog = await Dog.create({
            name: 'Bulldog',
            weight: '20-25',
            height: '30-40',
            life_span: '10-12 years',
            image: 'https://example.com/bulldog.jpg'
          });
          expect(dog.toJSON()).to.have.property('name', 'Bulldog');
        });

        it('should not create a Dog if weight is null', async () => {
          try {
            await Dog.create({
              name: 'Bulldog',
              height: '30-40',
              life_span: '10-12 years',
              image: 'https://example.com/bulldog.jpg'
            });
          } catch (error) {
            expect(error.message).to.contain('weight cannot be null');
          }
        })
      })

    })
  
      