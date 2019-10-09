class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  }

  getName() {
    let name = this.name.split(' ')
    return name[0];
  }
}

if (typeof module !== "undefined") {
  module.exports = User;
}