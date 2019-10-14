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

  it('should be able to calculate the average number of stairs climbed for a specific date', () => {
    expect(activityRepo.getAvgStairsClimbed('2019/06/20')).to.equal('25.5');
  });

  it('should be able to calculate the average number of steps taken for a specific date', () => {
    expect(activityRepo.getAvgStepsTaken('2019/06/20')).to.equal('12312')
  })
})