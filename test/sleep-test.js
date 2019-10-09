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
});