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
  });

  it('should be able to return the daily average ounces consumed for a given user', () => {
    expect(hydration.getDailyAverageConsumption(1)).to.equal('58.9')
  });

  it('should be able to return ounces consumed on a specific date', () => {
    expect(hydration.getDailyConsumption('2019/06/20', 1)).to.equal(50);
  })
});