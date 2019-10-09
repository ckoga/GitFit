const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const data = require('./hydration-sample-data');

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(data);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  })
});