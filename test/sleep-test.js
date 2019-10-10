const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepData = require('./sleep-sample-data');

describe('Sleep', () => {

  let sleep;

  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instanceof Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to group user information', () => {
    expect(sleep.getUserData(1)).to.eql([
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 1, date: '2019/06/18', hoursSlept: 10.4, sleepQuality: 3.1},
      { userID: 1, date: '2019/06/19', hoursSlept: 10.7, sleepQuality: 1.2},
      { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
      { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
      { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
      { userID: 1, date: '2019/06/23', hoursSlept: 7.8, sleepQuality: 1.5 },
      { userID: 1, date: '2019/06/24', hoursSlept: 8, sleepQuality: 1.3 },
      { userID: 1, date: '2019/06/25', hoursSlept: 5.1, sleepQuality: 3.7 }
    ])
  })

  it('should be able to get average sleep hours per day for a user', () => {
    expect(sleep.getAverageHoursSlept(1)).to.equal('7.7')
  });

  it('should return the average sleep quality for a user', () => {
    expect(sleep.getAverageSleepQuality(1)).to.equal('2.5')
  });

  it('should be able to return hours slept for a specific day', () => {
    expect(sleep.getHoursSlept('2019/06/20', 1)).to.equal(9.3);
  });

  it('should be able to return the sleep quality for a specific day', () => {
    expect(sleep.getSleepQuality('2019/06/20', 1)).to.equal(1.2);
  });

  
});