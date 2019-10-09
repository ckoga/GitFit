const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/User-repository');
const data = require('./user-sample-data');

describe('UserRepo', () => {

  let userRepo;

  beforeEach(() => {
  userRepo = new UserRepo(data)
  

});

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  });

  it('should store user data', () => {
    expect(userRepo.usersData).to.have.a.lengthOf(10);
  });
});