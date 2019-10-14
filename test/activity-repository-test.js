const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
const ActivityRepo = require('../src/Activity-repository');
const data = require('./activity-sample-data');

describe('Activity-repo', () => {

  let activityRepo;

  beforeEach(() => {
    activityRepo = new ActivityRepo(data);
  });

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should be an instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  });

  it('should be able to get all data for a certain date', () => {
    expect(activityRepo.getDay('2019/06/20')).to.eql([
      { userID: 1, date: '2019/06/20', numSteps: 14478, minutesActive: 140, flightsOfStairs: 12 },
      { userID: 2, date: '2019/06/20', numSteps: 8153, minutesActive: 74, flightsOfStairs: 10 },
      { userID: 3, date: '2019/06/20', numSteps: 5369, minutesActive: 129, flightsOfStairs: 46 },
      { userID: 4, date: '2019/06/20', numSteps: 3314, minutesActive: 240, flightsOfStairs: 6 },
      { userID: 5, date: '2019/06/20', numSteps: 4760, minutesActive: 219, flightsOfStairs: 46 },
      { userID: 6, date: '2019/06/20', numSteps: 13316, minutesActive: 167, flightsOfStairs: 24 },
      { userID: 7, date: '2019/06/20', numSteps: 13795, minutesActive: 286, flightsOfStairs: 31 },
      { userID: 8, date: '2019/06/20', numSteps: 5680, minutesActive: 137, flightsOfStairs: 2 },
      { userID: 9, date: '2019/06/20', numSteps: 14764, minutesActive: 125, flightsOfStairs: 30 },
      { userID: 10, date: '2019/06/20', numSteps: 3487, minutesActive: 289, flightsOfStairs: 48 }
    ]);
  });

  it('should be able to calculate the average number of stairs climbed for a specific date', () => {
    expect(activityRepo.getAvgStairsClimbed('2019/06/20')).to.equal('25.5');
  });

  it('should be able to calculate the average number of steps taken for a specific date', () => {
    expect(activityRepo.getAvgStepsTaken('2019/06/20')).to.equal('12312')
  })
})