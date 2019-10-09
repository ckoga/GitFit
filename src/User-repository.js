class UserRepo {
  constructor(usersData) {
    this.usersData = usersData;
  }

}

if (typeof module !== "undefined") {
  module.exports = UserRepo;
}
