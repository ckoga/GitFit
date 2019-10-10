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

  it('should be able to group user information', () => {
    expect(hydration.getUserData(1)).to.eql([
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 },
      { userID: 1, date: '2019/06/22', numOunces: 43 },
      { userID: 1, date: '2019/06/23', numOunces: 39 },
      { userID: 1, date: '2019/06/24', numOunces: 61 },
      { userID: 1, date: '2019/06/25', numOunces: 51 }
    ])
  });

  it('should be able to return the daily average ounces consumed for a given user', () => {
    expect(hydration.getDailyAverageConsumption(1)).to.equal('58.9')
  });

  it('should be able to return ounces consumed on a specific date', () => {
    expect(hydration.getDailyConsumption('2019/06/20', 1)).to.equal(50);
  });

  it('should be able to return 7 days of consumption data', () => {
    expect(hydration.getWeekConsumption('2019/06/20', 1)).to.eql([
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 },
      { userID: 1, date: '2019/06/22', numOunces: 43 },
      { userID: 1, date: '2019/06/23', numOunces: 39 }
    ]);
  });
});