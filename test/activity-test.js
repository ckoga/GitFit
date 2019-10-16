const chai = require('chai')
const expect = chai.expect;
const Activity = require('../src/Activity');
const UserRepo = require('../src/User-repository');
const userData = require('../test/user-sample-data');
const data = require('./activity-sample-data');
const spies = ('chai-spies');



describe('Activity', () => {

  let activity, userRepo;

  beforeEach(() => {
    
    activity = new Activity(data, userData);
    userRepo = new UserRepo(userData);

  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be able to find a given day', () => {
    expect(activity.getDay('2019/06/20')).to.eql([
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

  it('should be able to find a user', () => {
    expect(activity.getUser('2019/06/20', 1)).to.eql(
      { userID: 1, date: '2019/06/20', numSteps: 14478, minutesActive: 140, flightsOfStairs: 12 });
  });

  it('should be able to get the users number of steps', ()  => {
    expect(activity.getUserStepsToday('2019/06/20', 1)).to.equal(14478)
  });

  it('should be able to calculate miles walked', () => {
    expect(activity.calculateMilesWalked('2019/06/20', 1)).to.equal('11.8');
  });

  it('should be able to find minutes active for user on a given date', () => {
    expect(activity.getMinActive('2019/06/20', 1)).to.equal(140);
  });

  it('should be able to calculate the average minutes active for 7 days', () => {
    expect(activity.calculateAvgMinActive('2019/06/20', 1)).to.equal('174.3');
  });

  it('should be able to verify if a step goal was reached', () => {
    expect(activity.checkStepGoal('2019/06/20', 1)).to.equal(true);
  });

  it('should be able to verify if a step goal was reached', () => {
    expect(activity.checkStepGoal('2019/06/15', 1)).to.equal(false);
  })

  it('should be able to find all days a user exceeded their step goal', () => {
    expect(activity.getStepGoalDays(1)).to.eql([
      { userID: 1, date: '2019/06/17', numSteps: 14329, minutesActive: 168, flightsOfStairs: 18 },
      { userID: 1, date: '2019/06/20', numSteps: 14478, minutesActive: 140, flightsOfStairs: 12 },
      { userID: 1, date: '2019/06/22', numSteps: 10289, minutesActive: 119, flightsOfStairs: 6 },
      { userID: 1, date: '2019/06/23', numSteps: 13928, minutesActive: 218, flightsOfStairs: 21 }
    ]);
  });

  it('should be able to find a users all time stair climbing record', () => {
    expect(activity.getStairRecord(1)).to.equal(36)
  });

  it('should be able to get a week of step data', () => {
    expect(activity.getWeekStep('2019/06/20', 1)).to.eql([ 14329, 4419, 8429, 14478, 6760, 10289, 13928 ]);
  });
});