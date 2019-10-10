class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  };

  calculateAverageStepGoal() {
    return this.users.reduce((acc, user) => {
     return acc += user.dailyStepGoal;
    }, 0) / this.users.length;
  };
};

if (typeof module !== "undefined") {
  module.exports = UserRepo;
}
