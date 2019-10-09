const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/User-repository');
const users = require('./user-sample-data');

describe('UserRepo', () => {

  let userRepo;

  beforeEach(() => {
  userRepo = new UserRepo(users);
  

});

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  });

  it('should store user data', () => {
    expect(userRepo.users).to.have.a.lengthOf(10);
  });

  describe('getUser', () => { // ask about describe block for one test
    it('should return a user given an id', () =>{
      expect(userRepo.getUser(2)).to.eql(users[1]);
    });
  });

  it('should calculate the average step goal of all users', () => {
    expect(userRepo.calculateAverageStepGoal()).to.equal(6200)
  });
});