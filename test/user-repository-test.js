const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/User-repository');

describe('UserRepo', () => {

  let userRepo;

  beforeEach(() => {
  userRepo = new UserRepo()
  

});

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  });
});