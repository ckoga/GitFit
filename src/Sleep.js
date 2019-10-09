class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUserData(id) {
    return this.sleepData.filter(data => data.userID === id);
  };

  getAverageHoursSlept(id) {
    let userSleepData = this.getUserData(id);
    
    return (userSleepData.reduce((acc, day) => {
      acc += day.hoursSlept;
      return acc
    }, 0) / userSleepData.length).toFixed(1)
  }

};

if (typeof module !== "undefined") {
  module.exports = Sleep;
};