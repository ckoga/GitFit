const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const UserRepo = require('../src/User-repository');
const users = require('../test/user-sample-data');

describe('User', () => {

  let user1, user2, user3, userRepo;

  beforeEach(() => {
    userRepo = new UserRepo(users);
    user1 = new User(users[0]);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should be able to return a users first name', () => {
    expect(user2.getName()).to.equal('Jarvis');
  });
});