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

  it('should be able to find users whose sleep quality was greater than 3 for a week', () => {
    expect(sleepRepo.getGreatSleepers('2019/06/20')).to.eql({
      '1': [ 3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3 ],
      '2': [ 3.8, 3, 3.2, 2.5, 2.4, 4.8, 3.3 ],
      '3': [ 3.4, 4.9, 2.6, 3.4, 1.2, 3.7, 2.1 ],
      '4': [ 4.5, 1.1, 2.5, 2.3, 1.9, 2.7, 1.5 ],
      '5': [ 2.4, 3.7, 4.1, 3.4, 3.5, 4.1, 1.3 ],
      '6': [ 4.3, 1.4, 4, 2, 1.8, 3.2, 4.9 ],
      '7': [ 4.5, 4.1, 1.4, 4.4, 4.9, 3.3, 4.3 ],
      '8': [ 3, 2.2, 2.4, 4.3, 2.8, 3, 4.5 ],
      '9': [ 1.2, 2.2, 2.4, 2.6, 3.9, 2.9, 2.5 ],
      '10': [ 4.4, 3.6, 3.8, 3.1, 1.1, 2.5, 1.7 ]
    });
  });
});