const { expect } = require('chai');
const { Temperament, conn } = require('../../src/db.js');

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    beforeEach( async () => {
      await conn.sync({ force: true })
    });

    describe('Validatios', () => {
        it('should not create a Temperament if name is null', async () => {
            try {
                await Temperament.create({});
            } catch (error) {
                expect(error.message).to.contain('name cannot be null')
            }
        });

        it('should create a Temperament if name is provides', async() => {

                const temperament = await Temperament.create({
                    name: 'Friendly'
                });
                
                expect(temperament.toJSON()).to.have.property('name', 'Friendly')
        })
    })

})