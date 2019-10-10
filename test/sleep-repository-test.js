const chai = require('chai');
const expect = chai.expect;
const SleepRepo = require('../src/Sleep-repository');
const data = require('./sleep-sample-data');

describe('SleepRepo', () => {

  let sleepRepo;

  beforeEach(() => {
    sleepRepo = new SleepRepo(data);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  });

  it('should be able to calculate all users average sleep quality', () => {
    expect(sleepRepo.getAverageSleepQual()).to.equal('3.0');
  });
})